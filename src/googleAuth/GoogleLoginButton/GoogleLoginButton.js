import React, { PropTypes } from 'react'
import GoogleLogin from 'react-google-login';
import config from '../../config'
const responseGoogle = (response) => {
  console.log(response);
}
const GoogleLoginButton = (props) =>
  <GoogleLogin
    clientId={config.googleAppId}
    fetch_basic_profile={false}
    scope={config.googleScope}
    onClick={props.requestLogin}
    onSuccess={props.receiveLogin}
    onFailure={responseGoogle}
    buttonText='Login with Google'
    type='button'
  />

GoogleLoginButton.propTypes = {
  requestLogin: PropTypes.func.isRequired,
  receiveLogin: PropTypes.func.isRequired,
}

export default GoogleLoginButton

