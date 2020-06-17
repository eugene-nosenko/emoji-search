import React, { useState } from "react";
import "./Favorite.css";

const Favorite = () => {
  const [fariteFlag, setFavoriteFlag] = useState(false);
  const handleFavorite = event => {
    setFavoriteFlag(!fariteFlag);
  };

  return (
    <>
      <span onClick={handleFavorite}>
        {fariteFlag ? <i className="favstar-true" /> : <i className="favstar-false" />}
      </span>
    </>
  );
};

export default Favorite;
