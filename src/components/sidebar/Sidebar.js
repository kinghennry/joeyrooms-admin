import React from "react";
import { Link } from "react-router-dom";
// import sidebar_items from "../../assets/JsonData/sidebar_routes.json";
import routes from "../../assets/JsonData/sidebar_routes";
function Sidebar({ toggle }) {
  return (
    <ul className="nav__list">
      <li>
        <Link to="/dashboard">
          <span className="flex ai">
            <img
              className={`img ${toggle ? "active" : ""}`}
              src="/Assets/Joey_Rooms_logo-trans.png"
              alt="logo name"
            />
          </span>
        </Link>
      </li>
      {routes.map((item, index) => {
        return (
          <li
            className={`nav__item ${index === item && "active_btn"}`}
            key={index}
          >
            <Link className="flex ai" to={item.route}>
              <span className="icon">
                <span className="sidebar__icon">{item.icon}</span>
              </span>
              <span className="title">{item.display_name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Sidebar;
