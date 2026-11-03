import { motion } from "motion/react";

function BasicAnimation() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      padding: "50px"
    }}>
      <motion.div
        animate={{ rotate: 180 }}
        transition={{ duration: 0.2, repeat: 3 ,delay: 3, ease:"easeInOut" }}
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