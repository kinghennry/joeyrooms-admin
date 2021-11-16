import React, { useRef } from "react";
import "./dropdown.css";
import { Link } from "react-router-dom";

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener("mousedown", (e) => {
    // user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle("active");
    } else {
      // user click outside toggle and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active");
      }
    }
  });
};

const Dropdown = (props) => {
  const dropdown_toggle_el = useRef(null);
  const dropdown_content_el = useRef(null);

  clickOutsideRef(dropdown_content_el, dropdown_toggle_el);
  return (
    <div className="dropdown">
      <button ref={dropdown_toggle_el} className="dropdown__toggle">
        {props.icon ? <ion-icon name={props.icon}></ion-icon> : ""}
        {props.badge ? (
          <span className="dropdown__toggle-badge">{props.badge}</span>
        ) : (
          ""
        )}
        {props.customToggle ? props.customToggle() : ""}
      </button>

      <div ref={dropdown_content_el} className="dropdown__content">
        <Link to="/" className="notification__link">
          <div className="notification-item">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <span>Change Password</span>
          </div>
        </Link>
        <Link to="/" className="notification__link">
          <div className="notification-item">
            <ion-icon name="log-out-outline"></ion-icon>
            <span>Log out</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
