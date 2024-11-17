// AuthPage.js
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const AuthPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState("");

    const handleAuth = async (event) => {
        event.preventDefault();
        setError("");
        try {
            if (isSignUp) {
                await createUserWithEmailAndPassword(auth, email, password);
                alert("Account created successfully! You are now logged in.");
            } else {
                await signInWithEmailAndPassword(auth, email, password);
                alert("Logged in successfully!");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div class="space bg-smoke2">
            <div className="container">
                {/* <h2 className="text-center">{isSignUp ? "Sign Up" : "Log In"}</h2> */}
                <form onSubmit={handleAuth} className="sign-in-form">
                    <div class="form-logo">
                        <img src="/assets/img/logo-small.svg" alt="Carva" />
                    </div>
                    <h3 className="form-title">Welcome back!</h3>
                    <p className="form-text">Sign in to your account</p>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>
                    {error && <p className="form-btn text-danger">{error}</p>}
                    <button type="submit" className="btn btn-primary w-100">
                        {isSignUp ? "Sign Up" : "Log In"}
                    </button>
                </form>
                <div className="text-center">
                    <button
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="btn btn-link"
                    >
                        {isSignUp ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
