import React from "react";
import styled from "styled-components";
import PageTwoLego from "./assets/PageTwoLego.png";
import { IconButton } from "@material-ui/core";
import { ArrowRight, ArrowLeft } from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Fade, useMediaQuery } from "@material-ui/core/";
import bgPageTwo from "./assets/bgPageTwo.png";
import { IPageProps, customUseStyles } from "./LandingPage";

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

const PageTwo: React.FC<IPageProps> = (props: IPageProps): JSX.Element => {
	const smallSize = useMediaQuery("(max-width:1200px)");
	const styleProps = { smallSize };
	const classes = customUseStyles(styleProps);
	return (
		<div
			className={classes.Container}
			style={{
				backgroundImage: `url(${bgPageTwo})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover"
			}}
		>
			<Fade in={true} timeout={1000}>
				<div className={classes.OuterLeftContainer}>
					<div className={classes.InnerLeftContainer}>
						<TitleDivLeft>
							Latest Youtube
							<br /> Video
							<LeftDesc>
								A Case Study on how EDU student Sam Maxwell made $10,000 his first <br />
								weeek dropshipping. Tune in to learn you can apply Sam’s key points of{" "}
								<br />
								advice to your ecommerce business.
							</LeftDesc>
						</TitleDivLeft>
					</div>
					<div className={classes.Btns}>
						<IconButton className={classes.minusBtn} onClick={() => props.pageChange(-1)}>
							<ArrowLeft style={{ fontSize: 50 }} />
						</IconButton>
						<IconButton className={classes.plusBtn} onClick={() => props.pageChange(1)}>
							<ArrowRight style={{ fontSize: 50 }} />
						</IconButton>
					</div>
				</div>
			</Fade>
			<Fade in={true} timeout={1000}>
				<div className={classes.RightContainer}>
					<img
						src={PageTwoLego}
						alt="PageTwoLego"
						style={{
							margin: "0px 360px 0px 0px"
						}}
					/>
				</div>
			</Fade>
		</div>
	);
};

export default PageTwo;
