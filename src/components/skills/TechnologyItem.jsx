import React from "react";
import { motion } from "framer-motion";
const TechnologyItem = ({ tecnology, itemAmination }) => {
  return (
    <motion.div
      variants={itemAmination}
      className="flex flex-col items-center flex-auto w-40 ">
      <img
        src={tecnology.icon}
        alt=""
        className="w-20 h-20 object-scale-down"
      />
      <div className="dark:text-cyan-100">{tecnology.name}</div>
    </motion.div>
  );
};

export default TechnologyItem;
