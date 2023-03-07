import React from "react";

function FlashCardAnswer(props) {
  return (
    <div className="back" style={{ backgroundColor: props.color, backgroundImage: `url(${props.image})` }}>
      {props.answer}
    </div>
  );
  
}

export default FlashCardAnswer;