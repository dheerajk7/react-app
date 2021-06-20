import classes from './landingPage.module.css';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Switch } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect, useDispatch } from 'react-redux';
import { LOADING_CONSTANT } from '../constants';
import { loginUser } from '../actions';
import { Redirect } from 'react-router-dom';
function LandingPage(props) {
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    var fd = new FormData();
    fd.append('person', values.isDoctor ? 'Doctor' : 'Patient');
    fd.append('id', values.username);
    fd.append('password', values.password);
    dispatch(loginUser(fd));
    console.log('Received values of form: ', values);
  };

  if(props.isLoggedIn) {
    if(props.isDoctor) {
      return <Redirect to="/doctor-dashboard" />
    }
    return <Redirect to="/patient-dashboard" />
  }

  return <div className={classes.loginContainer}><Form
    name="normal_login"
    className={classes.loginForm}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
  >
    <div className={classes.loginTitle}>Login</div>
    <Form.Item
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your Username!',
        },
      ]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your Password!',
        },
      ]}
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>
    <Form.Item label="Are you Doctor?" name="isDoctor">
      <Switch />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit" className={classes.loginFormButton} loading={props.loading === LOADING_CONSTANT.loginButton}>
        Log in
      </Button>
    </Form.Item>
  </Form></div>;
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    isLoggedIn: state.isLoggedIn,
    isDoctor: state.isDoctor,
  };
}

// sending props to component
export default connect(mapStateToProps)(LandingPage);