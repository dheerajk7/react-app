import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

function NavigationBar() {
  return (
    <div className={classes.header}>
      <div className={classes.logo}><Link to="/" >EHR</Link></div>
      <ul>
        <li>
          <Link to="/patient-dashboard">Patient Dashboard</Link>
        </li>
        <li>
          <Link to="/doctor-dashboard">Doctor Dashboard</Link>
        </li>
        <li>
          <div>Logout</div>
        </li>
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state, ' state');
  return {
    loading: state.loading,
    isLoggedIn: state.isLoggedIn,
    isPatient: state.isDoctor
  };
}

// sending props to component
export default connect(mapStateToProps)(NavigationBar);
