import React, { useEffect } from "react";
import temporal from "../../images/temporal.svg";
import SectionTitle from "../sectionTitle/SectionTitle";
import { motion, useAnimation } from "framer-motion";
import { useVisibility } from "reactjs-visibility";

const About = () => {
  const { ref, visible } = useVisibility();

  const animationLeft = useAnimation();
  const animationRight = useAnimation();

  useEffect(() => {
    if (visible) {
      animationLeft.start({
        x: 0,
        transition: {
          duration: 2,
          opacity: 0,
          type: "spring",
          bounce: 0,
        },
      });
      animationRight.start({
        x: 0,
        transition: {
          duration: 2,
          opacity: 0,
          type: "spring",
          bounce: 0,
        },
      });
    }
    if (!visible) {
      animationLeft.start({
        x: "-100vw",
      });
      animationRight.start({
        x: "100vw",
      });
    }
  }, [visible, animationLeft, animationRight]);

  return (
    <section id="SOBRE MI" className="w-full pb-8 section-container">
      <SectionTitle title={"SOBRE MI"} />

      <div
        ref={ref}
        className="grid lg:grid-cols-2 justify-items-center w-[95%] mx-auto">
        <motion.img
          animate={animationLeft}
          src={temporal}
          alt=""
          className="lg:h-full h-72"
        />
        <motion.span animate={animationRight} className="w-full">
          <h2 className="font-sansSerif font-bold text-2xl tracking-wider text-teal-700 dark:text-cyan-100">
            Desarrollador Web
          </h2>
          <p className="font-sansSerif font-semibold dark:font-normal dark:text-white">
            Desarrollador con intereses en Diseño UI, REST API,
            dispuesto a aprender nuevas tecnologías web del
            mercado. Experiencia en proyectos JavaScript, REST API, maquetación
            HTML & CSS, Especialista en la solución óptima de problemas de
            software y trabajo en equipo, manteniendo siempre buenas prácticas
            de programación. Busco mi primera oportunidad para formar parte de
            un equipo de desarrollo y aprender nuevos conocimientos para crecer
            profesionalmente.
          </p>
        </motion.span>
      </div>
    </section>
  );
};

export default About;
