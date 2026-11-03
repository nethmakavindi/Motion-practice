import { motion } from "motion/react";

function ScaleAnimation() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <motion.button
        initial={{ scale: 0, rotate:0 }}
        animate={{ scale:2 }}
        transition={{ duration:1 }}
        className="rounded-xl bg-orange-500 px-10 py-5 text-2xl font-bold text-white"
      >
        Click Me!
      </motion.button>
    </div>
  );
}

export default ScaleAnimation;