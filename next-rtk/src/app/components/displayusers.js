"use client";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

export default function DisplayUsers() {
  const userData = useSelector((data) => data.userData.users);
  const dispatch = useDispatch();
  console.log(userData);
  return (
    <div className="display-user">
      <h3>User List</h3>
      {userData.map((item) => (
        <div className="user-item" key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => dispatch(removeUser(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
}
