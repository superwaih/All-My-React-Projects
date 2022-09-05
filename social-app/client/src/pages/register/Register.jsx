import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";


export default function Register() {
  const email = useRef()
  const password = useRef()
  const username = useRef()
  const passwordAgain = useRef()
  const navigate = useNavigate()




  // const {user, isFetching, error, dispatch} = useContext(AuthContext)
  

  const handleClick = async (e) =>{
    e.preventDefault()
    if(passwordAgain.current.value !== password.current.value){
      passwordAgain.current.setCustomValidity("Passwords don't match")
    }else{
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try {
         await axios.post("/auth/register", user)
         navigate.push("/login")
        
      } catch (error) {
        console.log(error)
      }

      
    }

   
   

    // loginCall(
    //   userCredential,
    //   dispatch
    // );

  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form onSubmit={handleClick} className="loginBox">
          <input 
          ref={username}
          required
          placeholder="Username" className="loginInput" />
            <input 
            ref={email}
            required
            placeholder="Email" className="loginInput" />
            <input 
            ref={password}
            type="password"
            minLength={6}

            placeholder="Password" className="loginInput" />
            <input 
            required
            ref={passwordAgain}
            type="password"
            minLength={6}

            placeholder="Password Again" className="loginInput" />
            <button type="submit" className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}