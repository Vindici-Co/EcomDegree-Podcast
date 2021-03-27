import React from "react";
import styled from "styled-components";

const TitleDivLeft = styled.p`
	font-family: ${props => props.theme.fonts.main};
	font-size: 75px;
	font-style: normal;
	font-weight: 700;
	line-height: 90px;
	letter-spacing: -2.25px;
	text-align: left;
	margin: 0;
`;

const Orange = styled.span`
	color: ${props => props.theme.colors.main.orange};
`;

const LeftDesc = styled.p`
	font-family: ${props => props.theme.fonts.secondary};
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
			<TitleDivLeft>
				Listen to EDU’s Latest <br /> Podcast
				<br /> <Orange>Mindset Mastery</Orange>
				<LeftDesc>
					When our team provides design and digital marketing fashion
					<br /> design. The app provides design and digital graphic design.
				</LeftDesc>
			</TitleDivLeft>
		</>
	);
};

const RightTitleContainer = styled.p`
	font-family: ${props => props.theme.fonts.main};
	font-size: 231px;
	font-style: normal;
	font-weight: 800;
	line-height: 231px;
	letter-spacing: -0.04em;
	text-align: left;
	margin: 0;
`;

const LargerRightTitle = styled.span`
	font-size: 320.41px;
	font-style: normal;
	font-weight: 800;
	line-height: 145px;
	letter-spacing: -0.04em;
	text-align: left;
	font-family: ${props => props.theme.fonts.main};
`;

const RightOrange = styled.span`
	margin-top: 36px;
	font-size: 120px;
	font-style: normal;
	font-weight: 600;
	line-height: 120px;
	letter-spacing: 0em;
	text-align: left;
	color: ${props => props.theme.colors.main.orange};
	font-family: ${props => props.theme.fonts.main};
`;

const RightDesc = styled.p`
	margin-top: 90px;
	font-size: 38px;
	font-style: normal;
	font-weight: 700;
	line-height: 38px;
	letter-spacing: 0em;
	text-align: left;
	font-family: ${props => props.theme.fonts.secondary};
`;

export const PageThreeRight: React.FC = (): JSX.Element => {
	return (
		<>
			<RightTitleContainer>MIND</RightTitleContainer>
			<br />
			<LargerRightTitle>SET</LargerRightTitle>
			<br />
			<RightOrange>MASTERY</RightOrange>
			<RightDesc>HOSTED BY: WILLIAM RIVERA</RightDesc>
		</>
	);
};
