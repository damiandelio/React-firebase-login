import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey: "AIzaSyCBW-_DxMfWCoklmi3fQ13x9MQN1WSIGvE",
  authDomain: "tennis-club-app.firebaseapp.com",
  databaseURL: "https://tennis-club-app.firebaseio.com",
  projectId: "tennis-club-app",
  storageBucket: "tennis-club-app.appspot.com",
  messagingSenderId: "986242627932"
})

class App extends Component {
  state = {isSignedIn: false}
  uiConfig = {
    signInflow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      sigInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn: !!user})
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.isSignedIn ?(
            <div>
              <h3>Welcome {firebase.auth().currentUser.displayName}, you are signed in!</h3>
              <div>
                <img
                  className="profile-photo"
                  alt="profile"
                  src={firebase.auth().currentUser.photoURL}
                />
              </div>
              <button onClick = {() => firebase.auth().signOut()}>Sign out</button>
            </div>
          ) : (
            <StyledFirebaseAuth
              uiConfig = {this.uiConfig}
              firebaseAuth = {firebase.auth()}
            />
          )}
        </header>
      </div>
    );
  }
}

export default App;
