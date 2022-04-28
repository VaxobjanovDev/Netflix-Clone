import "./Register.css";
import { Logo } from "../../svg/AllSvg";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authcontext/Authcontext";
import { registerAPI } from "../../authcontext/ApiCall";
const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { dispatch } = useContext(AuthContext);

  const emailRef = useRef();

  useEffect(() => {}, [dispatch]);
  const handleClick = () => {
    setEmail(emailRef.current.value);
  };

  const handleClickPass = async () => {
    try {
      registerAPI({ username, email, password }, dispatch);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <Logo width="150" height="100" />
          <Link to="/login">
            <button className="loginButton">Sign In</button>
          </Link>
        </div>
      </div>
      <div className="container">
        {!email ? (
          <div className="registration">
            <div className="register-title">
              <h1>Unlimited movies, TV shows, and more</h1>
              <h2>Watch anywhere. Cancel anytime</h2>
              <p>
                Ready to watch? Enter your email to create or restart your
                membership
              </p>
            </div>
            <div className="input">
              <input type="email" placeholder="Email address" ref={emailRef} />
              <button onClick={handleClick} className="registerButton">
                Get Started
              </button>
            </div>
          </div>
        ) : (
          <form className="form">
			  <div className="title">
				  <h3>Enter Username and Password.</h3>
			  </div>
            <input
				id="username"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleClickPass} className="start-button">
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
