import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-scroll";
import { Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
const FloatingButton = () => {
  const currentColor = useSelector((state) => state.color.currentColor);

  const [activeScroll, setActiveScroll] = useState(false);
  const onScroll = () => {
    if (window.scrollY > 200) {
      setActiveScroll(true);
    } else {
      setActiveScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <Link
      to="INICIO"
      className={` rounded-full  items-center justify-center w-10 h-10 cursor-pointer text-white ${
        activeScroll ? "flex" : "hidden"
      } ${currentColor?.bg}`}>
      <Tooltip title="Subir">
        <KeyboardArrowUpIcon />
      </Tooltip>
    </Link>
  );
};

export default FloatingButton;
