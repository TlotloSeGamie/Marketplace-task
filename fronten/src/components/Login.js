import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 
import { useDispatch } from 'react-redux'; 
import { loginStart, loginSuccess, loginFailure } from '../redux/authSlice'; // Import actions
import { loginUser } from "../redux/userSlice";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false); 
    const [error, setError] = useState("");
    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
    
        if (!email || !password) {
            setError("Both fields are required.");
            return;
        }
    
        dispatch(loginStart());
    
        try {
            const userData = await loginUser(email, password); // Get user data from login function
            dispatch(loginSuccess(userData)); // Dispatch success action with user data
            navigate("/");
        } catch (error) {
            dispatch(loginFailure(error.message));
            setError(error.message);
        }
    };

    return (
        <div className="main-login">
            <h3>Logo</h3>
            <div className="container-login">
                <h1>Sign In</h1>
                <form className="logins" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email :"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="password-field">
                        <input
                            type={passwordVisible ? 'text' : 'password'} // Toggle between password and text type
                            placeholder="Password :"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button 
                            type="button" 
                            onClick={() => setPasswordVisible(!passwordVisible)} // Toggle visibility on click
                            className="eye-icon"
                        >
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />} {/* Eye icons */}
                        </button>
                    </div>
                    {error && <div className="error">{error}</div>}
                    <div className="pass">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                    <div className="bust">
                        <button type="submit">Login</button>
                        <Link to="/signup">Don't have an account? Sign Up</Link>
                    </div>
                </form>
                <div className="terms">
                    <h5>By continuing, you agree to our Terms of Use and Privacy Policy</h5>
                </div>
            </div>
        </div>
    );
}

export default Login;
