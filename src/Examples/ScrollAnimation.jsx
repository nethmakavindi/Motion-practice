
import { motion } from "motion/react";

function ScrollAnimation() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <motion.div
  initial={{ opacity: 0, y: 100, scale: 0.5 }}
  whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 180 }}
  viewport={{ once: false }}
  transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
  className="rounded-xl bg-purple-600 p-10 text-2xl font-bold text-white"
      >
        Scroll Animation!
      </motion.div>
    </div>
  );
}

export default ScrollAnimation;
