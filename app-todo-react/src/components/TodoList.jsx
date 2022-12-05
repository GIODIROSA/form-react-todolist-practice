import React from "react";
import { useState, useEffect } from "react";
import Formulario from "./Formulario";
import Todo from "./Todo";

const TodoList = () => {
 

const [todos, setTodos] = useState(() => {
  const enMemoria = localStorage.getItem("todos");
  const initialValue = JSON.parse(enMemoria);
  return initialValue || "";
});


 useEffect(() => {
  console.log("Guardar todo local");
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);


  const agregarTodo = (todo) => {
    // console.log(todo);
    setTodos((old) => [...old, todo]);
  };

  const eliminarTodo = (id) => {
    setTodos((old) => old.filter((item) => item.id !== id));
  };

  const editarTodo = (id) => {
    const editarTodos = todos.map((item) =>
      item.id === id ? { ...item, estado: !item.estado } : item
    );

    setTodos(editarTodos);
  };

  return (
    <div className="container">
      <h2>Formulario</h2>
      <Formulario agregarTodo={agregarTodo} />
      <ol className="list-group list-group-numbered mt-5">
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            eliminarTodo={eliminarTodo}
            editarTodo={editarTodo}
          />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
