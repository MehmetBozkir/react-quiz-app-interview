import { toast } from "react-hot-toast";

const QuestionCard = ({
  question,
  onAnswer,
  isClickable,
  currentQuestion,
  questionslength,
}) => {
  const choices = ["A", "B", "C", "D"];

  const handleAnswerClick = (option) => {
    if (!isClickable) {
      toast.error("Answer after ten seconds");
    } else {
      onAnswer(option);
      toast.success("Answer is saved");
    }
  };

  return (
    <div className="question-card p-4 md:w-3/5 mx-auto">
      <div className="mockup-window bg-gray-300 border">
        <h1 className="bg-white text-end px-4 text-lg py-2 font-bold">
          {currentQuestion + 1} / {questionslength}
        </h1>
        <div className="bg-white justify-center px-4 py-16">
          <h2 className="question text-xl mb-20">{question.question}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`option border p-2 rounded ${
                  isClickable
                    ? "btn btn-outline "
                    : "btn text-gray-400 cursor-not-allowed"
                }`}
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
