import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
            const result = await axios.post(`http://localhost:8000/api/user/register`, {
                name, email, password
            }, { withCredentials: true })
           
            console.log(result)
            


        } catch (error) {
            console.log(error)
            
        }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white px-4">
      <div className="w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-xl p-8 shadow-md">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-center text-orange-500 mb-1">
          Nice <span className="text-gray-100">&</span> Easy
        </h1>
        <p className="text-center text-gray-400 text-sm mb-8">
          Create your account
        </p>

        {/* Form */}
        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 bg-neutral-950 border border-neutral-800 rounded-md text-sm placeholder-gray-500 text-gray-100 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

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

          {/* Password with Eye Icon */}
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
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 hover:text-orange-400 transition"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
