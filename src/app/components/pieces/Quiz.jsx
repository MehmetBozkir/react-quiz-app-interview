"use client";
import { useState, useEffect } from "react";
import { fetchQuestions } from "../utils/api";
import QuestionCard from "./QuestionCard";
import Score from "./Score";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isClickable, setIsClickable] = useState(false);
  const [remainingTime, setRemainingTime] = useState(30);

  useEffect(() => {
    const loadQuestions = async () => {
      const q = await fetchQuestions();
      setQuestions(q);
    };
    loadQuestions();
  }, []);

  useEffect(() => {
    if (remainingTime <= 20 && !isClickable) {
      setIsClickable(true);
    }
  }, [remainingTime, isClickable]);

  const handleAnswer = (answer) => {
    if (!isClickable) return;

    setUserAnswers([...userAnswers, answer]);
    if (questions[currentQuestion].correctAnswer === answer) {
      setScore(score + 1);
    }
    moveToNextQuestion();
  };

  const moveToNextQuestion = () => {
    setIsClickable(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setRemainingTime(30);
    } else {
      setShowScore(true);
    }
  };

  const handleTimeExpire = () => {
    setUserAnswers([...userAnswers, ""]);
    moveToNextQuestion();
  };

  if (showScore) {
    return (
      <Score
        score={score}
        total={questions.length}
        questions={questions}
        userAnswers={userAnswers}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <div className="timer-container flex justify-center md:justify-end mb-4 p-4">
        <CountdownCircleTimer
          isPlaying
          duration={30}
          key={currentQuestion}
          colors={["#15803d", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[20, 10, 5, 0]}
          trailColor="#ddd"
          strokeWidth={8}
          size={100}
          strokeLinecap="round"
          onComplete={() => handleTimeExpire()}
          onUpdate={(time) => setRemainingTime(time)}
        >
          {({ remainingTime, color }) => (
            <div className="flex flex-col items-center text-center">
              <div style={{ color }}>{remainingTime}</div>
              <div className="text-sm" style={{ color }}>
                seconds
              </div>
            </div>
          )}
        </CountdownCircleTimer>
      </div>
      {questions.length > 0 && (
        <QuestionCard
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          isClickable={isClickable}
          currentQuestion={currentQuestion}
          questionslength={questions.length}
        />
      )}
    </div>
  );
};

export default Quiz;
