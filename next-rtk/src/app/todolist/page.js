"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../redux/todoSlice";

export default function Page() {
  const [todo, setTodod] = useState("");
  const dispatch = useDispatch();
  const todoData = useSelector((data) => data.todoData.todos);
  console.log(todoData);
  const toDoDispatch = () => {
    dispatch(addTodos(todo));
  };
  return (
    <div className="display-user">
      <h1>Add ToDos</h1>
      <input
        type="text"
        placeholder="Add new todo"
        onChange={(e) => setTodod(e.target.value)}
      ></input>
      <button onClick={() => toDoDispatch()}>Add ToDo</button>
      <h5>To do List</h5>
      {todoData.map((item) => (
        <div className="user-item" key={item.id}>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}
