import React, { useState } from "react";
import classes from "./meeting_board.module.css";
import { Drawer } from "antd";
import "antd/dist/antd.css";
import { AudioControls } from "../components";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function MeetingBoard(props) {
  const [DoctorInfoDrawer, setDoctorInfoDrawer] = useState(false);
  const [patientInfoDrawer, setPatientInfoDrawer] = useState(false);

  if(!props.isLoggedIn) {
    return <Redirect to="/" />
  }
  return (
    <div className={classes.meetingBoard}>
      <div className={classes.meetingBoardLeftSection}>
        <div className={classes.meetingBoardMicContainer}>
          <AudioControls />
        </div>
      </div>
      <div className={classes.meetingBoardRightSection}>
        <div className={classes.doctorProfile}>
          <button onClick={setPatientInfoDrawer.bind({}, true)}>
            Click Here
          </button>
        </div>
        <div className={classes.patientInfo}>
          <button onClick={setDoctorInfoDrawer.bind({}, true)}>
            Click Here
          </button>
        </div>
        <Drawer
          width={400}
          placement="right"
          closable={false}
          onClose={setDoctorInfoDrawer.bind({}, false)}
          visible={DoctorInfoDrawer}
        >
          This is Doctor Info
        </Drawer>
        <Drawer
          width={400}
          placement="right"
          closable={false}
          onClose={setPatientInfoDrawer.bind({}, false)}
          visible={patientInfoDrawer}
        >
          This is Patient Info
        </Drawer>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    isLoggedIn: state.isLoggedIn,
  };
}

// sending props to component
export default connect(mapStateToProps)(MeetingBoard);
