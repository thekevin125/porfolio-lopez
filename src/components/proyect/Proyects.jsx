import React from "react";
import { proyects } from "../../utils/consts";
import SectionTitle from "../sectionTitle/SectionTitle";
import ProyectItem from "./ProyectItem";

const Proyects = () => {
  return (
    <section id="PROYECTOS" className="pb-8">
      <SectionTitle title={"PROYECTOS"} />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 lg:w-[80%] w-[90%] mx-auto">
        {proyects.map((item, index) => (
          <ProyectItem key={index} proyect={item} />
        ))}
      </div>
    </section>
  );
};

export default Proyects;
