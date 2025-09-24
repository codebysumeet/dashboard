// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./login.css";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("✅ Logged in successfully!");
      navigate("/login/dashboard");
    } catch (error) {
      alert("❌ Failed to login: " + error.message);
    }
  };

  return (
    <div
      className="min-h-screen"
    >
      {/* Transparent Glass Box */}
      <div className="bg-white border-white/30 shadow-xl rounded-2xl p-10 w-full max-w-md">
        {/* Title */}
        <h1 className="text-4xl font-bold text-green-900 text-center mb-2">
          🌱 Agri Portal
        </h1>
        <p className="text-green-800 text-center mb-8">
          Connecting Farmers with Technology
        </p>

        {/* Form */}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <input type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-500"
          /></div>

          <div>
            <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="px-4 py-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-500"
          /></div>

          <button
            type="submit"
            className="py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-lg transition-transform transform hover:scale-105 shadow-md"
          >
            Login
          </button>
        </form>

        {/* Sign Up link */}
        <p className="mt-6 text-green-900 text-center">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-green-700 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
