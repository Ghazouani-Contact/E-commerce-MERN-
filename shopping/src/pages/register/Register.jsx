//import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"; 
import "./register.css";
import { publicRequest } from "../../requestMethods";
import styled from "styled-components";
import { mobile } from "../../responsive";
export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await publicRequest.post("/auth/register", {
        username,
        email,
        phone,
        password,
      });
      toast('Inscription avec succès :)', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      res.data && window.setTimeout(function () {
        window.location.replace("/login");
      }, 3000);
    } catch (err) {
      toast.error("Quelque chose s'est mal passé!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setError(true);
    }
  };

  const MenuItem = styled.div`
float:  none;
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
   display: inline-block;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
    &:hover {
     color: #00FFFF	;
}
`;

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Phone</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your Number..."
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
        <div className="loginbtn">
          <Link className="link" to="/login">
          <MenuItem>Login</MenuItem>
          </Link>
        </div>
      {error && <span style={{ color: "red", marginTop: "10px" }}>Quelque chose s'est mal passé!</span>}
    </div>
  );
}