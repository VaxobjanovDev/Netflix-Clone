import './Register.css'
import { Logo } from "../../svg/AllSvg";
import { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = ()=>{

	const navigate = useNavigate()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [username, setUsername] = useState("")


	const emailRef = useRef()
	const userRef = useRef()
	const passRef = useRef()


	const handleClick = ()=>{
		setEmail(emailRef.current.value)
	}

	const handleClickPass = async(e)=>{
		e.preventDefault()
		setUsername(userRef.current.value)
		setPassword(passRef.current.value)
		try{
			await axios.post("auth/register",{email,username,password})
			navigate("/login")
		}catch(err){
			console.log(err)
		}
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
						</div>):(<form className="form">
						<input type="text" placeholder="Username" ref={userRef}/>
						<input type="password" placeholder="password" ref={passRef}/>
						<button onClick={handleClickPass} className="registerButton">Start</button>
						</form>)}
					</div>
					
        </div>
    )
}

export default Register