import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import keys from '../config'

 
 
const responseGoogle = (response) => {
  console.log(response);
}
 
ReactDOM.render(
  <GoogleLogin
    clientId={keys.googleClientID}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
  document.getElementById('googleButton')
);