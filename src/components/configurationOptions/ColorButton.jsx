import { CheckOutlined } from "@mui/icons-material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { colorStatus } from "../../features/colorSlice";

const ColorButton = ({ color, setActiveColorList }) => {
  const currentColor = useSelector((state) => state.color.currentColor);
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => {
        dispatch(colorStatus({ bg: color.bg, text: color.text }));
        setActiveColorList((isActive) => !isActive);
      }}
      className={`w-7 h-7 rounded-full ${color.bg}`}>
      <div
        className={`${
          currentColor?.bg === color.bg ? "text-white" : "hidden"
        }`}>
        <CheckOutlined />
      </div>
    </button>
  );
};

export default ColorButton;
