import React, { useEffect, useState } from "react";
import { Questions } from "../../atom/Questions/questions";
import "./quizApp.css"

export default function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectOption, setSelectOption] = useState("");
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [isTimerFinished, setIsTimerFinished] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(10 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeRemaining <= 0) {
      setIsTimerFinished(true);
      submitQuiz();
    }
  }, [timeRemaining]);

  const handleOption = (e) => {
    setSelectOption(e.target.value);
  };

  const submitAnswer = () => {
    const currentQuestion = Questions[currentQuestionIndex];
    const isAnswerCorrect = selectOption === currentQuestion.correctanswer;

    if (isAnswerCorrect) {
      setScore((prevScore) => prevScore + 2);
    }

    setSelectOption("");
    if (currentQuestionIndex === Questions.length - 1) {
      setIsQuizCompleted(true);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const submitQuiz = () => {
    setIsQuizCompleted(true);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectOption("");
    setScore(0);
    setIsQuizCompleted(false);
    setIsTimerFinished(false);
    setTimeRemaining(10 * 60);
  };

  if (isQuizCompleted) {
    if (score >= 12) {
      return (
        <div>
          <h2>Congratulations! You have passed the quiz.</h2>
          <button onClick={restartQuiz} className="button">Restart Quiz</button>
        </div>
      );
    } else {
      return (
        <div>
          <h2>You have failed the quiz.</h2>
          <button onClick={restartQuiz} className="button">Restart Quiz</button>
        </div>
      );
    }
  }

  if (isTimerFinished) {
    return (
      <div>
        <h2>Time's up! Quiz submitted!</h2>
        <h3>Score : {score}</h3>
        <button onClick={restartQuiz} className="button"> Restart Quiz</button>
      </div>
    );
  }

  const currentQuestion = Questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h2>Quiz App</h2>
      <h3>Question {currentQuestionIndex + 1}</h3>
      <h4>{currentQuestion.question}</h4>
      <ul className="options">
        {currentQuestion.options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectOption == option}
                onChange={handleOption}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={submitAnswer} className="button">
        {currentQuestionIndex === Questions.length - 1 ? "Submit" : "Next"}
      </button>
      <p>
        Time Remaining: {Math.floor(timeRemaining / 60)} : {timeRemaining % 60} min
      </p>
    </div>
  );
}
