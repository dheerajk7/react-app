import React from "react";
import classes from "./App.module.css";
import { NavigationBar } from "../components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LandingPage from "../landingPage";
import PatientDashboard from "../patientDashboard";
import MeetingBoard from "../meetingBoard";
import { ROUTE_CONSTANT } from "../constants";
import Error404 from "../Error404";
import DoctorDashboard from "../doctorDashboard";
import EHRReport from '../reports/EHRReport';
import LabTest from '../reports/LabTestPrescription';
import Prescription from '../reports/PrescriptionReport';

function App() {

  return (
    <Router>
      <div className={classes.App}>
        <NavigationBar />
        <Switch>
          <Route
            exact
            path={ROUTE_CONSTANT.landingPage}
            component={LandingPage}
          />

          <Route
            exact
            path={ROUTE_CONSTANT.doctorDashboard}
            component={(DoctorDashboard)}
          />
          <Route
            exact
            path={ROUTE_CONSTANT.patientDasboard}
            component={PatientDashboard}
          />

          <Route
            exact
            path={ROUTE_CONSTANT.meetingBoard}
            component={MeetingBoard}
          />
          
          <Route
            exact
            path={ROUTE_CONSTANT.labTest}
            component={() => {
              return <LabTest/>
            }}
          />
          <Route
            exact
            path={ROUTE_CONSTANT.prescription}
            component={() => {
              return <Prescription/>
            }}
          />
          <Route
            exact
            path={ROUTE_CONSTANT.ehrTest}
            component={() => {
              return <EHRReport/>
            }}
          />
         <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
