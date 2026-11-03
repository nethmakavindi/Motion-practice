import { motion } from "motion/react";

function BasicAnimation() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      padding: "50px"
    }}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          width: "120px",
          height: "120px",
          backgroundColor: "orange",
          borderRadius: "15px"
        }}
      />
    </div>
  );
}

export default BasicAnimation;