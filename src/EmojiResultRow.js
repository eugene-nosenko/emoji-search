import React from "react";
import PropTypes from "prop-types";
import "./EmojiResultRow.css";

const EmojiResultsRow = props => {
  const { symbol, title } = props;
  const codePointHex = symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

  return (
    <div className="component-emoji-result-row copy-to-clipboard" data-clipboard-text={symbol}>
      <img alt={title} src={src} />
      <span className="title">{title}</span>
      <span className="info">Click to copy emoji</span>
    </div>
  );
};

EmojiResultsRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string
};

export default EmojiResultsRow;
