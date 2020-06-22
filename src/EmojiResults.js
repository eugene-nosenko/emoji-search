import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import EmojiResultRow from "./EmojiResultRow";

import { connect } from "react-redux";
import { addToFavorite, removeFromFavorite } from "./store/actions/favorite";

const EmojiResults = props => {
  const { emojiData, favorite, addToFavorite, removeFromFavorite, uid } = props;

  useEffect(() => {
    const clipboard = new Clipboard(".copy-to-clipboard");
    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <div className="component-emoji-results">
      {emojiData.map(emojiData => {
        const codePointHex = emojiData.symbol.codePointAt(0).toString(16);

        return (
          <EmojiResultRow
            src={`//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`}
            codePointHex={codePointHex}
            isFavorite={favorite.includes(codePointHex)}
            addToFavorite={addToFavorite}
            removeFromFavorite={removeFromFavorite}
            key={emojiData.title}
            symbol={emojiData.symbol}
            title={emojiData.title}
            uid={uid}
          />
        );
      })}
    </div>
  );
};

EmojiResults.propTypes = {
  emojiData: PropTypes.array
};

function mapStateToProps(state) {
  const { uid } = state.auth.user;
  const favorite = state.favorite.favorite[uid] || [];

  return { favorite, uid };
}

const mapDispatchToProps = {
  removeFromFavorite,
  addToFavorite
};

export default connect(mapStateToProps, mapDispatchToProps)(EmojiResults);
