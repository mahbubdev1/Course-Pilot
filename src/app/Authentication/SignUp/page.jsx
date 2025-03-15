"use client";
import Lottie from "lottie-react";
import signinAnimation from "../../../../public/animation/register.json"; // Correct path to your animation
import Link from "next/link";
import { signIn } from "next-auth/react"; // Import NextAuth signIn function
import { useState } from "react";
import LoginButton from "@/app/auth/LoginButton";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      // Call the backend API to register the user
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Failed to register");
      }

      // After successful registration, authenticate the user using NextAuth
      const signInRes = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (signInRes?.error) {
        setError("Failed to sign in");
      } else {
        // Redirect the user after successful login
        window.location.href = "/dashboard"; // Adjust the redirect to your desired page
      }
    } catch (error) {
      setError("Error occurred during registration.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-20">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full flex flex-col md:flex-row">
        {/* Lottie Animation */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Lottie
            animationData={signinAnimation}
            loop={true}
            className="w-72 h-72"
          />
        </div>

        {/* Sign In Form */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Create Your Account
          </h2>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Register
            </button>
          </form>

          {/* Sign In with Third-Party Providers */}
          <div className="mt-6 space-y-4">
            <LoginButton />
          </div>

          <p className="text-gray-600 mt-4 text-center">
            Already have an account?{" "}
            <Link
              href="/Authentication/Login"
              className="text-blue-500 hover:underline"
            >
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
