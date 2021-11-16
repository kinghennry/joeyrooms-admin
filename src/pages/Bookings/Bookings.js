import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
// import PayDetail from "./PayDetail";
const Bookings = () => {
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
        {/* <PayDetail /> */}
        <h1>Booking Details</h1>
      </div>
    </section>
  );
};

export default Bookings;

// https://chat.whatsapp.com/JkVlObEdMnUFPIWc8cLWIq
