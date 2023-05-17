import React from "react";
import { useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerFunc = async (ev) => {
    ev.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert("Registration Succesful");
    } else {
      alert("Registration Failed");
    }
  };

  return (
    <form action="" className="register" onSubmit={registerFunc}>
      <h1>Register</h1>
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

      <button>Register</button>
    </form>
  );
};

export default RegisterPage;
