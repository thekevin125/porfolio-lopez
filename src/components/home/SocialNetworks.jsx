import { Tooltip } from "@mui/material";
import React from "react";
import { networks } from "../../utils/consts";
import { useSelector } from "react-redux";
const SocialNetworks = () => {
  const currentColor = useSelector((state) => state.color.currentColor);

  return (
    <span className={`flex gap-4 ${currentColor?.text} `}>
      {networks.map((item, index) => (
        <Tooltip key={index} title={item.name}>
          <a href={item.url} target={"_blank"} rel="noreferrer">
            {item.icon}
          </a>
        </Tooltip>
      ))}
    </span>
  );
};

export default SocialNetworks;
