import React, { useState, useEffect } from "react";
import classes from "./patientDashboard.module.css";
import { Collapse } from "antd";
import DummyIcon from '../images/dummy-icon-image.png';
import 'antd/dist/antd.css';
import { InfoCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {
  Form,
  DatePicker,
  Select,
  Button,
} from 'antd';
const text = "List Item";
const { Panel } = Collapse;
const patientList = [
  {
    id: 1,
    name: 'Ramesh',
    dob: '12-01-1998',
    bloodGroup: 'AB+',
    profileImage: DummyIcon,
  },
  {
    id: 2,
    name: 'Suresh',
    dob: '12-01-1998',
    bloodGroup: 'AB+',
    profileImage: DummyIcon,
  },
  {
    id: 3,
    name: 'Mahesh',
    dob: '12-01-1998',
    bloodGroup: 'AB+',
    profileImage: DummyIcon,
  },
  {
    id: 4,
    name: 'Jignesh',
    dob: '12-01-1998',
    bloodGroup: 'AB+',
    profileImage: DummyIcon,
  },
  {
    id: 5,
    name: 'Himesh',
    dob: '12-01-1998',
    bloodGroup: 'AB+',
    profileImage: DummyIcon,
  },
  {
    id: 6,
    name: 'Ramesh',
    dob: '12-01-1998',
    bloodGroup: 'AB+',
    profileImage: DummyIcon,
  },
];

const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};
const formTailLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
    offset: 4,
  },
};

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

function DoctorDashboard() {
  const [currentPatient, setCurrentPatient] = useState(null);
  const [form] = Form.useForm();
  const [patientDemoFormInput, setPatientDemoFormInput] = useState({
    doctorName: '',
    date:'',
  });

  return (
    <div className={classes.patientDashboardContainer}>
      <div className={classes.patientDashboardLeftContainer}>
        <div className={classes.patientDetail}>
          <img src={DummyIcon} />
          <div className={classes.patientDetailName}>Abc Def</div>
          <div className={classes.patientDetailsData}><div>Blood Group</div> <div>AB+</div></div>
          <div className={classes.patientDetailsData}><div>DOB</div> <div>12/01/1998</div></div>
          <div className={classes.patientDetailsData}><div>Address</div> <div>Indore</div></div>
          <div className={classes.patientDetailsData}><div>Mobile Number</div> <div>7067777253</div></div>
          <div className={classes.patientDetailsData}><div>Email</div> <div>abc@gmail.com</div></div>
        </div>
        <div className={classes.reportReviewContainer}>
          <div className={classes.EHRAlreadyReviewed}>
            <div className={classes.EHRDetailSection}>Prescription</div>
            <Collapse accordion>
              {data.map((item) =><Panel header={`Prescription Test - ${item.prescriptionDate}`} key={item.prescriptionID} className={classes.prescriptionDetailColumn}>
                <div className={classes.prescriptionDetailData}><div style={{fontWeight: 'bold', color: '#202c56', border: 'none', margin: 0, padding: 0}}>Dr. Name</div> <div>Dr. {item.drName}</div></div>
                <div className={classes.prescriptionDetailData}><div style={{fontWeight: 'bold', color: '#202c56', border: 'none', margin: 0, padding: 0}}>Prescription Date</div><div>{item.prescriptionDate}</div></div>
                <Link to={`/prescription/${item.prescriptionID}`}className={classes.seeReportButton}>See Report</Link>
              </Panel> )}
              
            </Collapse>
          </div>
          <div className={classes.prescriptionsContainer}>
            <div className={classes.EHRDetailSection}>Notification</div>
            <ul className={classes.notificationList}>
              <li>Test tommorow</li>
              <li>Doctor Visit Tommorow</li>
            </ul>
          </div>
          <div className={classes.labTestPrescription}>
            <div className={classes.EHRDetailSection}>EHR Report</div>
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
      <div className={classes.patientDashboardRightContainer}>
        <div
          className={classes.bookAppointmentTitle}
          style={{ margin: "7px 0px", color: "#202c56" }}
        >
          Book Appointment
        </div>
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            requiredMarkValue: true,
          }}
          requiredMark={true}
        >
          <Form.Item label="Select">
            <Select onChange={(event) => {setPatientDemoFormInput({...patientDemoFormInput, doctorName:event})}}>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="DatePicker">
            <DatePicker onChange={(event) => {setPatientDemoFormInput({...patientDemoFormInput, date:moment(event).format('MM/DD/YYYY')})}}/>
          </Form.Item>
          <Button className={classes.bookDemoButton}>Book</Button>
        </Form>
      </div>
    </div>
  );
}

export default DoctorDashboard;
