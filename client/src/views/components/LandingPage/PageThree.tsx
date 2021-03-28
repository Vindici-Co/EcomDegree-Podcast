import React from "react";
import styled from "styled-components";
import PageThreeThumbnail from "./assets/PageThreeThumbnail.png";
import ApplePodcasts from "./assets/ApplePodcasts.png";

const TitleDivLeft = styled.p`
	font-family: ${(props) => props.theme.fonts.main};
	font-size: 75px;
	font-style: normal;
	font-weight: 700;
	line-height: 90px;
	letter-spacing: -2.25px;
	text-align: left;
	margin: 0;
`;

const Orange = styled.span`
	color: ${(props) => props.theme.colors.main.orange};
`;

const LeftDesc = styled.p`
	font-family: ${(props) => props.theme.fonts.secondary};
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0.5px;
	text-align: left;
`;

export const PageThreeLeft: React.FC = () => {
	return (
		<>
			<img
				src={ApplePodcasts}
				alt="ApplePodcasts"
				style={{
					height: "58.18px",
					width: "240px"
				}}
			/>
			<TitleDivLeft>
				Listen Now <br />
				<Orange>Mindset Mastery</Orange>
				<LeftDesc>
					When our team provides design and digital marketing fashion
					<br /> design. The app provides design and digital graphic design.
				</LeftDesc>
			</TitleDivLeft>
		</>
	);
};

export const PageThreeRight: React.FC = (): JSX.Element => {
	return (
		<>
			<img
				src={PageThreeThumbnail}
				alt="PageThreeThumbnail"
				style={{
					margin: "0px 260px 0px 0px"
				}}
			/>
		</>
	);
};
