import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import * as actionType from "../../constants/actionTypes";
import DashboardDetail from "./DashboardDetail";

function Dashboard() {
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    setToggle(!toggle);
  };
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const user = null;
  // const logout = () => {
  //   dispatch({ type: actionType.LOGOUT });
  //   navigate("/");
  //   setUser(null);
  // };

  return (
    // <div>
    //   {user ? (
    //     <>
    //       <h1>{user.username}</h1>
    //       <h1>{user.password}</h1>
    //       <button onClick={logout}>Log out</button>
    //     </>
    //   ) : (
    //     <>
    //       <h1>hEELO</h1>
    //     </>
    //   )}
    // </div>
    <section className="container">
      <div className={`navigation ${toggle ? "active" : ""}`}>
        <Sidebar toggle={toggle} />
      </div>
      <div className={`main ${toggle ? "active" : ""}`}>
        <Navbar toggler={toggler} />
        <DashboardDetail />
      </div>
    </section>
  );
}

export default Dashboard;
