import React, { useState, useEffect } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";
import "./App.css";

import firebase from "firebase";
import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`
});

const App = () => {
  const [isSignIn, setSignIn] = useState(false);

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
      setSignIn(!!user);
    });
  }, []);

  const [filteredEmoji, setfilteredEmoji] = useState(filterEmoji("", 20));

  const handleSearchChange = event => {
    setfilteredEmoji(filterEmoji(event.target.value, 20));
  };

  return (
    <>
      <div>
        {isSignIn ? (
          <div className="authentication">
            <img src={firebase.auth().currentUser.photoURL} alt="profile pic" />
            <span className="welcome">Welcome {firebase.auth().currentUser.displayName}!</span>
            <button onClick={() => firebase.auth().signOut()}>Sign Out!</button> <br />
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

export default App;
