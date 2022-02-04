import './Login.css'
import { Logo } from "../../svg/AllSvg";

const Login = ()=>{
    return(
        <div className="login">
          <div className="top">
						<div className="wrapper">
							<Logo width="150" height="100"/>
						</div>
					</div>  
					<div className="container">
						<form className="form">
							<h1>Sign In</h1>
							<input type="email" placeholder="Email address or phone number"/>
							<input type="password" placeholder="Password"/>
							<button className="loginButtons">
								Sign In
							</button>
							<span>New to Netflix? <b>Sign up now.</b></span>
							<small>
								This page is protected bu Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b> 
							</small>
						</form>
					</div>
        </div>
    )
}

export default Login