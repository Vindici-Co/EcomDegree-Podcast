import React from "react";
import styled from "styled-components";
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
			<Fade in={true} timeout={1500}>
				<TitleDivLeft>
					6+ Hours of <br />
					<Orange>Free Game.</Orange>
					<LeftDesc>
						When our team provides design and digital marketing fashion design. The
						<br />
						app provides design and digital graphic design.
					</LeftDesc>
				</TitleDivLeft>
			</Fade>
		</>
	);
};

export const PageOneRight: React.FC = (): JSX.Element => {
	return <></>;
};
