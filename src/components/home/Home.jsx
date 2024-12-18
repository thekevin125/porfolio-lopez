import React from "react";
import Curriculum from "./Curriculum";
import "./home.css";
import work from "../../images/work.jpg";


const Home = () => {
  return (
    <div
      id="INICIO"
      className={`w-full h-screen flex flex-col justify-center items-center  text-white relative z-10 overflow-hidden`}>
      <h3 className="text-3xl font-sansSerif font-semibold text-cyan-200 tracking-widest">
        kevin lopez
      </h3>
      <h3 className="type ">
        <span className="text-3xl font-cursive font-semibold ">
          Desarrollador web
        </span>
      </h3>
      <Curriculum />
      <img
        src={work}
        alt=""
        className="absolute -z-10 w-full h-screen object-cover dark:opacity-70 opacity-95 hover:scale-105 transition-transform duration-1000 "
      />
    </div>
  );
};

export default Home;
