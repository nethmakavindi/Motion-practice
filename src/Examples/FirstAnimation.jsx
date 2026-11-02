import { motion } from "motion/react";

function FirstAnimation() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.ul
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity }}
        className="h-32 w-32 rounded-xl bg-orange-500"
      >
        <li className="p-4 text-white">Motion</li>
      </motion.ul>
    </div>
  );
}

export default FirstAnimation;