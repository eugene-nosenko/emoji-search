import React from "react";
import Login from "./Login";
import Header from "./Header";
import { connect } from "react-redux";
import "./Favorites.css";

const Favorites = ({ user, isSignIn, favorite }) => {
  // favorite.map
  // const
  // emojiList.filter(emoji => {
  //   if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
  //     return true;
  //   }

  //   return false;
  // });

  return (
    <>
      <Header />
      <Login />

      {isSignIn && !(favorite.length === 0) ? (
        <div className="all-favorites-emoji">
          {/* <span className="welcome">{user.displayName} favorites Emoji!</span>
          {favorite} */}

          {favorite.map((emoji, index) => {
            return (
              <div className="emoji" key={index}>
                {String.fromCodePoint(parseInt(emoji, 16))}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="authentication">Please, add favorite Emoji.</div>
      )}
    </>
  );
};

function mapStateToProps(state) {
  const { user, isSignIn } = state.auth;

  const favorite = state.favorite.favorite[user.uid] || [];
  console.log(favorite);
  return { user, isSignIn, favorite };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
