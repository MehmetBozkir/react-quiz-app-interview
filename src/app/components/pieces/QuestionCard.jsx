const QuestionCard = ({ question, onAnswer, isClickable }) => {
  const choices = ["A", "B", "C", "D"];

  return (
    <div className="question-card p-4 md:w-3/5 mx-auto">
      <div className="mockup-window bg-gray-300 border">
        <div className="bg-white justify-center px-4 py-16">
          <h2 className="question text-xl mb-20">{question.question}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => isClickable && onAnswer(option)}
                className={`option border p-2 rounded ${
                  isClickable
                    ? "btn btn-outline "
                    : "bg-gray-300 text-gray-400 cursor-not-allowed"
                }`}
                disabled={!isClickable}
              >
                {`${choices[index]}-) ${option}`}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
