import React, { useState } from "react";
import classes from "./doctor_dashboard.module.css";
import "antd/dist/antd.css";
import { List, Avatar } from "antd";
import "antd/dist/antd.css";
import { Collapse } from "antd";
import DummyIcon from "../images/dummy-icon-image.png";
import CallCreationModal from "./components/CallCreationModal";
import { Popover, Button } from "antd";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const text = "List Item";
const { Panel } = Collapse;
const patientList = [
  {
    id: 1,
    name: "Ramesh",
    dob: "12-01-1998",
    bloodGroup: "AB+",
    profileImage: DummyIcon,
  },
  {
    id: 2,
    name: "Suresh",
    dob: "12-01-1998",
    bloodGroup: "AB+",
    profileImage: DummyIcon,
  },
  {
    id: 3,
    name: "Mahesh",
    dob: "12-01-1998",
    bloodGroup: "AB+",
    profileImage: DummyIcon,
  },
  {
    id: 4,
    name: "Jignesh",
    dob: "12-01-1998",
    bloodGroup: "AB+",
    profileImage: DummyIcon,
  },
  {
    id: 5,
    name: "Himesh",
    dob: "12-01-1998",
    bloodGroup: "AB+",
    profileImage: DummyIcon,
  },
  {
    id: 6,
    name: "Ramesh",
    dob: "12-01-1998",
    bloodGroup: "AB+",
    profileImage: DummyIcon,
  },
];

function DoctorDashboard(props) {
  const [currentPatient, setCurrentPatient] = useState(null);

  function handleShowModal(patient) {
    setCurrentPatient(patient);
  }

  function handleOk() {
    console.log("Make API Call");
    setCurrentPatient(null);
  }

  function handleCancle() {
    setCurrentPatient(null);
  }

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  const data= [
    {
      drName: 'Abc',
      prescriptionDate: '12/12/2020',
      prescriptionID: '1211'
    },
    {
      drName: 'Abc',
      prescriptionDate: '12/12/2020',
      prescriptionID: '121'
    },
    {
      drName: 'Abc',
      prescriptionDate: '12/12/2020',
      prescriptionID: '21'
    },
    {
      drName: 'Abc',
      prescriptionDate: '12/12/2020',
      prescriptionID: '12'
    },
  ]

  if(!props.isLoggedIn) {
    return <Redirect to="/" />
  }

  return (
    <div className={classes.doctorDashboardContainer}>
      <div className={classes.doctorDashboardLeftContainer}>
        <div className={classes.doctordetail}>
          <div>Dr. Abc Def</div>
          <div>Physician</div>
        </div>
        <div className={classes.doctorReportDetails}>
          <div>
            <div className={classes.doctorReportTitle}>14</div>{" "}
            <div>Appontments</div>
          </div>
          <div>
            <div className={classes.doctorReportTitle}>18</div>{" "}
            <div>Consultation</div>
          </div>
          <div>
            <div className={classes.doctorReportTitle}>3</div>{" "}
            <div>Cancelled</div>
          </div>
          <div>
            <div className={classes.doctorReportTitle}>5</div> <div>Urgent</div>
          </div>
        </div>
        <div className={classes.reportReviewContainer}>
          <div className={classes.EHRAlreadyReviewed}>
            <div className={classes.EHRDetailSection}>EHR To Review</div>
            <Collapse accordion>
            {data.map((item) =><Panel header={`EHR Test - ${item.prescriptionDate}`} key={item.prescriptionID} className={classes.prescriptionDetailColumn}>
                <div className={classes.prescriptionDetailData}><div style={{fontWeight: 'bold', color: '#202c56', border: 'none', margin: 0, padding: 0}}>Dr. Name</div> <div>Dr. {item.drName}</div></div>
                <div className={classes.prescriptionDetailData}><div style={{fontWeight: 'bold', color: '#202c56', border: 'none', margin: 0, padding: 0}}>Prescription Date</div><div>{item.prescriptionDate}</div></div>
                <Link to={`/ehr-test/${item.prescriptionID}`}className={classes.seeReportButton}>See Report</Link>
              </Panel> )}
            </Collapse>
          </div>
          <div className={classes.EHRProgress}>
            <div className={classes.EHRDetailSection}>EHR in Progress</div>
            <Collapse accordion>
            {data.map((item) =><Panel header={`EHR Test - ${item.prescriptionDate}`} key={item.prescriptionID} className={classes.prescriptionDetailColumn}>
                <div className={classes.prescriptionDetailData}><div style={{fontWeight: 'bold', color: '#202c56', border: 'none', margin: 0, padding: 0}}>Dr. Name</div> <div>Dr. {item.drName}</div></div>
                <div className={classes.prescriptionDetailData}><div style={{fontWeight: 'bold', color: '#202c56', border: 'none', margin: 0, padding: 0}}>Prescription Date</div><div>{item.prescriptionDate}</div></div>
                <Link to={`/ehr-test/${item.prescriptionID}`}className={classes.seeReportButton}>See Report</Link>
              </Panel> )}
            </Collapse>
          </div>
          <div className={classes.EHRReadyToReview}>
            <div className={classes.EHRDetailSection}>Ready To Review</div>
            <Collapse accordion>
            {data.map((item) =><Panel header={`EHR Test - ${item.prescriptionDate}`} key={item.prescriptionID} className={classes.prescriptionDetailColumn}>
                <div className={classes.prescriptionDetailData}><div style={{fontWeight: 'bold', color: '#202c56', border: 'none', margin: 0, padding: 0}}>Dr. Name</div> <div>Dr. {item.drName}</div></div>
                <div className={classes.prescriptionDetailData}><div style={{fontWeight: 'bold', color: '#202c56', border: 'none', margin: 0, padding: 0}}>Prescription Date</div><div>{item.prescriptionDate}</div></div>
                <Link to={`/ehr-test/${item.prescriptionID}`}className={classes.seeReportButton}>See Report</Link>
              </Panel> )}
            </Collapse>
          </div>
        </div>
      </div>
      <div className={classes.doctorDashboardRightContainer}>
        <div
          className={classes.doctorReportTitle}
          style={{ margin: "7px 0px", color: "#202c56" }}
        >
          Patient List
        </div>
        <Collapse accordion>
          {patientList.map((patient) => {
            return (
              <Panel header={patient.name} key={patient.id}>
                <div className={classes.patientDetailContainer}>
                  <div>
                    <img src={patient.profileImage} alt={patient.name} />
                  </div>
                  <div>
                    <div className={classes.patientName}>{patient.name}</div>
                    <div className={classes.patientDetail}>{patient.dob}</div>
                    <div className={classes.patientDetail}>
                      {patient.bloodGroup}
                    </div>
                  </div>
                </div>
                <Link to="/meeting-board/121">
                  <button
                    className={classes.patientCallButton}
                    onClick={handleShowModal.bind({}, patient)}
                  >
                    <i class="fa fa-phone" aria-hidden="true"></i>
                  </button>
                </Link>
              </Panel>
            );
          })}
        </Collapse>
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
export default connect(mapStateToProps)(DoctorDashboard);
