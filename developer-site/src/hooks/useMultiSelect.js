import { useState } from "react";

export const useMultiSelect = (options) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option) => {
    if (option === "Seleccionar Todos") {
      if (selectedOptions.length === options.length) {
        setSelectedOptions([]);
      } else {
        setSelectedOptions(options.map((opt) => opt.label)); // Usar opt.label en lugar de opt.value
      }
    } else {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((item) => item !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    }
  };

  return {
    selectedOptions,
    toggleOption,
  };
};
