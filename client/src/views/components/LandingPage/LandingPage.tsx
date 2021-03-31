import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import { makeStyles } from "@material-ui/styles";

interface styleProps {
	smallSize: boolean;
}

export const customUseStyles = makeStyles({
	Container: (styleProps: styleProps) => ({
		height: "100vh",
		width: styleProps.smallSize ? "100%" : "100vw",
		display: "flex",
		flexDirection: styleProps.smallSize ? "column" : "row",
		justifyContent: styleProps.smallSize ? "center" : "space-around",
		alignItems: "center",
		padding: "0",
		margin: "0",
		color: "white",
		overflow: styleProps.smallSize ? "hidden" : ""
	}),

	OuterLeftContainer: {
		display: "flex",
		flexDirection: "column"
	},

	InnerLeftContainer: (styleProps: styleProps) => ({
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		width: styleProps.smallSize ? "100%" : "743.688px",
		height: styleProps.smallSize ? "100%" : "349.969px",
		margin: "0"
	}),
	Btns: {
		display: "flex",
		width: "auto",
		color: "white"
	},
	RightContainer: (styleProps: styleProps) => ({
		width: "216.41px",
		display: styleProps.smallSize ? "none" : "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "96%"
	}),
	minusBtn: {
		background: "#F49A12",
		color: "white",
		height: "56px",
		width: "60px",
		left: " 0px",
		top: " 0px",
		borderRadius: "20px",
		marginRight: "20px",
		"&:hover": {
			background: "#e3a880"
		}
	},
	plusBtn: {
		background: "#F49A12",
		color: "white",
		height: "56px",
		width: "60px",
		left: " 0px",
		top: " 0px",
		borderRadius: "20px",
		"&:hover": {
			background: "#e3a880"
		}
	}
});

export interface IPageProps {
	pageChange(event: number): void;
}

const LandingPage: React.FC = (): JSX.Element => {
	const [page, setPage] = useState(0);

	const pageChange = (event: number): void => {
		const numPages = 3;
		let newPage = (page + event) % numPages;
		while (newPage < 0) {
			newPage += numPages;
		}
		setPage(newPage);
	};

	const newPages = [
		<PageOne key={0} pageChange={pageChange} />,
		<PageTwo key={1} pageChange={pageChange} />,
		<PageThree key={2} pageChange={pageChange} />
	];

	return (
		<>
			<Navbar />
			{newPages[page]}
		</>
	);
};
export default LandingPage;
