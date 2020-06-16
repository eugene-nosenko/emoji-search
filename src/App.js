import React, { useState } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";

const App = () => {
  const [filteredEmoji, setfilteredEmoji] = useState(filterEmoji("", 20));

  const handleSearchChange = event => {
    setfilteredEmoji(filterEmoji(event.target.value, 20));
  };

  return (
    <>
      <Header />
      <SearchInput textChange={event => handleSearchChange(event)} />
      <EmojiResults emojiData={filteredEmoji} />
    </>
  );
};

export default App;
