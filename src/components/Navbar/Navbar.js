import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Dropdown from "../dropdown/Dropdown";
import user_image from "../../assets/images/pexels-隔壁光头老王-wangming'photo-354939.jpg";
import user_menu from "../../assets/JsonData/user_menu.json";

const curr_user = {
  display_name: "admin",
  image: user_image,
};

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <Avatar src={user.image} alt="userImage" />
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to="/" key={index} className="notification__link">
    <div className="notification-item">
      <ion-icon name={item.icon}></ion-icon>
      <span>{item.content}</span>
    </div>
  </Link>
);

const Navbar = ({ toggler }) => {
  return (
    <nav className="topbar flex ai sb">
      <div className="toggle flex ai" onClick={toggler}>
        <ion-icon name="menu-outline"></ion-icon>
      </div>
      {/* top n=right nav */}
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* dropdown here */}
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// <div className="user__img">
//   <Avatar src="/Assets/feature_bg.jpg" alt="feature bg" />
// </div>
