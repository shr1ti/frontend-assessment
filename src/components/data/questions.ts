export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string; // correct answer
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What sound does a cat make?",
    options: ["Meow", "Woof", "Chirp", "Growl"],
    answer: "Meow",
  },
  {
    id: 2,
    question: "How many planets are in our solar system?",
    options: ["5", "7", "8", "9"],
    answer: "8",
  },
  {
    id: 3,
    question: "How many stars are in the sky?",
    options: ["Two", "Infinite", "One Hundred", "Zero"],
    answer: "Infinite",
  },
];
export default questions;