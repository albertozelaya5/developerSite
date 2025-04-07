import { useState } from "react";

const MultiSelectDropdown = ({ options, selectedOptions, toggleOption, name, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleToggleOption = (option) => {
    toggleOption(option);
    onChange(selectedOptions); // Llama a onChange para actualizar el estado en el componente padre.
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="mb-4 px-4 py-2 w-full text-left  border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 relative"
      >
        {selectedOptions.length > 0 ? `${selectedOptions.length} seleccionados` : "Selecciona categorías"}
        <span className="absolute end-1 mt-1">
          <svg className="w-4 h-4 right-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-card border border-gray-300 rounded-lg shadow-lg">
          <label className="flex items-center space-x-2 px-4 py-2 cursor-pointer hover:bg-gray-500">
            <input
              type="checkbox"
              onChange={() => handleToggleOption("Seleccionar Todos")}
              checked={selectedOptions.length === options.length}
              className="form-checkbox rounded"
            />
            <span>Seleccionar Todos</span>
          </label>
          {options.map((option, index) => (
            <label key={index} className="flex items-center space-x-2 px-4 py-2 cursor-pointer hover:bg-gray-500">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.label)}
                onChange={() => handleToggleOption(option.label)}
                className="form-checkbox rounded text-blue-600"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export { MultiSelectDropdown };
