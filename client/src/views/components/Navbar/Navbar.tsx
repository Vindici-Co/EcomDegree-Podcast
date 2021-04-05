import React, { useState } from "react";
import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MenuIcon from "@material-ui/icons/Menu";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";

// import navLogo from "./assets/navLogo.png";
import { ReactComponent as NavLogo } from "./assets/NavLogo.svg";
import { ReactComponent as Pipe } from "./assets/Pipe.svg";
import { ReactComponent as NavHamburger } from "./assets/NavHamburger.svg";
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		AppBar: {
			background: "transparent"
		},
		tabs: {
			marginLeft: "25px"
		},
		tab: {
			color: "#white	",
			fontSize: "16px",
			lineHeight: "25px"
		},
		activeTab: {
			fontSize: "20px",
			color: "white",
			// color: "#F49A12",
			fontWeight: 700,
			lineHeight: "25px"
		},
		tabOverrides: {
			textTransform: "capitalize",
			minWidth: 85,
			width: 85
		},
		iconGrid: {
			width: "50%"
		},
		tabsGrid: {
			width: "50%"
		},
		icon: {
			color: "white"
		},
		navBtn: {
			color: "white",
			background: " #F49A12",
			borderRadius: "150px",
			boxShadow: "-10px 10px 50px rgba(244, 154, 18, 0.3)",
			padding: "11px 25px",
			textTransform: "capitalize",
			fontSize: "16px",
			"&:hover": {
				background: " #F49A12"
			}
		},
		indictator: {
			display: "none"
		},
		mobileAppBar: {
			top: "auto",
			bottom: 0,
			background: "white"
		},
		mobileLogo: {
			marginRight: "auto",
			color: "black"
		},
		MenuIcon: {
			marginLeft: "auto"
		},
		drawer: {
			background: " #F49A12",
			color: "white"
		},
		drawerListItem: {
			textAlign: "right"
		},
		drawerListItemSelected: {
			fontSize: "20px",
			color: "white",
			fontWeight: 700,
			lineHeight: "25px"
		},
		text: {}
	})
);

const Navbar = (): JSX.Element => {
	// component state
	const classes = useStyles();
	const theme = useTheme();
	const smallSize = useMediaQuery(theme.breakpoints.down(1200));

	const [tabValue, setTabValue] = useState(0);
	const [openDrawer, setOpenDrawer] = useState(false);

	// handle tab change
	const handleTabChange = (event: React.ChangeEvent<any>, newValue: number) => {
		setTabValue(newValue);
	};

	// tab data
	const tabData = [
		{
			key: 0,
			label: "Home"
		},
		{
			key: 1,
			label: "Learn"
		},
		{
			key: 2,
			label: "Courses"
		},
		{
			key: 3,
			label: "FAQ"
		},
		{
			key: 4,
			label: "Contact"
		}
	];

	/// func to render tab data
	const renderTabs = () =>
		tabData.map((tab) => (
			<Tab
				key={tab.key}
				label={tab.label}
				className={tab.key === tabValue ? classes.activeTab : classes.tab}
				classes={{
					root: classes.tabOverrides
				}}
			/>
		));

	const DesktopNavbar = (): JSX.Element => (
		<>
			<AppBar elevation={0} className={classes.AppBar} position="absolute">
				<Toolbar>
					<NavLogo />
					<div style={{ margin: "0px 30px 0px 30px" }}>
						<Pipe />
					</div>
					<Grid container justify="flex-start" className={classes.tabsGrid}>
						<Tabs
							value={tabValue}
							onChange={handleTabChange}
							className={classes.tabs}
							classes={{ indicator: classes.indictator }}
						>
							{renderTabs()}
						</Tabs>
					</Grid>
					<Grid
						container
						className={classes.iconGrid}
						justify="flex-end"
						alignItems="center"
					>
						<IconButton edge="end" className={classes.icon}>
							<InstagramIcon />
						</IconButton>
						<IconButton edge="end" className={classes.icon}>
							<LinkedInIcon />
						</IconButton>
						<div style={{ margin: "0px 30px 0px 30px" }}>
							<Pipe />
						</div>

						<Button className={classes.navBtn}>Access Course</Button>
					</Grid>
				</Toolbar>
			</AppBar>
		</>
	);

	const MobileNavbar = (): JSX.Element => (
		<>
			<AppBar position="fixed" className={classes.mobileAppBar}>
				<Toolbar>
					{/* <IconButton edge="start" aria-label="logo" className={classes.mobileLogo}>
						<NavLogo />
					</IconButton> */}
					<Typography className={classes.mobileLogo}>ECOM DEGREE UNIVERSITY</Typography>

					<IconButton
						edge="end"
						aria-label="open drawer"
						className={classes.MenuIcon}
						onClick={() => setOpenDrawer(!openDrawer)}
					>
						<MenuIcon style={{ color: "#F49A12", height: "40px", width: "40px" }} />
					</IconButton>
					{/* <NavHamburger style={{ color: "#F49A12", height: "40px", width: "40px" }} /> */}
				</Toolbar>
			</AppBar>
		</>
	);

	return (
		<>
			{smallSize ? MobileNavbar() : DesktopNavbar()}
			<SwipeableDrawer
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
				classes={{ paper: classes.drawer }}
				transitionDuration={450}
				anchor="bottom"
			>
				<List>
					{tabData.map((tab) => (
						<ListItem
							className={classes.drawerListItem}
							button
							key={tab.key}
							onClick={(e) => {
								setOpenDrawer(!openDrawer);
								handleTabChange(e, tab.key);
							}}
							selected={tab.key === tabValue ? true : false}
							classes={{ selected: classes.drawerListItemSelected }}
						>
							<ListItemText
								primary={tab.label}
								className={classes.text}
								disableTypography
							/>
						</ListItem>
					))}
				</List>
			</SwipeableDrawer>
		</>
	);
};

export default Navbar;
