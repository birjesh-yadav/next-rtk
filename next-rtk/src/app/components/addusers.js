"use client";
import { useState } from "react";
import { addUser } from "./../redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";

export default function AddUsers() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const userDispatch = () => {
    dispatch(addUser(name));
  };
  return (
    <div className="add-user">
      <h3>Add User</h3>
      <input
        type="text"
        placeholder="Add user name"
        className="add-user-input"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button className="add-user-btn" onClick={() => userDispatch()}>
        Add User
      </button>
      <br></br>
      <Link href="/removeuser">Remove User</Link>
      <br></br>
      <Link href="/todolist">Go to do</Link>
      <br></br>
      <Link href="/apiuser">Go API User</Link>
    </div>
  );
}
