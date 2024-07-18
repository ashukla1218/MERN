import { useState } from "react";
import useLogin from "../hooks/useLogin";
import {Link} from 'react-router-dom'

const Login = () => {
    const { login } = useLogin();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validate = () => {
        const validate1 = email.length > 4;
        const validate2 = password.length >= 8;
        if (validate1 && validate2) {
            login({ email, password });
        } else if (!validate1) {
            alert("Incorrect Email");
        } else {
            alert("Password must be greater than 7 characters");
        }
    };

    return (
        <div className="sign">
            <input 
                type="email"
                placeholder="Enter your email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password"
                placeholder="Enter your password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={validate}>Login</button>
            <p>Don't have an account? <Link to="/signup" className="link">Sign Up</Link> </p>
        </div>
    );
};

export default Login;
