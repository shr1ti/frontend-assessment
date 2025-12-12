import { useRouter } from "next/router";
import { motion } from "framer-motion";
import questions from "../components/data/questions";

export default function ResultPage() {
  const router = useRouter();
  const raw = router.query.answers;

  const answers: string[] = Array.isArray(raw)
   ? JSON.parse(raw[0] || "[]")
   : JSON.parse(raw || "[]");

  // Score calculation
  const correct = answers.filter(
    (ans: string, i: number) => ans === questions[i].answer
  ).length;

  const percentage = Math.round((correct / questions.length) * 100);

  return (
    <div className="min-h-screen bg-[#eaf7fc] flex flex-col items-center justify-center px-4 py-10">

      <motion.p
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm bg-white px-6 py-2 rounded-full text-gray-600 shadow"
      >
        Keep Learning!
      </motion.p>

      {/* Fancy Score Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="heading-fancy text-4xl md:text-5xl text-[#0b3a42] mt-6 text-center"
      >
        Your Final Score is
      </motion.h1>

      {/* Percentage */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring" }}
        className="heading-fancy text-[120px] text-[#0b3a42] leading-none"
      >
        {percentage}
        <span className="text-4xl">%</span>
      </motion.div>

      <button
        onClick={() => router.push("/")}
        className="mt-10 px-8 py-3 bg-[#0b3a42] text-white rounded-xl hover:bg-[#082f36]"
      >
        Start Again
      </button>
    </div>
  );
}
