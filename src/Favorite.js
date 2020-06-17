import React from "react";
import "./Favorite.css";

const Favorite = props => {
  const { addToFavorite, removeFromFavorite, codePointHex, isFavorite } = props;

  const handleFavorite = event => {
    if (event.target.className === "favstar-false") {
      addToFavorite(codePointHex);
    }

    if (event.target.className === "favstar-true") {
      removeFromFavorite(codePointHex);
    }
  };

  return (
    <>
      <span onClick={handleFavorite}>
        {isFavorite ? <i className="favstar-true" /> : <i className="favstar-false" />}
      </span>
    </>
  );
};

export default Favorite;
