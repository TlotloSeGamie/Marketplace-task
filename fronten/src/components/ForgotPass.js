import { useState } from "react";
import './Login.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(`Password reset link sent to ${email}`);
        setEmail("");
    };

    return (
        <div className="main-login">
            <h3>Logo</h3>
            <div className="container-login">
                <h1>Forgot Password</h1>
                <form className="logins" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email :"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">Send Reset Link</button>
                </form>
                {message && <div className="success">{message}</div>}
            </div>
        </div>
    );
}

export default ForgotPassword;
