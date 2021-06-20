import classes from "./prescription.module.css";

function PrescriptionReport() {
  return (
    <div className={classes.ehrReportContainer}>
      <div className={classes.title}>Medical Prescription</div>
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
      <div className={classes.dignosisMainContainer}>
        <div className={classes.symptomsDetailContainer}>
          <div className={classes.symptomsDetailText}>
            {" "}
            Medicine Prescribed :
          </div>
          <ol className={classes.medicineDetail}>
            <li>
              <div>
                Medicine Name: <span>Crocin</span>
              </div>
              <div>
                Number of days: <span>4</span>
              </div>
              <div>
                Morning/Evening: <span>Morning</span>
              </div>
            </li>
            <li>
              <div>
                Medicine Name: <span>Crocin</span>
              </div>
              <div>
                Number of days: <span>4</span>
              </div>
              <div>
                Morning/Evening: <span>Morning</span>
              </div>
            </li>{" "}
            <li>
              <div>
                Medicine Name: <span>Crocin</span>
              </div>
              <div>
                Number of days: <span>4</span>
              </div>
              <div>
                Morning/Evening: <span>Morning</span>
              </div>
            </li>
          </ol>
        </div>
        <div>
          <div className={classes.symptomsDetailText}>
            Medical Test Prescribed
          </div>
          <ol className={classes.symptomsDetail}>
            <li>Cough</li>
            <li>Cold</li>
            <li>Fever</li>
          </ol>
        </div>
      </div>
      <div className={classes.nextAppointment}>
        <div>
          Next Appointment : <span> {` ABC`} </span>
        </div>
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

export default PrescriptionReport;
