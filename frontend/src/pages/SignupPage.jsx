import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext"; // Import useAuth
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios to make HTTP requests

export const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth(); // Destructure signup from the auth context
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);

      // After successful signup, send a POST request to your backend
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/users`, {
        email: emailRef.current.value,
        // Include any other user data you want to send to the backend
      });

      if (response.status === 201) {
        console.log("User created successfully in the backend");
      } else {
        console.error("Failed to create user in the backend");
      }

      navigate("/dashboard");
    } catch (error) {
      console.error(error); // Log the error to the console
      setError(error.message); // Display the error message to the user
    }

    setLoading(false);
  }

  return (
    <div className="container">
      <div className="signup-modern">
        <h1 className="center-text">Sign Up</h1>
        {error && <div className="center-text">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            ref={emailRef}
            required
            className="text-box"
            placeholder="Email"
          />
          <input
            type="password"
            ref={passwordRef}
            required
            className="text-box"
            placeholder="Password"
          />
          <input
            type="password"
            ref={passwordConfirmRef}
            required
            className="text-box"
            placeholder="Confirm Password"
          />
          <button disabled={loading} className="button" type="submit">
            Sign Up
          </button>
        </form>
        <p className="center-text mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};
