import React, { useState } from "react";
import { signup } from "../../utils/fetch";
import "./Signup.css";

const Signup = ({ setUser, handleToggle }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
    console.log(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // let form = document.getElementById("signupForm");

    console.log("hello from handle submit");
    const data = await signup(username, email, password);
    await setUser(data.user);
    // form.reset();
  };

  return (
    <div className="signup-wrapper">
      <img className="logo" src="src\assets\instagran.png" alt="home logo" />
      <h1 className="logotxt">Instagran</h1>
      <form className="my-form" onSubmit={handleSubmit}>
        <input
          placeholder="username"
          maxLength="10"
          onChange={(e) => changeHandler(e, setUsername, username)}
        />
        <input
          placeholder="email"
          onChange={(e) => changeHandler(e, setEmail, email)}
        />
        <input
          placeholder="password"
          onChange={(e) => changeHandler(e, setPassword, password)}
        />
        <button className="noto-sans-norm regT" type="submit">
          Sign up
        </button>
      </form>
      <p className="login noto-sans-bold regT" onClick={handleToggle}>
        Log in
      </p>
    </div>
  );
};
export default Signup;
