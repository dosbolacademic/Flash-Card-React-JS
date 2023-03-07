import React, { useState } from "react";
import "./FlashCard.css";
import FlashCardData from "./FlashCardData";
import FlashCardQuestion from "./FlashCardQuestion";
import FlashCardAnswer from "./FlashCardAnswer";

function FlashCard() {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [isFlipped, setFlipped] = useState(false);
  console.log(isFlipped);

  const flipCard = () => {
    setFlipped(!isFlipped);
    console.log("flipCard")
  };


  const handleNextQuestion = () => {
    setFlipped(false);
    setCurrentQuestion(Math.floor(Math.random() * FlashCardData.length));
  };

  let question = "Start";
  let answer = "Press the next arrow to start the flashcards :)";
  let color = "";
  let image = "";

  if (currentQuestion >= 0) {
    question = FlashCardData[currentQuestion].question;
    answer = FlashCardData[currentQuestion].answer;
    const category = FlashCardData[currentQuestion].category;
    if (category === "Geography" || category === "Chemistry") {
      const difficulty = FlashCardData[currentQuestion].difficulty;
      if (difficulty === "Easy") {
        color = "green";
      } else if (difficulty === "Medium") {
        color = "#8B8000";
      } else {
        color = "red";
      }
    } else {
      color = "blue";
    }
    image = FlashCardData[currentQuestion].image;
    
  }
  

  return (
    <div className={`flashcard-container`} onClick={flipCard}>

  
      <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
      <FlashCardAnswer  answer={answer} image={image} color={color} />
<FlashCardQuestion question={question} image={image}color={color} />

      </div>
      <button
        onClick={(e) => {
          handleNextQuestion();
          e.stopPropagation();
        }}
      >
        {currentQuestion < 0 ? "Start" : "Next Question"}
      </button>
    </div>
  );
  } 

export default FlashCard;
