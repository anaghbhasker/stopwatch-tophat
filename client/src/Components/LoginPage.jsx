import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const navigate=useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault()
    let obj={
      email:email,
      password:password
    }
    axios.post('http://localhost:4000/login',obj).then((response)=>{
      if (response.data.status==="success") {
        localStorage.setItem('useremail',response.data.userEmail)
        navigate('/')
      } else {
        console.log(response.data);
      }
    }).catch((error)=>{
      console.log(error.message);
    })

  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter email"
            name="uname"
            required
          />
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <button type="submit">Login</button>
        </div>

        {/* <div class="container">
          <button type="button" className="cancelBtn">Cancel</button>
        </div> */}
      </form>
    </div>
  );
}

export default LoginPage;
