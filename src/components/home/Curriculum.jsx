import React from "react";
import { useSelector } from "react-redux";
import cv from "../../records/cv.pdf";
const Curriculum = () => {
  const currentColor = useSelector((state) => state.color.currentColor);
  return (
    <a
      href={cv}
      target="_blank"
      rel="noopener noreferrer"
      download={"JuanBuri"}
      className={`${currentColor?.bg} py-2 px-4 rounded cursor-pointer`}>
      Curriculum
    </a>
  );
};

export default Curriculum;
