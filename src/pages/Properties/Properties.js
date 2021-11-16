import React from "react";
// import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import PropertiesDetail from "./PropertiesDetail";
const Properties = () => {
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
        {/* <Navbar toggler={toggler} /> */}
        <PropertiesDetail />
      </div>
    </section>
  );
};

export default Properties;
