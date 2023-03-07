import React from "react";

function FlashCardQuestion(props) {
  return <div className="front" style={{ backgroundColor: props.color }}>{props.question}</div>;
}

export default FlashCardQuestion;