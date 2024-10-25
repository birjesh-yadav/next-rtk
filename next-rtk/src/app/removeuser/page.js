"use client";

import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";
import Link from "next/link";

export default function Page() {
  const userData = useSelector((data) => data.userData.users);
  const dispatch = useDispatch();
  return (
    <div className="display-user">
      <h1>Remove User Page</h1>
      {userData.map((item) => (
        <div className="user-item">
          <span>{item.name}</span>
          <button onClick={() => dispatch(removeUser(item.id))}>
            Remove User
          </button>
        </div>
      ))}
      <Link href="/" className="link">
        Back to Home
      </Link>
    </div>
  );
}
