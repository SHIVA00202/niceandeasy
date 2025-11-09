import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    // Add your forgot password logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white px-4">
      <div className="w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-xl p-8 shadow-md animate-fade">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-center text-orange-500 mb-1">
          Nice <span className="text-gray-100">&</span> Easy
        </h1>
        <p className="text-center text-gray-400 text-sm mb-8">
          Reset your password
        </p>

        {/* Form */}
        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <input
              placeholder="Enter your email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 bg-neutral-950 border border-neutral-800 rounded-md text-sm placeholder-gray-500 text-gray-100 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-black font-medium rounded-md hover:bg-orange-600 transition"
          >
            Send Reset Link
          </button>
        </form>

        {/* Links */}
       
      </div>
    </div>
  );
};

export default ForgotPassword;
