import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResults.css";

import { connect } from "react-redux";
import { addToFavorite } from "../../store/actions/favorite";

const EmojiResults = ({ emojiData }) => {
  useEffect(() => {
    const clipboard = new Clipboard(".copy-to-clipboard");
    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <div className="component-emoji-results">
      {emojiData.map(emojiData => (
        <EmojiResultRow key={emojiData.title} symbol={emojiData.symbol} title={emojiData.title} />
      ))}
    </div>
  );
};

EmojiResults.propTypes = {
  emojiData: PropTypes.array
};

export default EmojiResults;
