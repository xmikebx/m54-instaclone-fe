import { useState } from "react";

import Login from "../login/Login";
import Signup from "../signup/Signup";
import "./LogOrSign.css";

const logOrSign = ({ setUser }) => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="logorsign-wrapper">
      <img className="imgLrg" src="src\assets\granpout.png" alt="home logo" />

      {toggle ? (
        <Login setUser={setUser} handleToggle={handleToggle} />
      ) : (
        <Signup setUser={setUser} handleToggle={handleToggle} />
      )}
    </div>
  );
};

export default logOrSign;
