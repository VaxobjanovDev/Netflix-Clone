import "./Login.css";
import { Logo } from "../../svg/AllSvg";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../authcontext/Authcontext";
import { loginAPI } from "../../authcontext/ApiCall";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginAPI({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <Logo width="150" height="100" />
          <Link to="/register">
            <button className="register-button">Sign Up</button>
          </Link>
        </div>
      </div>
      <div className="container">
        <form className="form">
          <h1>Log In</h1>
          <input
            type="email"
            placeholder="Email address or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButtons" onClick={handleClick}>
            Log In
          </button>
          <span>
            New to Netflix?{" "}
            <Link className="link" to="/register">
              <b className="button-sign">Sign up now.</b>
            </Link>
          </span>
          <small>
            This page is protected bu Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
