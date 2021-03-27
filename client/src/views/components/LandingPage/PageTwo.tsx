import React from "react";
import styled from "styled-components";

const TitleDivLeft = styled.p`
	font-weight: bold;
	font-size: 75px;
	line-height: 90px;
	letter-spacing: -2.25px;
	color: white;
	font-family: ${props => props.theme.fonts.main};
	margin-bottom: 0;
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

export const PageTwoLeft: React.FC = (): JSX.Element => {
	return (
		<>
			<TitleDivLeft>
				Latest Youtube
				<br /> Video
				<LeftDesc>
					A Case Study on how EDU student Sam Maxwell made $10,000 his first <br />
					weeek dropshipping. Tune in to learn you can apply Sam’s key points of <br />
					advice to your ecommerce business.
				</LeftDesc>
			</TitleDivLeft>
		</>
	);
};

const RightTitleContainer = styled.p`
	font-family: Metropolis;
	font-size: 55px;
	font-style: normal;
	font-weight: 700;
	line-height: 55px;
	letter-spacing: 0em;
	text-align: left;
	color: ${props => props.theme.colors.main.orange};
	font-family: ${props => props.theme.fonts.main};
`;

const RightWhiteTitle = styled.span`
	color: white;
`;

export const PageTwoRight: React.FC = (): JSX.Element => {
	return (
		<>
			<RightTitleContainer>
				0 TO 10K <br />
				<RightWhiteTitle>
					IN 14 DAYS <br />
				</RightWhiteTitle>
				SELLING <RightWhiteTitle>A</RightWhiteTitle> <br />
				LEGO
			</RightTitleContainer>
		</>
	);
};
