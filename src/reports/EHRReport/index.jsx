import classes from "./ehrReport.module.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

function EHRReport(props) {
  if (!props.isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.ehrReportContainer}>
      <div className={classes.title}>EHR Report</div>
      <div className={classes.patientDetailContainer}>
        <div className={classes.patientDetailText}> Patient Detail:</div>
        <div className={classes.patientDetail}>
          <div>
            <div>Patient Name</div>
            <div>ABC</div>
          </div>
          <div>
            <div>Age</div>
            <div>ABC</div>
          </div>
          <div>
            <div>Gender</div>
            <div>ABC</div>
          </div>
          <div>
            <div>Patient Name</div>
            <div>ABC</div>
          </div>
          <div>
            <div>Patient Name</div>
            <div>ABC</div>
          </div>
          <div>
            <div>Patient Name</div>
            <div>ABC</div>
          </div>
        </div>
      </div>
      <div className={classes.dignosisMainContainer}>
        <div className={classes.symptomsDetailContainer}>
          <div className={classes.symptomsDetailText}> Symptoms :</div>
          <ol className={classes.symptomsDetail}>
            <li>Cough</li>
            <li>Cold</li>
            <li>Fever</li>
          </ol>
        </div>
        <div>
          <div className={classes.symptomsDetailText}>Diagnosis</div>
          <div>ldjfldjsflk;dafjasd;fjasdk;fljadsf;f</div>
        </div>
      </div>
      <div className={classes.diagnosisDescription}>
        <div>Description of Diagnosis</div>
        <div>dalfjkdakl;fjads;fljsa;fldjsaf;ldajf</div>
      </div>
      <div className={classes.doctorDetail}>
        <div>
          Doctor Name: <span> {` ABC`} </span>
        </div>
        <div>Signature: {`________________`}</div>
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
export default connect(mapStateToProps)(EHRReport);
