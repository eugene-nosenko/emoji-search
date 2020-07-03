import React, { useEffect } from "react";
import "./Login.css";

import { connect } from "react-redux";
import { addUserToStore, removeFromStore } from "./store/actions/auth";
import { Link } from "react-router-dom";

import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`
});

const Login = ({ addUserToStore, removeFromStore, isSignIn, user }) => {
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: { signInSuccessWithAuthResult: () => false }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      addUserToStore({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL
      });
    });
  }, [addUserToStore]);

  const onSignOut = () => {
    firebase.auth().signOut();
    removeFromStore();
  };

  return (
    <>
      <div>
        {isSignIn ? (
          <div className="authentication">
            <Link to="/favorites">
              <img className="" src={user.photoURL} alt="profile pic" />
            </Link>
            <Link to="/favorites">Favorites</Link>
            <button onClick={onSignOut}>Sign Out!</button>
          </div>
        ) : (
          <div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div>
        )}
      </div>
    </>
  );
};

function mapStateToProps(state) {
  const { user, isSignIn } = state.auth;

  return { user, isSignIn };
}

function mapDispatchToProps(dispatch) {
  return {
    addUserToStore: userFromFirebase => dispatch(addUserToStore(userFromFirebase)),
    removeFromStore: () => dispatch(removeFromStore())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
