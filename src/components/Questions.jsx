const Questions = ({
  handleNextQuestion,
  showAnswers,
  handleAnswer,
  data: { question, correct_answer, answers },
}) => {
  return (
    <div className="flex flex-col">
      {" "}
      <div className="bg-indigo-400 text-white p-4 rounded-lg shadow-md">
        <h2
          className="text-2xl"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {answers.map((answer, idx) => {
          const textColor = showAnswers
            ? answer === correct_answer
              ? "text-green-700"
              : "text-red-700"
            : "text-white";
          return (
            <button
              key={idx}
              className={`bg-indigo-400 p-4 font-semibold  rounded shadow ${textColor} `}
              onClick={() => handleAnswer(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </div>
      {showAnswers && (
        <button
          onClick={handleNextQuestion}
          className={`bg-yellow-700 text-white text-xl p-4 font-semibold  rounded shadow mt-6`}>
          Next Question
        </button>
      )}
    </div>
  );
};

export default Questions;
