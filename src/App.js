import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';

// Views
import Login from './components/Login/Login';
import Header from './components/Header/Header';

firebase.initializeApp({
  apiKey: "AIzaSyCBW-_DxMfWCoklmi3fQ13x9MQN1WSIGvE",
  authDomain: "tennis-club-app.firebaseapp.com",
  databaseURL: "https://tennis-club-app.firebaseio.com",
  projectId: "tennis-club-app",
  storageBucket: "tennis-club-app.appspot.com",
  messagingSenderId: "986242627932"
})

export default class App extends Component {
  state = {
    isSignedIn: false,
    menuActive: false
  }

  menuHandler = () => {
    this.state.menuActive ? this.setState({ menuActive: false }) : this.setState({ menuActive: true });
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (   // Si el usuario no esta logueado muestra la view de Login
          <Header firebaseAuth={firebase.auth()} menuActive={this.state.menuActive} menuHandler={this.menuHandler} />    // Home view
        ) : (
            <Login    // Login view
              firebaseAuth={firebase.auth()}
              GoogleAuthProvider={firebase.auth.GoogleAuthProvider.PROVIDER_ID}
              FacebookAuthProvider={firebase.auth.FacebookAuthProvider.PROVIDER_ID}
              EmailAuthProvider={firebase.auth.EmailAuthProvider.PROVIDER_ID}
            />
          )}
      </div>
    );
  }
}

