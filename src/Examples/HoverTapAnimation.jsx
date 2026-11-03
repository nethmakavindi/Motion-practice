
import { motion } from "motion/react";

function HoverTapAnimation() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="rounded-xl bg-orange-500 px-10 py-5 text-2xl font-bold text-white"
      >
        Click Me!
      </motion.button>
    </div>
  );
}

export default HoverTapAnimation;
