import React, { useEffect } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";
import { Fade, useMediaQuery } from "@material-ui/core/";
import bgPageOne from "./assets/bgPageOne.png";
import { IconButton } from "@material-ui/core";
import { ArrowRight, ArrowLeft } from "@material-ui/icons";
import { IPageProps, customUseStyles } from "./LandingPage";

const PageOne: React.FC<IPageProps> = (props: IPageProps): JSX.Element => {
	const smallSize = useMediaQuery("(max-width:1200px)");
	const styleProps = { smallSize };
	const classes = customUseStyles(styleProps);

	useEffect(() => {
		console.log(smallSize);
	}, [smallSize]);

	const TitleDivLeft = styled.p`
		font-weight: bold;
		line-height: ${smallSize ? "65px" : "90px"};
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

	return (
		<div
			className={classes.Container}
			style={{
				backgroundImage: `url(${bgPageOne})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover"
			}}
			data-testid="pageOneContainer"
		>
			<Fade in={true} timeout={1000}>
				<div className={classes.OuterLeftContainer}>
					<div className={classes.InnerLeftContainer}>
						<TitleDivLeft style={{ fontSize: smallSize ? "50px" : "75px" }}>
							<Orange>6+</Orange> Hours of <br />
							Free Game.
							<LeftDesc>
								When our team provides design and digital marketing fashion design. The
								{smallSize ? null : <br />} app provides design and digital graphic
								design.
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
			{smallSize ? null : (
				<div className={classes.RightContainer}>
					<></>
				</div>
			)}
		</div>
	);
};

export default PageOne;
