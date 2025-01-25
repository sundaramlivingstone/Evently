import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MailIcon, LockClosedIcon, UserIcon } from "@heroicons/react/solid";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const { user, token } = await response.json();

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        navigate("/dashboard");
      } else {
        alert("Invalid login credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: "guest",
        username: "Guest",
        email: "guest@example.com",
      })
    );
    localStorage.setItem("token", "guest-token");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-brand-background flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
              required
            />
            <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
              required
            />
            <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <button
            type="submit"
            className="w-full bg-brand-primary text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <button
          onClick={handleGuestLogin}
          className="w-full bg-brand-secondary text-white py-2 rounded-lg hover:bg-green-700 transition-colors mt-4"
        >
          Guest Login
        </button>
        <div className="text-center mt-4">
          <a href="/register" className="text-brand-primary hover:underline">
            Need an account? Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
