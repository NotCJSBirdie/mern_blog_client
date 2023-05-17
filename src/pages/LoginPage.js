import React from "react";
import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  const loginFunc = async (ev) => {
    ev.preventDefault();

    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        alert("Login Successful");
        setRedirect(true);
      });
    } else {
      alert("Login Failed");
    }
  };

  if (redirect === true) {
    return <Navigate to={"/"} />;
  }

  return (
    <form action="" className="login" onSubmit={loginFunc}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => {
          setUsername(ev.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(ev) => {
          setPassword(ev.target.value);
        }}
      ></input>

      <button>Login</button>
    </form>
  );
};

export default LoginPage;
