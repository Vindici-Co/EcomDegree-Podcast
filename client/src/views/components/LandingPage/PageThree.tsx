import React from "react";
import styled from "styled-components";
import PageThreeThumbnail from "./assets/PageThreeThumbnail.png";
import ApplePodcasts from "./assets/ApplePodcasts.png";
import { IconButton } from "@material-ui/core";
import { ArrowRight, ArrowLeft } from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Fade, useMediaQuery } from "@material-ui/core/";
import { IPageProps, customUseStyles } from "./LandingPage";

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

const PageThree: React.FC<IPageProps> = (props: IPageProps): JSX.Element => {
	const smallSize = useMediaQuery("(max-width:1200px)");
	const styleProps = { smallSize };
	const classes = customUseStyles(styleProps);

	return (
		<>
			<div
				className={classes.Container}
				style={{
					backgroundColor: "#030314",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover"
				}}
				data-testid="pageThreeContainer"
			>
				<Fade in={true} timeout={1000}>
					<div className={classes.OuterLeftContainer}>
						<div className={classes.InnerLeftContainer}>
							<img
								src={ApplePodcasts}
								alt="ApplePodcasts"
								style={{
									height: "58.18px",
									width: "240px"
								}}
							/>
							<TitleDivLeft style={{ fontSize: smallSize ? "50px" : "75px" }}>
								Listen Now <br />
								<Orange>Mindset Mastery</Orange>
								<LeftDesc>
									When our team provides design and digital marketing fashion
									<br /> design. The app provides design and digital graphic design.
								</LeftDesc>
							</TitleDivLeft>
						</div>
						<div className={classes.Btns}>
							<IconButton
								className={classes.minusBtn}
								onClick={() => props.pageChange(-1)}
								data-testid="minusButton"
							>
								<ArrowLeft style={{ fontSize: 50 }} />
							</IconButton>
							<IconButton
								className={classes.plusBtn}
								onClick={() => props.pageChange(1)}
								data-testid="plusButton"
							>
								<ArrowRight style={{ fontSize: 50 }} />
							</IconButton>
						</div>
					</div>
				</Fade>
				<Fade in={true} timeout={1000}>
					<div className={classes.RightContainer}>
						<img
							src={PageThreeThumbnail}
							alt="PageThreeThumbnail"
							style={{
								margin: "0px 260px 0px 0px",
								overflow: "hidden"
							}}
						/>
					</div>
				</Fade>
			</div>
		</>
	);
};

export default PageThree;
