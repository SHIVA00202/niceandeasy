import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👁️ icons

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // toggle state

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

          {/* Password Input with Eye Toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 bg-neutral-950 border border-neutral-800 rounded-md text-sm placeholder-gray-500 text-gray-100 focus:outline-none focus:border-orange-500 transition pr-10"
            />

            <span
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer hover:text-orange-400 transition"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
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
              className="text-orange-400 hover:text-orange-300 text-sm transition"
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
