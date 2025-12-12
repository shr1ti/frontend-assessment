// src/pages/quiz.tsx



import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

// components
import Header from "../components/header";
import QuestionCard from "../components/QuestionCard";
import ProgressSegments from "../components/ProgressSegments";
import Mascot from "../components/Mascot";

// data
import questions from "../components/data/questions";
import type { Question } from "../components/data/questions";

// sound helper
import { playSound } from "../hooks/useSound";

export default function QuizPage() {
  const router = useRouter();

  const total = questions.length;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  // current question (typed properly)
  const currentQuestion: Question = questions[step];

  // Handle selecting an option
  function handleSelect(option: string) {
    playSound("click");

    const updated = [...answers];
    updated[step] = option;
    setAnswers(updated);
  }

  // Move to next question or complete
  function next() {
    playSound("next");

    // If NOT last question → go to next
    if (step + 1 < total) {
      setStep(step + 1);
      return;
    }

    // 🎉 QUIZ COMPLETED → Fire confetti
    import("../hooks/useConfetti").then(({ fireConfetti }) =>
      fireConfetti()
    );

    // Go to result screen
    router.push({
      pathname: "/result",
      query: { answers: JSON.stringify(answers) },
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d7eef6] to-[#e8f6f8] flex flex-col items-center justify-center px-4 py-10">

      {/* Header */}
      <Header />

      {/* Top Controls */}
      <div className="flex justify-between items-center w-full max-w-3xl mt-8">
        <button
          onClick={() => {
            if (step === 0) router.push("/");
            else setStep(step - 1);
          }}
          className="text-[#0b3a42] text-lg font-medium hover:underline"
        >
          ← Back
        </button>

        <p className="text-gray-700 font-medium">
          Question {step + 1} / {total}
        </p>
      </div>

      {/* Progress Indicator */}
      <ProgressSegments total={total} current={step} />

      {/* Animated Question Card */}
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-3xl mt-8"
      >
        <QuestionCard
          question={currentQuestion}
          selected={answers[step]}
          onSelect={handleSelect}
        />
      </motion.div>

      {/* Next Button */}
      <button
        onClick={next}
        disabled={!answers[step]}
        className="
          mt-10 px-10 py-4 rounded-xl text-lg font-semibold
          transition-all duration-300 shadow-lg
          disabled:opacity-40 disabled:cursor-not-allowed
          bg-[#0b3a42] text-white hover:bg-[#082f36]
        "
      >
        {step + 1 === total ? "See Results" : "Next"}
      </button>
      <Mascot />

    </div>
  );
}
