import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/";
import { IconButton } from "@material-ui/core";
import { ArrowRight, ArrowLeft } from "@material-ui/icons";
import { PageOneLeft, PageOneRight } from "./PageOne";
import { PageTwoLeft, PageTwoRight } from "./PageTwo";
import { PageThreeLeft, PageThreeRight } from "./PageThree";

import bgPageOne from "./assets/bgPageOne.png";
import bgPageTwo from "./assets/bgPageTwo.png";

const Container = styled.div`
	height: 1080px;
	width: 1920px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 0;
	margin: 0;
	color: white;
`;

const OuterLeftContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const InnerLeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 743.688px;
	height: 349.969px;
	margin: 0;
`;

const RightContainer = styled.div`
	width: 216.41px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Btns = styled.div`
	display: flex;
	width: auto;
	color: white;
`;

const useStyles = makeStyles({
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

// export interface ILandingPageProps {
// 	pages: (string | React.FC)[];
// }

const LandingPage: React.FC = (): JSX.Element => {
	// different pages
	const pages = [
		[<PageOneLeft key="00" />, <PageOneRight key="01" />, bgPageOne],
		[<PageTwoLeft key="10" />, <PageTwoRight key="11" />, bgPageTwo],
		[<PageThreeLeft key="20" />, <PageThreeRight key="21" />, "lightblue"]
	];
	const numPages = pages.length;

	// component state
	const classes = useStyles();
	const [page, setPage] = useState(0);

	// function to handle switching between pages.
	const handlePageChange = (event: number): void => {
		let newPage = (page + event) % numPages;
		while (newPage < 0) {
			newPage += numPages;
		}
		setPage(newPage);
	};

	// JSX
	return (
		<Container
			style={{
				backgroundImage: `url(${pages[page][2]})`,
				backgroundColor: "#030314"
			}}
		>
			<OuterLeftContainer>
				<InnerLeftContainer>{pages[page][0]} </InnerLeftContainer>
				<Btns>
					<IconButton className={classes.minusBtn} onClick={() => handlePageChange(-1)}>
						<ArrowLeft style={{ fontSize: 50 }} />
					</IconButton>
					<IconButton className={classes.plusBtn} onClick={() => handlePageChange(1)}>
						<ArrowRight style={{ fontSize: 50 }} />
					</IconButton>
				</Btns>
			</OuterLeftContainer>
			<RightContainer>{pages[page][1]}</RightContainer>
		</Container>
	);
};
export default LandingPage;
