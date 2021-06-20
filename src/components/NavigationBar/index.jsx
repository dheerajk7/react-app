import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';
import { logoutUser } from '../../actions';
function NavigationBar(props) {
  const { isLoggedIn, isDoctor } = props;
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logoutUser());
  }

  return (
    <div className={classes.header}>
      <div className={classes.logo}><Link to="/" >EHR</Link></div>
      <ul>
        {(isLoggedIn && !isDoctor) && <li>
          <Link to="/patient-dashboard">Patient Dashboard</Link>
        </li>}
        {(isLoggedIn && isDoctor) &&
          <li>
            <Link to="/doctor-dashboard">Doctor Dashboard</Link>
          </li>}
        {isLoggedIn &&
          <li className={classes.loggedInButton}>
            <div onClick={handleLogout}>Logout</div>
          </li>
        }
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state, ' state');
  return {
    loading: state.loading,
    isLoggedIn: state.isLoggedIn,
    isDoctor: state.isDoctor
  };
}

// sending props to component
export default connect(mapStateToProps)(NavigationBar);
