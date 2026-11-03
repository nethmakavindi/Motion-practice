
import { useState } from "react";
import { motion } from "motion/react";

function LayoutAnimation() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer rounded-2xl bg-green-500 p-8 text-white"
        style={{
          width: isExpanded ? "400px" : "200px",
          height: isExpanded ? "300px" : "150px",
        }}
      >
        <motion.h2 layout className="text-2xl font-bold">
          Layout Animation
        </motion.h2>

        <p className="mt-4">
          {isExpanded ? "Expanded Content" : "Click to Expand"}
        </p>
      </motion.div>
    </div>
  );
}

export default LayoutAnimation;
