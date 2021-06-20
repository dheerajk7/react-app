import React, { useState } from "react";
import classes from "./meeting_board.module.css";
import { Drawer } from "antd";
import "antd/dist/antd.css";
import { AudioControls } from "../components";

function MeetingBoard() {
  const [DoctorInfoDrawer, setDoctorInfoDrawer] = useState(false);
  const [patientInfoDrawer, setPatientInfoDrawer] = useState(false);
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

export default MeetingBoard;
