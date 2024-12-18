import React, { useEffect } from "react";
import me from "../../images/me.jpg";
import { data } from "../../utils/consts";
import SocialNetworks from "../home/SocialNetworks";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { navbarStatus, widthSizeStatus } from "../../features/navbarSlice";
import "./navbar.css";
const Navbar = () => {
  const dispatch = useDispatch();
  const currentColor = useSelector((state) => state.color.currentColor);
  const widthSizeOn = useSelector((state) => state.navbar.widthSizeOn);

  useEffect(() => {
    const displayWindowSize = () => {
      dispatch(widthSizeStatus(window.innerWidth));
    };
    window.addEventListener("resize", displayWindowSize);
    displayWindowSize();
    return () => window.removeEventListener("resize", displayWindowSize);
  }, [dispatch]);

  useEffect(() => {
    if (widthSizeOn <= 900) {
      dispatch(navbarStatus(false));
    } else {
      dispatch(navbarStatus(true));
    }
  }, [dispatch, widthSizeOn]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="h-screen w-full flex flex-col ">
      <div className="flex flex-col items-center pt-4">
        <div className=" mb-2 p-2 rounded-full  ">
          <img
            src={me}
            alt=""
            className="rounded-full w-44 h-44 object-cover"
          />
        </div>
        <h3 className="text-2xl text-teal-700 dark:text-cyan-300 font-cursive ">
          Desarrollador full stack
        </h3>
        <div className="pt-4">
          <SocialNetworks />
        </div>
      </div>
      <div className="px-8 pt-9">
        <motion.span
          variants={container}
          initial="hidden"
          animate="show"
          className=" flex flex-col gap-4 dark:text-cyan-100 font-sans">
          {data?.map((item, index) => (
            <motion.div key={index} variants={itemAnimation}>
              <Link
                activeClass={`active && ${currentColor?.text} line-through `}
                to={item?.name}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                key={index}
                className="flex  gap-2 cursor-pointer items-center hover:text-cyan-400 font-sansSerif font-semibold dark:font-normal tracking-wider "
                onClick={() => {
                  if (widthSizeOn <= 900) {
                    dispatch(navbarStatus(false));
                  }
                }}>
                <span>{item?.icon}</span>
                <span>{item?.name}</span>
              </Link>
            </motion.div>
          ))}
        </motion.span>
      </div>
      <span className="absolute bottom-0 px-6 dark:text-slate-400 text-slate-600">
        © Copyright 2023 | lopez
      </span>
    </div>
  );
};

export default Navbar;
