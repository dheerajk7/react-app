import classes from "./header.module.css";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>EHR</div>
      <ul>
        <li>
          <Link to="/patient-dashboard">Patient Dashboard</Link>
        </li>
        <li>
          <Link to="/doctor-dashboard">Doctor Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;
