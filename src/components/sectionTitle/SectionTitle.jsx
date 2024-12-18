import React from "react";
import { useSelector } from "react-redux";

const SectionTitle = ({ title }) => {
  const currentColor = useSelector((state) => state.color.currentColor);

  return (
    <h1
      className={`mb-10 pl-5 pt-2  border-t-2 dark:border-cyan-300 font-sansSerif font-extrabold tracking-widest ${currentColor?.text} `}>
      {title}
    </h1>
  );
};

export default SectionTitle;
