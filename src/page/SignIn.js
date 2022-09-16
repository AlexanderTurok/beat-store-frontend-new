
import { useState } from "react";
import "../style/css/sign-in/signin.css";

function LogIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmail = (e) => {
    setEmail(e)
  }

  const handlePassword = (e) => {
    setPassword(e)
  }

  return (
    <form className="signin">
      <input 
        className="signin-input" 
        placeholder="Type your email" 
        onChange={handleEmail} />
      <input 
        className="signin-input" 
        placeholder="Type your password" 
        onChange={handlePassword} />
      <button className="signin-submit" type="submit">
        SIGN IN
      </button>
    </form>
  )
} 

export default LogIn