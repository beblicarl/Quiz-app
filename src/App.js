import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./App.css";
import Questions from "./components/Questions";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));

        setQuestions(questions);
      });
  }, []);

  const handleAnswer = (answer) => {
    // const newIndex = currentIndex + 1;
    // setCurrentIndex(newIndex);

    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
        console.log(score);
      }
    }
    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setShowAnswers(false);
    setCurrentIndex(currentIndex + 1);
  };

  return questions.length > 0 ? (
    <div className="App">
      {currentIndex >= questions.length ? (
        <h1 className="text-3xl text-red-600 font-bold">
          {" "}
          Game Ended !! Your score is : {score}
        </h1>
      ) : (
        <Questions
          handleNextQuestion={handleNextQuestion}
          showAnswers={showAnswers}
          data={questions[currentIndex]}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  ) : (
    <h2 className="text-2xl text-gray-900 font-bold">Loading...</h2>
  );
}

export default App;
