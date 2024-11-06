import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 
import './Login.css';


const SignUp = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const handleContactChange = (e) => {
        const value = e.target.value;
        if (/[^0-9]/.test(value)) {
            setError("Contact number must contain only digits.");
        } else {
            setError("");  
            setContact(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(""); 

        if (!userName || !email || !contact || !password || !confirmPassword) {
            setError("All fields are required.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        const user = { email, password, contact };
        localStorage.setItem("user", JSON.stringify(user));

        console.log("User registered:", user);
        
        navigate("/login");
    };

    return (
        <div className="main-login">
            <h3>Logo</h3>
            <div className="container-login">
                <h1>Sign Up</h1>
                <form className="logins" onSubmit={handleSubmit}>
                <input
                        type="text"
                        placeholder="Username :"
                        name="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Email :"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Contact :"
                        name="contact"
                        value={contact}
                        onChange={handleContactChange}
                    />
                    <input
                        type="password"
                        placeholder="Password :"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password :"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {error && <div className="error">{error}</div>}
                    <div className="bust">
                        <button type="submit">Sign Up</button>
                        <Link to="/login">Already have an account? Login</Link> 
                    </div>
                </form>
                <div className="terms">
                    <h5>By continuing, you agree to our Terms of Use and Privacy Policy</h5>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
