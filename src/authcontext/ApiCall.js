import axios from "axios"
import { loginFailure, loginStart, loginSucces, registerFailure, registerStart, registerSucces } from "./AuthActions"

export const registerAPI = async(user1, dispatch)=>{
	dispatch(registerStart())
	  try{
		  const res = await axios.post("auth/register", user1)
		  dispatch(registerSucces(res.data))
	  }catch(e){
		  dispatch(registerFailure())
	  }
  }

export const loginAPI = async(user, dispatch)=>{
  dispatch(loginStart())
	try{
		const res = await axios.post("auth/login", user)
		dispatch(loginSucces(res.data))
	}catch(e){
		dispatch(loginFailure())
	}
}