import { useRef } from "react";
import "./login.css";
import{ AuthContext} from "../../context/AuthContext"
import Spinner from "../../components/Spinner";
import { CircularProgress} from "@mui/material/CircularProgress"
import { loginCall } from "../../apiCalls";
import { useContext } from "react";
export default function Login() {


  const email = useRef()
  const password = useRef()

  const {user, isFetching, error, dispatch} = useContext(AuthContext)
  

  const handleClick = (e) =>{
    e.preventDefault()
    console.log(email.current.value)
    const userCredential = {
      email: email.current.value, password: password.current.value
    }
   

    loginCall(
      userCredential,
      dispatch
    );

  }

  console.log(user)
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">walesocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Email" type="email" ref={email} className="loginInput" />
            <input placeholder="Password" 
            required
            minLength={5}
            ref={password} type="password" className="loginInput" />
            <button
            disabled={isFetching}
            className="loginButton">{isFetching ? 
            "Loading"
            : "Log In"}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? "Loading" : "Create a New Account"} 
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}