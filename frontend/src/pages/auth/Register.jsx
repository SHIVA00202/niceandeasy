import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    // Registration logic here
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
