import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import HostDetail from "./HostDetail";

const Hosts = () => {
  const [toggle, setToggle] = React.useState(false);
  const toggler = () => {
    setToggle(!toggle);
  };
  return (
    <section className="container">
      <div className={`navigation ${toggle ? "active" : ""}`}>
        <Sidebar toggle={toggle} />
      </div>
      <div className={`main ${toggle ? "active" : ""}`}>
        <Navbar toggler={toggler} />
        <HostDetail />
      </div>
    </section>
  );
};

export default Hosts;
