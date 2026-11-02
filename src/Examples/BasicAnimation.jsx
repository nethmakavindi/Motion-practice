
import { motion } from "motion/react";

function BasicAnimation() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="rounded-xl bg-orange-500 p-10 text-2xl font-bold text-white"
      >
        Hello Motion!
      </motion.div>
    </div>
  );
}

export default BasicAnimation;
