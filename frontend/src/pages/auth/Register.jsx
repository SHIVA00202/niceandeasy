import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handleGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      await axios.post(
        `http://localhost:8000/api/user/google-auth`,
        {
          name: result.user.displayName,
          email: result.user.email,
        },
        { withCredentials: true }
      );
      navigate("/");
    } catch (error) {
      console.error("Google signup error:", error);
      
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white px-4">
      <div className="w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-xl p-8 shadow-md">
        <h1 className="text-2xl font-semibold text-center text-orange-500 mb-1">
          Nice <span className="text-gray-100">&</span> Easy
        </h1>
        <p className="text-center text-gray-400 text-sm mb-8">
          Create your account
        </p>

        <form onSubmit={submitHandler} className="space-y-5">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 bg-neutral-950 border border-neutral-800 rounded-md text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 bg-neutral-950 border border-neutral-800 rounded-md text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 bg-neutral-950 border border-neutral-800 rounded-md text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition pr-10"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer hover:text-orange-400 transition"
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

        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 hover:text-orange-400 transition"
          >
            Login
          </Link>
        </p>

        <button
          onClick={handleGoogleAuth}
          className="w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 border-gray-400 hover:bg-gray-100 text-black transition"
        >
          <FcGoogle size={20} />
          <span>Sign up with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
