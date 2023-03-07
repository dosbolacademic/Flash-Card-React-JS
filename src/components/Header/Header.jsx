import React from "react";
import "./Header.css"

function Header() {
  return (
    <div className="header">
      <h1>The Ultimate Plant Parent!</h1>
      <h2>How good of a plant parent are you? Test all of your planty knowledge here!</h2>
      <h3>Number of cards: 13</h3>
      <h3>A Box below shows the Difficulty of questions(Green: Easy, Dark-Yellow: Medium, Red: Hard)</h3>
      <h3>This FlashCard was created for Geography and Chemisty Subjects</h3>
    </div>
  );
}

export default Header;