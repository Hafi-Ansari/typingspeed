import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  }

  return (
    <div className="container">
      <div className="modern">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="text-box"
            placeholder="Email"
            required
            ref={emailRef}
          />
          <input
            type="password"
            className="text-box"
            placeholder="Password"
            required
            ref={passwordRef}
          />
          <button type="submit" className="button" disabled={loading}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
