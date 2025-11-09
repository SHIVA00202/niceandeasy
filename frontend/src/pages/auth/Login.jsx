import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white px-4">
      <div className="w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-xl p-8 shadow-md animate-fade">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-center text-orange-500 mb-1">
          Nice <span className="text-gray-100">&</span> Easy
        </h1>
        <p className="text-center text-gray-400 text-sm mb-8">
          Welcome back, log in to continue
        </p>

        {/* Form */}
        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 bg-neutral-950 border border-neutral-800 rounded-md text-sm placeholder-gray-500 text-gray-100 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 bg-neutral-950 border border-neutral-800 rounded-md text-sm placeholder-gray-500 text-gray-100 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-black font-medium rounded-md hover:bg-orange-600 transition"
          >
            Login
          </button>
        </form>

        {/* Links */}
        <div className="text-center mt-6 space-y-2">
          <p className="text-gray-500 text-sm">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-orange-500 hover:text-orange-400 transition"
            >
              Register
            </Link>
          </p>
          <p>
            <Link
              to="/forgot"
              className="text-gray-400 text-orange-400 text-sm transition"
            >
              Forgot password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
