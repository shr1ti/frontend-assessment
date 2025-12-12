// src/components/QuestionCard.tsx

import OptionButton from "./OptionButton";
import type { Question } from "./data/questions";

interface QuestionCardProps {
  question: Question;               // full question object
  selected?: string;                // user’s selected answer
  onSelect: (option: string) => void;
}

export default function QuestionCard({
  question,
  selected,
  onSelect,
}: QuestionCardProps) {
  return (
    <div
      className="
        w-full max-w-2xl 
        bg-white/40 
        backdrop-blur-xl 
        rounded-2xl 
        shadow-xl 
        p-8 
        border border-white/30
      "
    >
      {/* Question text */}
      <h2 className="text-2xl font-semibold text-[#0b3a42] mb-6 leading-snug">
        {question.question}
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option: string, idx: number) => (
          <OptionButton
            key={idx}
            option={option}
            selected={selected}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
