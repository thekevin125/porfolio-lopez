import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { information } from "../../utils/consts";
import SectionTitle from "../sectionTitle/SectionTitle";
import { useSelector } from "react-redux";
const Contac = () => {
  const currentColor = useSelector((state) => state.color.currentColor);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [stateColor, setStateColor] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (user.name.trim() && user.email.trim() && user.message.trim()) {
      emailjs
        .sendForm(
          "service_m0nuv0j",
          "template_df8qtu8",
          e.target,
          "dkoNdWza_358lLx1w"
        )
        .then(
          (result) => {
            setStatusMessage("Mensaje enviado con exito");
            setStateColor("bg-blue-500");
          },
          (error) => {
            setStatusMessage("Se ha producido un error");
            setStateColor("bg-red-500");
          }
        );
    } else {
      setStatusMessage("Se requiere llenar todos los campos");
      setStateColor("bg-yellow-500");
    }
  };

  return (
    <div className="pb-48 dark:text-cyan-100" id="CONTACTO">
      <SectionTitle title={"CONTACTO"} />

      <div className="flex md:px-6 ">
        <div className=" w-1/12 lg:w-3/12 hidden  mx-4 lg:flex flex-col gap-2 px-8 pt-3  shadow-xl dark:shadow-md">
          {information.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div>{item.icon} </div>
              <div>
                <h2>{item.name}:</h2>
                <h3>{item.detail}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1  md:mx-4 px-8 pt-3 shadow-xl dark:shadow-md">
          <form className=" px-2 flex flex-col" onSubmit={sendEmail}>
            <h2
              className={` p-2 font-sansSerif font-semibold ${
                stateColor ? stateColor : "invisible"
              } bg-red-500 `}
            >
              {statusMessage}
            </h2>

            <div className="flex w-full">
              <div className="flex-1 mr-2">
                <h2>Nombre</h2>
                <input
                  type={"text"}
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  name="user_name"
                  className="outline-none p-1 shadow-sm dark:bg-slate-300 dark:text-black w-full"
                  placeholder="nombre"
                />
                <h3
                  className={`text-red-400 text-sm ${
                    user.name ? "invisible" : ""
                  }`}
                >
                  * Campo obligatorio
                </h3>
              </div>
              <div className="flex-1 ">
                <h2>Email</h2>
                <input
                  type={"email"}
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  name="user_email"
                  className="outline-none p-1 shadow-sm dark:bg-slate-300 dark:text-black w-full "
                  placeholder="Email"
                />
                <h3
                  className={`text-red-400 text-sm ${
                    user.email ? "invisible" : ""
                  }`}
                >
                  * Campo obligatorio
                </h3>
              </div>
            </div>

            <h2>Mensaje</h2>
            <textarea
              name="message"
              value={user.message}
              onChange={(e) => setUser({ ...user, message: e.target.value })}
              className="outline-none p-1 shadow-sm dark:bg-slate-300 dark:text-black w-full h-52"
            />
            <h3
              className={`text-red-400 text-sm ${
                user.message ? "invisible" : ""
              }`}
            >
              * Campo obligatorio
            </h3>
            <button
              type="submit"
              value={"message"}
              className={` py-2  mt-2 mb-6 text-white ${currentColor?.bg}`}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contac;
