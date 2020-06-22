import React from "react";
import "./Favorite.css";

const Favorite = props => {
  const { addToFavorite, removeFromFavorite, codePointHex, isFavorite, uid } = props;

  return (
    <>
      {isFavorite ? (
        <span onClick={() => removeFromFavorite(codePointHex, uid)}>
          <i className="favstar-true" />
        </span>
      ) : (
        <span onClick={() => addToFavorite(codePointHex, uid)}>
          <i className="favstar-false" />
        </span>
      )}
    </>
  );
};

export default Favorite;
