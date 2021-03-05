import axios from "axios";
import config from "config";

class KlavioApi {
	constructor() {
		this.api_key = config.get("klaviyoKey");
		this.headers = {
			"Content-Type": "application/json"
		};
		this.listID = config.get("listID");
		this.handleError = (err) => {
			const errObj = {
				errMsg: err.message,
				dataErr: err.response.data,
				statusErr: err.response.status,
				headers: err.response.headers
			};
			console.log(errObj);
			return { error: true, errObj };
		};
	}

	/**
	 * !List methods:
	 * @method createList: creates a new mailign list
	 * @method getAllLists: gets all Klaviyo Mailing Lists
	 * @method getList: gets Klaviyo list by list id
	 *
	 * !Member Methods:
	 * @method alterMembers: add/remove members to list
	 * @method checkForMembers: checks Klaviyo list by member email
	 *
	 * !Subscriber Methods:
	 * @method alterSubs: add/remove subscribers to list
	 * @method checkForSubs: checks Klaviyo list for subscribers by email
	 *
	 */

	createList = async (listN_name) => {
		try {
			const newMailingList = await axios.post(
				"https://a.klaviyo.com/api/v2/lists",
				{ api_key: this.api_key, list_name },
				{
					headers: this.headers
				}
			);

			return newMailingList.data;
		} catch (err) {
			return this.handleError(err);
		}
	};

	getAllLists = async () => {
		try {
			const lists = await axios.get(
				"https://a.klaviyo.com/api/v2/lists",
				{
					params: {
						api_key: this.api_key
					}
				},
				{
					headers: this.headers
				}
			);

			return lists.data;
		} catch (err) {
			return this.handleError(err);
		}
	};

	getList = async () => {
		try {
			const list = await axios.get(
				`https://a.klaviyo.com/api/v2/list/${this.listID}`,
				{
					params: {
						api_key: this.api_key
					}
				},
				{
					headers: this.headers
				}
			);

			return list.data;
		} catch (err) {
			return this.handleError(err);
		}
	};

	alterMembers = async (profiles, method) => {
		let data;

		if (method === "delete") {
			const { emails, phone_numbers, push_tokens } = profiles;
			data = JSON.stringify({
				api_key: this.api_key,
				emails,
				phone_numbers,
				push_tokens
			});
		} else if (method === "post") {
			data = JSON.stringify({
				api_key: this.api_key,
				profiles
			});
		}

		var config = {
			method,
			url: `https://a.klaviyo.com/api/v2/list/${this.listID}/members`,
			headers: {
				"Content-Type": "application/json"
			},
			data
		};

		try {
			const profile = await axios(config);
			return { ...profile.data, error: false };
		} catch (err) {
			return this.handleError(err);
		}
	};

	checkForMembers = async (emails, phone_numbers, push_tokens) => {
		const data = JSON.stringify({
			api_key: this.api_key,
			emails,
			phone_numbers,
			push_tokens
		});

		const config = {
			method: "get",
			url: `https://a.klaviyo.com/api/v2/list/${this.listID}/members`,
			headers: {
				"Content-Type": "application/json"
			},
			data
		};

		try {
			const profiles = await axios(config);
			return { profiles: profiles.data, numProfiles: profiles.data.length, error: false };
		} catch (err) {
			return this.handleError(err);
		}
	};

	alterSubs = async (profiles, method) => {
		let data;

		if (method === "delete") {
			const { emails, phone_numbers, push_tokens } = profiles;
			data = JSON.stringify({
				api_key: this.api_key,
				emails,
				phone_numbers,
				push_tokens
			});
		} else if (method === "post") {
			data = JSON.stringify({
				api_key: this.api_key,
				profiles
			});
		}

		var config = {
			method,
			url: `https://a.klaviyo.com/api/v2/list/${this.listID}/subscribe`,
			headers: {
				"Content-Type": "application/json"
			},
			data
		};

		try {
			const subscribers = await axios(config);
			return { subscribers: subscribers.data, error: false };
		} catch (err) {
			return this.handleError(err);
		}
	};

	checkForSubs = async (emails, phone_numbers, push_tokens) => {
		const data = JSON.stringify({
			api_key: this.api_key,
			emails,
			phone_numbers,
			push_tokens
		});

		const config = {
			method: "get",
			url: `https://a.klaviyo.com/api/v2/list/${this.listID}/subscribe`,
			headers: {
				"Content-Type": "application/json"
			},
			data
		};

		try {
			const subscribers = await axios(config);
			return {
				subscribers: subscribers.data,
				numSubs: subscribers.data.length,
				error: false
			};
		} catch (err) {
			return this.handleError(err);
		}
	};
}

export default KlavioApi;
