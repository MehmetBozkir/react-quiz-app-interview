import axios from "axios";

export const fetchQuestions = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const questions = data
      .sort(() => 0.5 - Math.random())
      .slice(0, 10)
      .map((item) => {
        const incorrectAnswers = data
          .filter((i) => i.id !== item.id)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map((i) => i.title);

        return {
          question: `${item.body}?`,
          correctAnswer: item.title,
          options: [item.title, ...incorrectAnswers].sort(
            () => 0.5 - Math.random()
          ),
        };
      });

    return questions;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
