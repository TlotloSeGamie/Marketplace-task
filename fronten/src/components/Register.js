import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerStart, registerSuccess, registerFailure } from '../redux/userSlice';
import { registerUser } from '../redux/userSlice';  
import './Login.css';

const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false); 
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); 
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleContactChange = (e) => {
        const value = e.target.value;
        if (/[^0-9]/.test(value)) {
            setError('Contact number must contain only digits.');
        } else {
            setError('');
            setContact(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!userName || !email || !contact || !password || !confirmPassword) {
            setError('All fields are required.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
    
        dispatch(registerStart());  

    try {
        await dispatch(registerUser(email, password, userName, contact));

        navigate('/login');  
    } catch (error) {
        dispatch(registerFailure(error.message)); 
    }
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
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Email :"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Contact :"
                        value={contact}
                        onChange={handleContactChange}
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
                    <div className="password-field">
                        <input
                            type={confirmPasswordVisible ? 'text' : 'password'} // Toggle between password and text type
                            placeholder="Confirm Password :"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button 
                            type="button" 
                            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)} // Toggle visibility on click
                            className="eye-icon"
                        >
                            {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />} {/* Eye icons */}
                        </button>
                    </div>
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
};

export default SignUp;
