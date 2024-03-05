import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { CgHome } from "react-icons/cg";
import { FaCameraRetro } from "react-icons/fa6";

import "./Sidebar.css";

const Sidebar = ({ user }) => {
  //   console.log({ user });

  return (
    <div className="Sidebar">
      <FaCameraRetro className="navIcon" />

      <CgHome className="navIcon" />
      <MdExplore className="navIcon" />
      <div className="user noto-sans-bold">
        <FaUserCircle className="navIcon" />
        {user}
      </div>
    </div>
  );
};

export default Sidebar;
