import React from 'react';
import { GoogleLogin } from 'react-google-login';
import styles from './Login.css';

const Login = ({ onSuccess, onFailure }) => (
  <div className={styles.wrapper}>
    <GoogleLogin
      clientId="6467527901-g5jfi4bus9cmkq1ab0lhgghlpcvgqai4.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
</div>
);

export default Login;