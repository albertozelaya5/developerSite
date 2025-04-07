import { useEffect, useState } from "react";
import { Checkbox, FormControl, ListItemIcon, ListItemText, MenuItem, Select } from "@mui/material";

const Options = [
  {
    id: 1,
    value: "Servicios Financieros",
  },
  {
    id: 2,
    value: "Seguridad y Verificación",
  },
  {
    id: 3,
    value: "Tercera opcion",
  },
];
const MaterialUiDropDown = () => {
  const OptionsValue = Options.map((item) => item.value);
  const OptionsLabel = Options.map((item) => item.label);
  const [selection, setSelection] = useState([]);
  const [label, setLabel] = useState([]);
  const isAllSelected = Options.length > 0 && selection.length === Options.length;
  const handleValue = (e) => {
    const value = e.target.value;
    if (value.includes("all")) {
      setSelection((selection && selection.length) === (Options && Options.length) ? [] : OptionsValue);
      setLabel((selection && selection.length) === (Options && Options.length) ? [] : OptionsLabel);
      return;
    }
    setSelection(value);
    setLabel(
      value.map((OptionsValue) => {
        const option = Options.find((item) => item.value === OptionsValue);
        return option ? option.label : "";
      })
    );
  };
  useEffect(() => {
    if (Array.isArray(label) && label>length>0) {
      document.querySelector("#multi-select").innerHTML=label.join(",");
    } else if (!Array.isArray(label)) {
      document.querySelector("#multi-select").innerHTML=label
    }else{
      document.querySelector("#multi-select").innerHTML="";
    }
  },[label]);
  return (
    <div>
      <FormControl sx={{ width: "20%" }}>
        <Select
          value={selection}
          multiple
          id="multi-select"
          className="dropdown"
          onChange={handleValue}
          renderValue={(selected) => {
            selected.join("");
          }}
        ></Select>
        <MenuItem value="all">
          <ListItemIcon>
            <Checkbox checked={isAllSelected}></Checkbox>
          </ListItemIcon>
          <ListItemText primary="Seleccionar Todos"></ListItemText>
        </MenuItem>
        {Options.map((options) => (
          <MenuItem key={options.id} value={options.value}>
            <ListItemIcon>
              <Checkbox name="select-checkbox" checked={selection.includes(options.value)}></Checkbox>
            </ListItemIcon>
            <ListItemText primary={options.label}></ListItemText>
          </MenuItem>
        ))}
      </FormControl>
    </div>
  );
};

export {MaterialUiDropDown};
