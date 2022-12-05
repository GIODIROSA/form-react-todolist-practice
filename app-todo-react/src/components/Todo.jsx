import React from "react";

const Todo = ({ todo, eliminarTodo, editarTodo }) => {
  const { id, nombre, descripcion, estado, prioridad } = todo;

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            {nombre} - ({estado ? "Finalizado" : "Pendiente"})
          </div>
          <p>{descripcion}</p>
        </div>

        {/* BTN EDITAR Y FINALIZAR */}

        <div>
          <button className="btn btn-danger me-2" onClick={() => eliminarTodo(id)}>
            Eliminar
          </button>
          <button
            className="btn btn-warning text-white me-2"
            onClick={() => editarTodo(id)}
            style={{ background: estado ? "green" : "orange" }}
          >
            Editar
          </button>
        </div>

        {/* FINAL BTN EDITAR Y FINALIZAR */}

        <span className="badge bg-primary rounded-pill">
          {prioridad && "Prioridad"}
        </span>
      </li>
    </>
  );
};

export default Todo;
