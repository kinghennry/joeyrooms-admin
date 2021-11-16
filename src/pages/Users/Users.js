import React from "react";
// import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import UserDetail from "./UserDetail";
function Users() {
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
        <UserDetail />
      </div>
    </section>
  );
}

export default Users;
