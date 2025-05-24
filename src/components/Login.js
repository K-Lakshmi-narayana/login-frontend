import { useState } from "react";
import axios from "axios";

import "../App.css";

function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [msg, setMsg] = useState("");
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", form);
            setMsg("Login successful!");
            console.log(res.data);
        } catch (err) {
            setMsg(err.response.data.msg);
        }
    };

    return (
        <div className="page-div">
            <div className="form-div">
                <h2 className="login-form-heading">Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label className="login-label" for="email">Email:</label>
                    <input className="login-input" name="email" type="email" placeholder="Email" onChange={handleChange} required />
                    <label className="login-label" for="password">Password:</label>
                    <input className="login-input" name="password" type="password" placeholder="Password" onChange={handleChange} required />
                    <button className="login-btn" type="submit">Login</button>
                    <a className="link" href="/">Do not having an account! Click me to SignUp ;-{")"}</a>
                    <p className="msg">!--{msg}--!</p>
                </form>
            </div>
        </div>
    );
}

export default Login;
