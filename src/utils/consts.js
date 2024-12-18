import {
  AddLocationAltOutlined,
  GitHub,
  HomeOutlined,
  LinkedIn,
  MailOutline,
  MenuBookOutlined,
  MessageOutlined,
  PersonOutlineOutlined,
  PhoneIphoneOutlined,
  WhatsApp,
  WorkOutlineOutlined,
} from "@mui/icons-material";

import css3 from "../images/css3.png";
import git from "../images/git.png";
import html5 from "../images/html5.png";
import reactNative from "../images/reactNative.png";
import javascript from "../images/javascript.png";
import mysql from "../images/mysql.png";
import nest from "../images/nest.png";
import postman from "../images/postman.png";
import react from "../images/react.png";
import redux from "../images/redux.png";
import tailwind from "../images/tailwind.png";
import typeorm from "../images/typeorm.png";
import expo from "../images/expo.png";
import postgresql from "../images/postgresql.png";
import mongodb from "../images/mongodb.png";

import proyect4_1 from "../images/proyect4_1.png";
import proyect4_2 from "../images/proyect4_2.png";
import proyect4_3 from "../images/proyect4_3.png";





import uiTravel from "../images/travel.png";


export const data = [
  {
    icon: <HomeOutlined />,
    name: "INICIO",
  },
  {
    icon: <PersonOutlineOutlined />,
    name: "SOBRE MI",
  },
  {
    icon: <WorkOutlineOutlined />,
    name: "PROYECTOS",
  },
  {
    icon: <MenuBookOutlined />,
    name: "HABILIDADES",
  },
  {
    icon: <MailOutline />,
    name: "CONTACTO",
  },
];

export const networks = [
  {
    name: "Github",
    icon: <GitHub />,
    url: "https://github.com/thekevin125",
  },
  {
    name: "LinkedIn",
    icon: <LinkedIn />,
  },
  {
    name: "WhatsApp",
    icon: <WhatsApp />,
    url: "https://api.whatsapp.com/send?phone=573218188660&text=Hola, necesito informacion?",
  },
];

export const technologies = [
 
  {
    icon: html5,
    name: "HTML5",
  },
  {
    icon: css3,
    name: "CSS3",
  },
  {
    icon: tailwind,
    name: "Tailwind",
  },
  {
    icon: javascript,
    name: "JavaScript",
  },
  {
    icon: react,
    name: "ReactJS",
  },
  {
    icon: reactNative,
    name: "React Native",
  },
  {
    icon: expo,
    name: "Expo",
  },
  {
    icon: redux,
    name: "Redux",
  },

  {
    icon: nest,
    name: "Nest",
  },
  {
    icon: typeorm,
    name: "TypeOrm",
  },
  {
    icon: mysql,
    name: "MySQL",
  },
  {
    icon: postgresql,
    name: "Posgresql",
  },
  {
    icon: mongodb,
    name: "MongoDB",
  },

  {
    icon: git,
    name: "Git",
  },
  {
    icon: postman,
    name: "Postman",
  },
];

export const proyects = [
 
  {
    name: "App de Viajes",
    description:
      "Este proyecto se centra en crear un diseño simple e intuitivo para el usuario, con el objetivo de mejorar mis habilidades en el desarrollo de aplicaciones móviles.",
    image: uiTravel,
    url: "",
    tools: ["Flutter", "Dart"],
    information: [
      {
        video: "https://youtube.com/shorts/5R4qU2HIcB0?feature=share",
        description:
          "Este proyecto consiste en implementar un diseño previamente obtenido, con el fin de fortalecer mis habilidades en el desarrollo de aplicaciones. La interfaz se ha creado con especial atención en la simplicidad y la intuición, lo que proporciona una experiencia de usuario fluida y agradable. Al trabajar en este proyecto, he profundizado en el uso de Flutter y Dart para la creación de interfaces de usuario atractivas y funcionales.",
      },
    ],
  },





 
  {
    name: "Diseño de Sitio Web de Cafetería",
    description:
      "Este proyecto consiste en explorar y implementar animaciones, para generar un grado de usabilidad al usuario",
    image: proyect4_1,
    git: "https://github.com/kevinS1996buri/cafeteria_designs",
    url: "https://golden-parfait-146ab0.netlify.app",
    tools: ["React.js", "Tailwind", "JavaScrip", "JSX", "FramerMotion"],
    information: [
      {
        image: proyect4_1,
        description: "Diseño que incluye una gran usabilidad para el usuario",
      },
      {
        image: proyect4_2,
        description: "Barra lateral de compras",
      },
      {
        image: proyect4_3,
        description: "100% responsivo",
      },
    ],
  },
  
];

export const information = [
  {
    icon: <AddLocationAltOutlined />,
    name: "Ciudad",
    detail: "popayan cauca",
  },
  {
    icon: <MessageOutlined />,
    name: "Email",
    detail: "thekevincaldon@gmail.com",
  },
  {
    icon: <PhoneIphoneOutlined />,
    name: "Celular",
    detail: "+573218188660",
  },
];

export const colors = [
  {
    name: "a",
    bg: "bg-sky-600",
    text: "text-sky-600",
  },
  {
    name: "a",
    bg: "bg-green-600",
    text: "text-green-600",
  },
  {
    name: "a",
    bg: "bg-emerald-600",
    text: "text-emerald-600",
  },
  {
    name: "a",
    bg: "bg-orange-600",
    text: "text-orange-600",
  },
  {
    name: "a",
    bg: "bg-cyan-500",
    text: "text-cyan-500",
  },
];
