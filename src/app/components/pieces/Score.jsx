const Score = ({ score, total, questions, userAnswers }) => (
  <div className="score text-center min-h-screen">
    <h2 className="text-2xl font-bold py-4">Quiz Completed!</h2>
    <p className="text-lg mb-4">
      Your Score: {score} / {total}
    </p>

    <div className="overflow-x-auto w-11/12 md:w-4/5 mx-auto rounded-3xl">
      <table className="table">
        <thead>
          <tr className="bg-gray-700 text-white text-xl">
            <th></th>
            <th className="hidden md:table-cell">Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => {
            const isCorrect = userAnswers[index] === question.correctAnswer;
            const isEmpty = userAnswers[index] === "";

            return (
              <tr
                key={index}
                className={
                  isCorrect
                    ? "bg-green-100"
                    : isEmpty
                    ? "bg-yellow-100"
                    : "bg-red-100"
                }
              >
                <th>{index + 1}</th>
                <td className="hidden md:table-cell">{question.question}</td>
                <td>{isEmpty ? "No Answer" : userAnswers[index]}</td>
                <td>{question.correctAnswer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    <button
      className="btn mt-4 md:mt-12 px-16 py-2 mb-2"
      onClick={() => window.location.reload()}
    >
      Try Again
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  </div>
);

export default Score;
