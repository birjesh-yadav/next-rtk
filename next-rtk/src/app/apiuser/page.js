"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchAPIUser } from "./../redux/slice";
import { useEffect } from "react";

export default function Page() {
  const dispatch = useDispatch();
  const apiData = useSelector((data) => data.userData.userApiData);
  console.log(apiData);
  useEffect(() => {
    dispatch(fetchAPIUser());
  }, []);

  return (
    <div className="display-user">
      <h1>Rest API Call for User</h1>
      {/* <button onClick={() => dispatch(fetchAPIUser())}>Load User</button> */}
      <h3>User List</h3>
      {apiData.map((item) => (
        <div className="user-item" key={item.id}>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}
