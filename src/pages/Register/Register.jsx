import './Register.css'
import { Logo } from "../../svg/AllSvg";
import { useRef, useState } from 'react';
const Register = ()=>{
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const emailRef = useRef()
	const passRef = useRef()


	const handleClick = ()=>{
		setEmail(emailRef.current.value)
	}

	const handleClickPass = ()=>{
		setPassword(passRef.current.value)
	}
	
    return(
        <div className="register">
          <div className="top">
						<div className="wrapper">
							<Logo width="150" height="100"/>
							<button className="loginButton">Sign In</button>
						</div>
					</div>  
					<div className="container">
						<h1>Unlimited movies, TV shows, and more</h1>
						<h2>Watch anywhere. Cancel anytime</h2>
						<p>Ready to watch? Enter your email to create or restart your membership</p>
						{!email?(<div className="input">
						<input type="email" placeholder="email address" ref={emailRef}/>
						<button onClick={handleClick} className="registerButton">Get Started</button>
						</div>):(<form className="input">
						<input type="password" placeholder="password" ref={passRef}/>
						<button onClick={handleClickPass} className="registerButton">Start</button>
						</form>)}
					</div>
					
        </div>
    )
}

export default Register