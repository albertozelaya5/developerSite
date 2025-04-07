import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import axios from "axios";
import { useMultiSelect } from "@/hooks";
import { MultiSelectDropdown } from "../ui/MultiSelectDropdown";

export const ContactForm = () => {
  return (
    <div className=" my-10 flex flex-wrap xl:justify-between md:flex-nowrap md:mx-2 md:my-12 items-start xl:mx-16">
      <div
        className="mx-5 md:w-full xl:w-full"
      >
        <FormContact />
      </div>
      <FormEspecialist />
    </div>
  );
};

export const FormContact = () => {
  const options = [
    { value: "Servicios Financieros", label: "Servicios Financieros" },
    { value: "Seguridad y Verificación", label: "Seguridad y Verificación" },
    { value: "Tercera Opcion", label: "Tercera Opcion" },
  ];

  const { selectedOptions, toggleOption } = useMultiSelect(options);

  const [post, setPost] = useState({
    FullName: "",
    email: "",
    phoneNumber: "",
    formTypeId: "6",
    title: "Consulta",
    info: {
      clientType: "",
      businessName: "",
      category: [],
      isClient: false,
      description: "",
    },
  });
  useEffect(() => {
    setPost((prev) => ({
      ...prev,
      info: {
        ...prev.info,
        category: selectedOptions,
      },
    }));
  }, [selectedOptions]);

  const [step, setStep] = useState(1);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name === "clientType" || name === "businessName" || name === "description" ? "info" : name]:
        name === "clientType" || name === "businessName" || name === "description"
          ? { ...prevPost.info, [name]: value }
          : value,
    }));
  };

  const handleCategoryChange = (selectedOptions) => {
    setPost((prevPost) => ({
      ...prevPost,
      info: {
        ...prevPost.info,
        category: selectedOptions.map((option) => option.value),
      },
    }));
  };

  const handleIsClientChange = (value) => {
    setPost((prevPost) => ({
      ...prevPost,
      info: {
        ...prevPost.info,
        isClient: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `${import.meta.env.VITE_BASE_API_URL}website/forms`;

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    };

    console.log("Sending the following data to the server:", post);

    axios
      .post(url, post, { headers })
      .then((response) => console.log("Response received:", response))
      .catch((error) => {
        console.log("Error occurred:", error);
        if (error.response) {
          console.log("Error data:", error.response.data);
          console.log("Error status:", error.response.status);
          console.log("Error headers:", error.response.headers);
        } else if (error.request) {
          console.log("Request made but no response:", error.request);
        } else {
          console.log("Error setting up request:", error.message);
        }
      });
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Barra de progreso
  const ProgressBar = () => {
    const segmentWidth = 100 / 3;
    const space = 1;

    const activeWidth = (index) => {
      if (step > index) {
        return `calc(${segmentWidth}% - ${space}% - ${space / 2}px)`;
      } else if (step === index) {
        return `calc(${(100 / 3) * (1 - (index - step) / 3)}% - ${space / 2}px)`;
      } else {
        return "0%";
      }
    };

    return (
      <div className="mx-1">
        <p>
          Paso <strong>{step}</strong> de 3
        </p>
        <div className="w-full bg-gray-300 h-2 mb-4 rounded-xl relative">
          <div
            className="transition duration-200 ease-in-out bg-RED_DARK h-2 rounded-xl absolute"
            style={{
              width: activeWidth(1),
              left: "0%",
              marginRight: `${space}%`,
            }}
          ></div>
          <div
            className="bg-RED_DARK h-2 rounded-xl absolute"
            style={{
              width: activeWidth(2),
              left: `calc(${segmentWidth}% + ${space}px)`,
              margin: `0 ${space}%`,
            }}
          ></div>
          <div
            className="bg-RED_DARK h-2 rounded-xl absolute"
            style={{
              width: activeWidth(3),
              left: `calc(${2 * (segmentWidth + space)}% + ${space}px)`,
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <form className="mx-0 sm:w-full" onSubmit={handleSubmit} name="Consulta">
      <h1 className="mb-6 text-2xl font-bold leading-6 tracking-tight lg:text-4xl">
        Utilice el siguiente formulario para contactarnos
      </h1>
      <ProgressBar />
      {step === 1 && (
        <div className="py-5">
          <p className="text-sm">Nombre completo*</p>
          <input
            onChange={handleInput}
            type="text"
            name="FullName"
            value={post.FullName}
            placeholder="Nombre completo"
            className="mb-5 border-gray-300 border rounded-lg p-2 w-full bg-card"
          />
          <p className="text-sm">Tipo de cliente*</p>
          <select
            className="mb-4 border-gray-300 border p-2 w-full rounded-lg bg-card"
            value={post.info.clientType}
            name="clientType"
            onChange={handleInput}
          >
            <option value="" disabled hidden>
              Tipo de cliente
            </option>
            <option value="persona_natural">Persona Natural</option>
            <option value="empresa">Empresa</option>
          </select>
          <hr className="mt-7 mb-3" />
          <div className="relative">
            <button
              type="button"
              onClick={nextStep}
              className="hover:bg-[#A32035] bg-RED_DARK border border-RED_LIGHT hover:bg-transparent hover:text-RED_LIGHT transition ease-out duration-200 text text-white py-2 px-4 rounded absolute right-0"
            >
              Siguiente
            </button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="py-5">
          <p className="text-sm">Correo electrónico*</p>
          <input
            name="email"
            value={post.email}
            onChange={handleInput}
            type="email"
            placeholder="Correo electrónico"
            className="mb-4 border-gray-300 border p-2 w-full rounded-lg bg-card"
          />
          <p className="text-sm">Teléfono de contacto*</p>
          <input
            name="phoneNumber"
            value={post.phoneNumber}
            onChange={handleInput}
            type="phone"
            placeholder="Teléfono de contacto*"
            className="mb-4 border-gray-300 border p-2 w-full rounded-lg bg-card"
          />
          <div>
            <p className="text-sm mb-1">¿Es cliente de BANHCAFE?</p>
            <DiamondCheckboxes onChange={handleIsClientChange} />
          </div>
          <hr className="mt-7 mb-3" />
          <div className="flex justify-between">
            <Button
              type="button"
              onClick={prevStep}
              className="border-RED_DARK border bg-transparent text-RED_DARK hover:text-white"
            >
              Anterior
            </Button>
            <Button
              type="button"
              onClick={nextStep}
              className="hover:bg-[#A32035] bg-RED_DARK border border-RED_LIGHT hover:bg-transparent hover:text-RED_LIGHT transition ease-out duration-200 text text-white rounded"
            >
              Siguiente
            </Button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <p className="text-sm">Razón social de la empresa*</p>
          <input
            name="businessName"
            onChange={handleInput}
            value={post.info.businessName}
            type="text"
            placeholder="Razón social de la empresa"
            className="mb-4 border-gray-300 border p-2 w-full rounded-lg bg-card"
          />
          <p className="text-sm mb-1">Categoría*</p>
          <MultiSelectDropdown
            options={options}
            selectedOptions={selectedOptions}
            toggleOption={toggleOption}
            onChange={handleCategoryChange}
          />

          <p className="text-sm mt-4">Descripción*</p>
          <textarea
            name="description"
            onChange={handleInput}
            value={post.info.description}
            placeholder="Descripción"
            className="mb-4 border-gray-300 border p-2 w-full rounded-lg bg-card"
          />
          <hr className="mt-7 mb-3" />
          <div className="flex justify-between">
            <Button
              type="button"
              onClick={prevStep}
              className="border-RED_DARK border bg-transparent text-RED_DARK hover:text-white"
            >
              Anterior
            </Button>
            <Button
              type="submit"
              className="hover:bg-[#A32035] bg-RED_DARK border border-RED_LIGHT hover:bg-transparent hover:text-RED_LIGHT transition ease-out duration-200 text text-white rounded"
            >
              Enviar
            </Button>
          </div>
        </div>
      )}
    </form>
  );
};

// Ejemplo de componente DiamondCheckboxes para "¿Es cliente de BANHCAFE?"
const DiamondCheckboxes = ({ onChange }) => {
  const [value, setValue] = useState(false);

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setValue(isChecked);
    onChange(isChecked);
  };

  return (
    <label className="inline-flex items-center">
      <input type="checkbox" checked={value} onChange={handleCheckboxChange} className="form-checkbox" />
      <span className="ml-2">Sí</span>
    </label>
  );
};

export const FormEspecialist = () => {
  return (
    <div className=" rounded-lg border w-full p-8 mt-14 md:mt-20 lg:h-fit  xl:w-fit xl:mt-2 text-card-foreground bg-card mx-4 lg:w-[50vh] md:w-[60vh]">
      <strong>Hable con Nuestros Especialistas</strong>
      <p className="mt-2">Puede llamarnos al 2553-4002 en SPS o al 2239-8370 en Tegucigalpa.</p>
    </div>
  );
};
