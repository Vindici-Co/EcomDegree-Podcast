import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/";
import { IconButton } from "@material-ui/core";
import { ArrowRight, ArrowLeft } from "@material-ui/icons";
import { PageOneLeft, PageOneRight } from "./PageOne";
import { PageTwoLeft, PageTwoRight } from "./PageTwo";
import { PageThreeLeft, PageThreeRight } from "./PageThree";

const Container = styled.div`
	height: 1080px;
	width: 1920px;
	background: ${props => props.theme.colors.main.black};
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 0;
	margin: 0;
	color: white;
`;

const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	// border: 2px solid red;
`;

const RightContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	// border: 2px solid green;
`;

const Btns = styled.div`
	// left: 300px;
	// top: 800px;
	// position: absolute;
	display: flex;
	width: auto;
	justify-content: center;
	color: white;
	align-self: flex-start;
`;

const useStyles = makeStyles({
	minusBtn: {
		background: "grey",
		height: "56px",
		width: "60px",
		left: " 0px",
		top: " 0px",
		borderRadius: "20px",
		marginRight: "20px",
		"&:hover": {
			background: "grey"
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
			background: "#F49A12"
		}
	}
});

// export interface ILandingPageProps {
// 	pages: (string | React.FC)[];
// }

const LandingPage: React.FC = (): JSX.Element => {
	// different pages
	const pages = [
		[<PageOneLeft key="00" />, <PageOneRight key="01" />],
		[<PageTwoLeft key="10" />, <PageTwoRight key="11" />],
		[<PageThreeLeft key="20" />, <PageThreeRight key="21" />]
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
		<Container>
			<LeftContainer>
				{pages[page][0]}{" "}
				<Btns>
					<IconButton className={classes.minusBtn} onClick={() => handlePageChange(-1)}>
						<ArrowLeft style={{ fontSize: 50 }} />
					</IconButton>
					<IconButton className={classes.plusBtn} onClick={() => handlePageChange(1)}>
						<ArrowRight style={{ fontSize: 50 }} />
					</IconButton>
				</Btns>
			</LeftContainer>
			<RightContainer>{pages[page][1]}</RightContainer>
		</Container>
	);
};
export default LandingPage;
