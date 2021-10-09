const Questions = ({
  handleAnswer,
  data: { question, correct_answer, incorrect_answers },
}) => {
  const shuffledAnswer = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );
  console.log(shuffledAnswer);

  return (
    <div>
      {" "}
      <div className="bg-gray-600 text-white p-4 rounded-lg shadow-md">
        <h2
          className="text-2xl"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {shuffledAnswer.map((answer) => (
          <button
            className={`${
              correct_answer === answer ? "bg-green-500" : " bg-gray-600"
            }  p-4 font-semibold text-white rounded shadow `}
            onClick={() => handleAnswer(answer)}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questions;
