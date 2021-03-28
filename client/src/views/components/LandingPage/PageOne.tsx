import React from "react";
import styled from "styled-components";

const TitleDivLeft = styled.p`
	font-weight: bold;
	font-size: 75px;
	line-height: 90px;
	letter-spacing: -2.25px;
	color: white;
	font-family: ${(props) => props.theme.fonts.main};
	margin: 0;
`;

const Orange = styled.span`
	color: ${(props) => props.theme.colors.main.orange};
`;

const LeftDesc = styled.p`
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0.5px;
	text-align: left;
	font-family: ${(props) => props.theme.fonts.secondary};
`;

export const PageOneLeft: React.FC = (): JSX.Element => {
	return (
		<>
			<TitleDivLeft>
				6+ Hours of <br />
				<Orange>Free Game.</Orange>
				<LeftDesc>
					When our team provides design and digital marketing fashion design. The
					<br />
					app provides design and digital graphic design.
				</LeftDesc>
			</TitleDivLeft>
		</>
	);
};

const RightTitleContainer = styled.p`
	font-family: ${(props) => props.theme.fonts.main};
	font-size: 84px;
	font-style: normal;
	font-weight: 800;
	line-height: 84px;
	letter-spacing: -0.04em;
	text-align: left;
	margin: 0;
`;

const LargerRightTitle = styled.span`
	font-family: ${(props) => props.theme.fonts.main};
	font-size: 116px;
	line-height: 0px;
	letter-spacing: -0.03em;
	text-align: left;
	margin: 25px 0px 23px;
`;

const RightOrange = styled.span`
	font-family: ${(props) => props.theme.fonts.main};
	font-size: 43.3015px;
	font-weight: 600;
	letter-spacing: 0em;
	text-align: left;
	color: ${(props) => props.theme.colors.main.orange};
`;

const RightDesc = styled.p`
	font-family: Metropolis;
	font-size: 14px;
	font-style: normal;
	font-weight: 700;
	line-height: 14px;
	letter-spacing: 0em;
	text-align: left;
	font-family: ${(props) => props.theme.fonts.secondary};
`;

export const PageOneRight: React.FC = (): JSX.Element => {
	return (
		<>
			{/* <RightTitleContainer>MIND</RightTitleContainer>
			<br />
			<LargerRightTitle>SET</LargerRightTitle>
			<br />
			<RightOrange>MASTERY</RightOrange>
			<RightDesc>HOSTED BY: WILLIAM RIVERA</RightDesc> */}
		</>
	);
};
