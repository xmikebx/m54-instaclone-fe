import React, { useState } from "react";
import { login } from "../../utils/fetch";
import "./Login.css";

const Login = ({ setUser, handleToggle }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
    console.log(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(`hello ${username} from handle submit`);
    const data = await login(username, password);
    await setUser(data.user);
  };

  return (
    <div className="login-wrapper">
      <img className="logo" src="src\assets\instagran.png" alt="home logo" />
      <h1 className="logotxt">Instagran</h1>
      <form className="my-form" onSubmit={handleSubmit}>
        <input
          placeholder="username"
          onChange={(e) => changeHandler(e, setUsername, username)}
        />
        <input
          placeholder="password"
          onChange={(e) => changeHandler(e, setPassword, password)}
        />
        <button className="noto-sans-norm regT" type="submit">
          Log in
        </button>
      </form>
      <div className="forgpass noto-sans-norm smllT">
        Forgotten your password?
      </div>
      <p className="signin noto-sans-bold regT" onClick={handleToggle}>
        Sign up
      </p>
    </div>
  );
};

export default Login;
