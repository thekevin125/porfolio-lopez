import React, { useEffect, useState } from "react";
import { technologies } from "../../utils/consts";
import SectionTitle from "../sectionTitle/SectionTitle";
import TechnologyItem from "./TechnologyItem";
import { motion } from "framer-motion";
import { useVisibility } from "reactjs-visibility";

const Skills = () => {
  const { visible, ref } = useVisibility();
  const [container, setContainer] = useState({});
  const [itemAmination, setItemAmination] = useState({});
  useEffect(() => {
    if (visible) {
      setContainer({
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5,
          },
        },
      });
      setItemAmination({ hidden: { opacity: 0 }, show: { opacity: 1 } });
    } else {
      setContainer({
        show: {
          opacity: 0,
        },
      });
      setItemAmination({ show: { opacity: 0 } });
    }
  }, [visible]);

  return (
    <section id="HABILIDADES" className="pb-8">
      <SectionTitle title={"HABILIDADES"} />
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-2  w-[80%] mx-auto">
        {technologies.map((item, index) => (
          <TechnologyItem
            key={index}
            tecnology={item}
            itemAmination={itemAmination}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
