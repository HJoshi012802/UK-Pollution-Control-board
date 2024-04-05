import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import { CssBaseline, Container, Grid, Box } from "@mui/material";
import MyAppBar from "./Components/MyAppBar";
import MainBanner from "./Components/MainBanner";
import Sidebar from "./Components/Sidebar";
import InfoCards from "./Components/InfoCards";
import WelcomeText from "./Components/WelcomeText";
import EOICard from "./Components/EOICard";
import UsefulInfo from "./Components/UsefulInfo";
import EnvironmentLegislation from "./Components/EnvironmentLegislation";
import NoticesAndUpdates from "./Components/NoticesAndUpdates";
import QuickLinks from "./Components/QuickLinks";
import ServiceHelp from "./Components/ServiceHelp";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import RunningText from "./Components/RunningText"; 

function PublicLayout() {
	return (
		<>
			<CssBaseline />
			<MyAppBar />
			<MainBanner />
			<RunningText />
			<Container maxWidth="lg">
				<Grid container spacing={3}>
					{/* <Grid item xs={12}>
          </Grid> */}
					<Grid item xs={3} >
						<Sidebar />
					</Grid>
					<Grid item xs={9}>  
						<Outlet />
						<InfoCards />
						<EOICard />
						<UsefulInfo />
						<EnvironmentLegislation />
						<NoticesAndUpdates />
						<QuickLinks />
						<ServiceHelp />
					</Grid>
				</Grid>
			</Container>
			<Gallery />
			<Footer />
		</>
	);
}

export default PublicLayout;