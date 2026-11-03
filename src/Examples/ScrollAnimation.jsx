
import { motion } from "motion/react";

function ScrollAnimation() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="rounded-xl bg-purple-600 p-10 text-2xl font-bold text-white"
      >
        Scroll Animation!
      </motion.div>
    </div>
  );
}

export default ScrollAnimation;
