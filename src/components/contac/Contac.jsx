import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { information } from "../../utils/consts";
import SectionTitle from "../sectionTitle/SectionTitle";
import { useSelector } from "react-redux";

// Componente para los campos de entrada
const InputField = ({ label, type, name, value, onChange, placeholder }) => (
  <div className="flex-1 mr-2">
    <h2>{label}</h2>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="outline-none p-1 shadow-sm dark:bg-slate-300 dark:text-black w-full"
      placeholder={placeholder}
    />
  </div>
);

const Contac = () => {
  const currentColor = useSelector((state) => state.color.currentColor);

  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [stateColor, setStateColor] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (user.name.trim() && user.email.trim() && user.message.trim()) {
      emailjs
        .sendForm(
          "service_p22k94k", // Nuevo Service ID
          "template_x80ypca", // Nuevo Template ID
          e.target,
          "CEBROxwJvYpoGAiPq" // Nueva Public Key
        )
        .then(
          (result) => {
            setStatusMessage("Mensaje enviado con éxito");
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

      <div className="flex md:px-6">
        {/* Información de contacto */}
        <div className="w-1/12 lg:w-3/12 hidden mx-4 lg:flex flex-col gap-2 px-8 pt-3 shadow-xl dark:shadow-md">
          {information.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div>{item.icon}</div>
              <div>
                <h2>{item.name}:</h2>
                <h3>{item.detail}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Formulario de contacto */}
        <div className="flex-1 md:mx-4 px-8 pt-3 shadow-xl dark:shadow-md">
          <form className="px-2 flex flex-col" onSubmit={sendEmail}>
            {/* Mensaje de estado */}
            <h2
              className={`p-2 font-sansSerif font-semibold ${
                stateColor ? stateColor : "invisible"
              } bg-red-500`}
            >
              {statusMessage}
            </h2>

            <div className="flex w-full">
              {/* Campo Nombre */}
              <InputField
                label="Nombre"
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="nombre"
              />

              {/* Campo Email */}
              <InputField
                label="Email"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>

            {/* Campo Mensaje */}
            <div>
              <h2>Mensaje</h2>
              <textarea
                name="message"
                value={user.message}
                onChange={handleChange}
                className="outline-none p-1 shadow-sm dark:bg-slate-300 dark:text-black w-full h-52"
              />
            </div>

            <h3
              className={`text-red-400 text-sm ${
                user.message ? "invisible" : ""
              }`}
            >
              * Campo obligatorio
            </h3>

            {/* Botón Enviar */}
            <button
              type="submit"
              className={`py-2 mt-2 mb-6 text-white ${currentColor?.bg}`}
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
