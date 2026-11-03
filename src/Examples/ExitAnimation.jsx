
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function ExitAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-slate-900">

      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="box"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className="flex h-48 w-48 items-center justify-center rounded-2xl bg-red-500 text-2xl font-bold text-white"
          >
            Exit Animation
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsVisible(!isVisible)}
        className="rounded-lg bg-white px-8 py-4 font-bold text-slate-900"
      >
        {isVisible ? "Hide Box" : "Show Box"}
      </button>

    </div>
  );
}

export default ExitAnimation;
