import React from "react";
import { colors } from "../../utils/consts";
import ColorButton from "./ColorButton";

const ColorList = ({ setActiveColorList }) => {
  return (
    <div className="w-full flex flex-col gap-1 pl-2">
      {colors.map((item, index) => (
        <ColorButton
          key={index}
          color={item}
          setActiveColorList={setActiveColorList}
        />
      ))}
    </div>
  );
};

export default ColorList;
