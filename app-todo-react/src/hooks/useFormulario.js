import { useState } from "react";

export const useFormulario = (inicialState = {}) => {
  const [inputs, setInputs] = useState(inicialState);

  //HANDLE CHANGE

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    setInputs((old) => ({
      ...old,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const reset = () => {
    setInputs(inicialState);
  };

  return [inputs, handleChange, reset];
};
