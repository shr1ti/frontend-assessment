// src/pages/index.tsx

import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#eaf7fc] flex flex-col items-center justify-center px-6 py-10">

      {/* Fancy Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="heading-fancy text-5xl md:text-6xl text-[#0b3a42] font-semibold"
      >
        Test Your Knowledge
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white px-6 py-2 rounded-full shadow mt-4 text-gray-600"
      >
        Answer all questions to see your results
      </motion.p>

      <motion.button
        onClick={() => router.push("/quiz")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 px-8 py-3 bg-[#0b3a42] text-white rounded-xl text-lg hover:bg-[#082f36]"
      >
        Start Quiz
      </motion.button>
    </div>
  );
}
