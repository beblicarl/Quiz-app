import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./App.css";
import Questions from "./components/Questions";

const API_URL =
  "https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  const handleAnswer = (answer) => {};

  return questions.length > 0 ? (
    <div className="App">
      <Questions data={questions[currentIndex]} handleAnswer={handleAnswer} />
    </div>
  ) : (
    <h2 className="text-2xl text-gray-900 font-bold">Loading...</h2>
  );
}

export default App;
