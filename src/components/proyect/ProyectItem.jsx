import { GitHub, Visibility } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useVisibility } from "reactjs-visibility";
import BasicModal from "./BasicModal";
import { motion, useAnimation } from "framer-motion";

const ProyectItem = ({ proyect }) => {
  const [open, setOpen] = useState(false);
  const currentColor = useSelector((state) => state.color.currentColor);
  const { ref, visible } = useVisibility();

  const animation = useAnimation();
  /*
  useEffect(() => {
    if (visible) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 2.4,
        },
      });
    }
    if (!visible) {
      animation.start({
        opacity: 0,
      });
    }
  }, [visible, animation]);*/
  return (
    <div ref={ref}>
      <div className="w-full shadow-md">
        <div className="w-full overflow-hidden cursor-pointer flex">
          <img
            src={proyect?.image}
            alt=""
            className="w-full h-52  object-cover bg-slate-400 hover:scale-105 transition-all duration-1000"
            onClick={() => setOpen(true)}
          />
        </div>
        <h3 className="font-sansSerif font-bold text-2xl tracking-wider text-teal-700 dark:text-cyan-100">
          {proyect?.name}
        </h3>
        <p className="font-sansSerif font-semibold dark:font-normal dark:text-white">
          {proyect?.description}
        </p>
        <h3 className="tracking-wider text-teal-700 dark:text-cyan-100">
          Tecnologías
        </h3>
        <div className="flex flex-wrap gap-3">
          {proyect?.tools.map((item, index) => (
            <div
              className="font-sansSerif font-semibold dark:font-normal dark:text-white "
              key={index}
            >
              <div>{item},</div>
            </div>
          ))}
        </div>
        <div
          className={`w-full flex justify-end gap-2 p-2 ${currentColor?.text}`}
        >
          <a
            className={proyect.url ? "" : "hidden"}
            href={proyect.url}
            target={"_blank"}
            rel="noreferrer"
          >
            <Visibility />
          </a>
          <a href={proyect.git} target={"_blank"} rel="noreferrer">
            <GitHub />
          </a>
        </div>

        <BasicModal open={open} setOpen={setOpen} proyect={proyect} />
      </div>
    </div>
  );
};

export default ProyectItem;
