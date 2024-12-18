import {
  CloseOutlined,
  MenuOutlined,
  SettingsSuggestOutlined,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";

import React, { useState } from "react";
import ThemeButton from "./ThemeButton";
import { useDispatch, useSelector } from "react-redux";
import { navbarStatus } from "../../features/navbarSlice";
import ColorList from "./ColorList";

const ConfigurationOptions = () => {
  const [activeColorList, setActiveColorList] = useState(false);
  const dispatch = useDispatch();
  const activeNavbar = useSelector((state) => state.navbar.isActive);
  const currentColor = useSelector((state) => state.color.currentColor);

  return (
    <div>
      <button
        type="button"
        className={`${currentColor?.text}  `}
        onClick={() => {
          dispatch(navbarStatus(!activeNavbar));
        }}>
        {activeNavbar ? (
          <CloseOutlined sx={{ m: 1, fontSize: "2rem" }} />
        ) : (
          <MenuOutlined sx={{ m: 1, fontSize: "2rem" }} />
        )}
      </button>

      <ThemeButton />
      <Tooltip
        type="button"
        title="Opciones"
        className={`cursor-pointer  ${currentColor?.text}  `}
        onClick={() => setActiveColorList((active) => !active)}>
        <SettingsSuggestOutlined sx={{ m: 1, fontSize: "2rem" }} />
      </Tooltip>
      {activeColorList && <ColorList setActiveColorList={setActiveColorList} />}
    </div>
  );
};

export default ConfigurationOptions;
