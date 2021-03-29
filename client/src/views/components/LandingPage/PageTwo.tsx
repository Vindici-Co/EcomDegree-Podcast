import React from "react";
import styled from "styled-components";
import PageTwoLego from "./assets/PageTwoLego.png";
import { Fade } from "@material-ui/core/";

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
	font-family: ${(props) => props.theme.fonts.secondary};
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
			<Fade in={true} timeout={2000}>
				<TitleDivLeft>
					Latest Youtube
					<br /> Video
					<LeftDesc>
						A Case Study on how EDU student Sam Maxwell made $10,000 his first <br />
						weeek dropshipping. Tune in to learn you can apply Sam’s key points of <br />
						advice to your ecommerce business.
					</LeftDesc>
				</TitleDivLeft>
			</Fade>
		</>
	);
};

export const PageTwoRight: React.FC = (): JSX.Element => {
	return (
		<>
			<Fade in={true} timeout={2000}>
				<img
					src={PageTwoLego}
					alt="PageTwoLego"
					style={{
						margin: "0px 360px 0px 0px"
					}}
				/>
			</Fade>
		</>
	);
};
