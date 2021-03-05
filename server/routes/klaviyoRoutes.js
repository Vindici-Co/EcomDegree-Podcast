import express from "express";
import KlavioApi from "../email/Klaviyo.js";

const klavioApi = new KlavioApi();
const router = express.Router();

/**
 * !LIST METHODS
 * @route /list/create @type post
 * @route /lists       @type get
 * @route /list        @type get
 */

// create a new list
router.post("/list/create", async (req, res) => {
	const newMailingList = await klavioApi.createList(req.body.list_name);

	if (!newMailingList.error) return res.status(200).send(newMailingList);
	else return res.status(400).send({ newMailingList });
});

// get all Klaviyo lists that have been made
router.get("/lists", async (req, res) => {
	const mailiingLists = await klavioApi.getAllLists();

	if (!mailiingLists.error) return res.status(200).send(mailiingLists);
	else return res.status(400).send({ mailiingLists });
});

// get specific list by id
// I have a specific list id stored in default.json
router.get("/list", async (req, res) => {
	const list = await klavioApi.getList();

	if (!list.error) return res.status(200).send(list);
	else return res.status(400).send({ list });
});

/**
 * !MEMBER ROUTES
 * @route /members/add     @type post
 * @route /members/remove  @type delete
 * @route /members         @type get
 */

router.post("/members/add", async (req, res) => {
	const { profiles } = req.body;

	const members = await klavioApi.alterMembers(profiles, "post");

	if (!members.error) return res.status(200).send({ members });
	else return res.status(400).send({ members });
});

router.delete("/members/remove", async (req, res) => {
	const members = await klavioApi.alterMembers(req.body, "delete");

	if (!members.error) return res.status(200).send("Members succsessfully deleted!");
	else return res.status(400).send({ members });
});

router.get("/members", async (req, res) => {
	const { emails, phone_numbers, push_tokens } = req.body;

	const members = await klavioApi.checkForMembers(emails, phone_numbers, push_tokens);

	if (!members.error) return res.status(200).send({ members });
	else return res.status(400).send({ members });
});

/**
 * !SUBSCRIBER ROUTES
 * @route /subscriber/add    @type post
 * @route /subscriber/remove @type post
 * @route /subscriber        @type get
 */

router.post("/subscriber/add", async (req, res) => {
	const { profiles } = req.body;

	const subs = await klavioApi.alterSubs(profiles, "post");

	if (!subs.error) return res.status(200).send({ subs });
	else return res.status(400).send({ subs });
});

router.post("/subscriber/add", async (req, res) => {
	const { profiles } = req.body;

	const subs = await klavioApi.alterSubs(profiles, "delete");

	if (!subs.error) return res.status(200).send({ subs });
	else return res.status(400).send({ subs });
});

router.get("/subscribers", async (req, res) => {
	const { emails, phone_numbers, push_tokens } = req.body;

	const subs = await klavioApi.checkForSubs(emails, phone_numbers, push_tokens);

	if (!subs.error) return res.status(200).send({ subs });
	else return res.status(400).send({ subs });
});

export default router;
