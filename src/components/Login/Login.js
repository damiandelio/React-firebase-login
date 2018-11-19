import React, { } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const Login = ({firebaseAuth, GoogleAuthProvider, FacebookAuthProvider, EmailAuthProvider}) => {
  const uiConfig = {
    signInflow: "popup",
    signInOptions: [
      GoogleAuthProvider,
      FacebookAuthProvider,
      EmailAuthProvider
    ],
    callbacks: {
      sigInSuccess: () => false
    }
  }

  return (
    <div className="Login">
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebaseAuth}
      />
    </div>
  )
}

export default Login;