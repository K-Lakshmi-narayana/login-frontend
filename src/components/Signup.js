import { useState } from "react";
import axios from "axios";

import "../App.css";

function Signup() {
    const [data, setData] = useState({username: "", email: "", password: ""});
    const [msg, setMsg] = useState("");
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post("https://login-backend-a8vb.onrender.com/api/auth/signup", data);
            setMsg(res.data.msg);
        } catch (err){
            setMsg(err.response.data.msg);
        }
    };

    return (
    <div className="page-div">
    <div className="form-div">
      <h2 className="login-form-heading">Signup</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label" for="username">Username:</label>
        <input className="login-input" name="username" placeholder="Username" onChange={handleChange} required />
        <label className="login-label" for="email">Email:</label>
        <input className="login-input" name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <label className="login-label" for="password">Password:</label>
        <input className="login-input" name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button className="login-btn" type="submit">Signup</button>
        <a className="link" href="/login">Already having an account! Click me and Login :-{")"}</a>
        <p className="msg">!--{msg}--!</p>
      </form>
    </div>
    </div>
  );

}

export default Signup;
