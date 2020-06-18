import React from "react";
import "./Favorite.css";

const Favorite = props => {
  const { addToFavorite, removeFromFavorite, codePointHex, isFavorite } = props;

  return (
    <>
      {isFavorite ? (
        <span onClick={() => removeFromFavorite(codePointHex)}>
          <i className="favstar-true" />
        </span>
      ) : (
        <span onClick={() => addToFavorite(codePointHex)}>
          <i className="favstar-false" />
        </span>
      )}
    </>
  );
};

export default Favorite;
