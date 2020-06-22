import React, { useState, useEffect } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";
import "./App.css";

import { connect } from "react-redux";
import { addUserToStore, removeFromStore } from "./store/actions/auth";

import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`
});

const App = ({ addUserToStore, removeFromStore, isSignIn }) => {
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
  }, []);

  const [filteredEmoji, setfilteredEmoji] = useState(filterEmoji("", 20));

  const handleSearchChange = event => {
    setfilteredEmoji(filterEmoji(event.target.value, 20));
  };

  const onSignOut = () => {
    firebase.auth().signOut();
    removeFromStore();
  };

  return (
    <>
      <div>
        {isSignIn ? (
          <div className="authentication">
            <img src={firebase.auth().currentUser.photoURL} alt="profile pic" />
            <span className="welcome">Welcome {firebase.auth().currentUser.displayName}!</span>
            <button onClick={onSignOut}>Sign Out!</button> <br />
          </div>
        ) : (
          <div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div>
        )}
      </div>
      <Header />
      <SearchInput textChange={event => handleSearchChange(event)} />
      <EmojiResults emojiData={filteredEmoji} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
