import { useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { useFormulario } from "../hooks/useFormulario";

const Formulario = ({ agregarTodo }) => {
  const initialState = {
    nombre: "",
    descripcion: "",
    estado: "pendiente",
    prioridad: false,
  };

  const [inputs, handleChange, reset] = useFormulario(initialState);
  //   Destructurar
  const { nombre, descripcion, estado, prioridad } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("___________funcionando el submit___________");

    if (!nombre.trim()) {
      e.target[0].focus();
      return Swal.fire({
        title: "Error!",
        text: "Descripción ogligatoria",
        icon: "error",
      });
    }

    if (!descripcion.trim()) {
      e.target[1].focus();
      return Swal.fire({
        title: "Error!",
        text: "Descripción ogligatoria",
        icon: "error",
      });
    }

    agregarTodo({
      nombre,
      descripcion,
      estado: estado === "pendiente" ? false : true,
      prioridad,
      id: uuidv4(),
    });

    Swal.fire({
      title: "Éxito",
      text: "¡Todo agregado!",
      icon: "success",
    });

    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese su nombre"
          name="nombre"
          value={nombre}
          onChange={handleChange}
        />
        <textarea
          className="form-control mb-2"
          name="descripcion"
          placeholder="Ingrese Descripcion"
          value={descripcion}
          onChange={handleChange}
        ></textarea>

        <select
          className="form-control mb-2"
          name="estado"
          value={estado}
          onChange={handleChange}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>

        <div className="form-check">
          <input
            type="checkbox"
            name="prioridad"
            id="idCheckbox"
            className="form-check-input mb-2"
            checked={prioridad}
            onChange={handleChange}
          />
          <label htmlFor="idCheckbox" className="form-check-label">
            Dar Prioridad
          </label>
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formulario;
