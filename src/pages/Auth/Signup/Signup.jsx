import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useNavigate } from "react-router";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    

    setLoading(true);

    createUser(email, password)
      .then((res) => {
        // console.log("User created:", res.email, res);
        if(res.uid){
          
          window.alert("User created successfully ! ", res.email);
          navigate("/login")
          
        }

        // Reset form
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("Email already in use.");
        } else if (error.code === "auth/weak-password") {
          setError("Password must be at least 6 characters.");
        } else {
          setError(error.message);
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* LEFT: Illustration / Info */}
        <div className="hidden md:flex flex-col items-center justify-center p-10 bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 text-white">
          <div className="w-full max-w-xs text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold">Join us today!</h2>
              <p className="mt-2 text-sm text-green-100">
                Create an account to unlock all features and stay connected.
              </p>
            </div>

            <div className="mt-6">
              <svg
                viewBox="0 0 400 260"
                className="w-full h-40 object-cover opacity-90"
                preserveAspectRatio="xMidYMid slice"
                role="img"
                aria-hidden
              >
                <rect
                  width="400"
                  height="260"
                  rx="12"
                  fill="rgba(255,255,255,0.06)"
                />
                <g transform="translate(40,40)">
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="rgba(255,255,255,0.12)"
                  />
                  <rect
                    x="100"
                    y="20"
                    width="140"
                    height="90"
                    rx="8"
                    fill="rgba(255,255,255,0.08)"
                  />
                  <rect
                    x="20"
                    y="120"
                    width="320"
                    height="20"
                    rx="8"
                    fill="rgba(255,255,255,0.06)"
                  />
                </g>
              </svg>
            </div>

            <div className="mt-8 text-xs text-green-100/90">
              <p className="mb-2">
                Already have an account?{" "}
                <a href="#" className="underline">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="flex items-center justify-center p-8 sm:p-12">
          <div className="w-full max-w-md">
            <h3 className="text-2xl font-semibold text-gray-900">
              Create your account
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Fill in the form below to register.
            </p>

            <form className="mt-6 space-y-6" onSubmit={handleSubmit} noValidate>
              {error && (
                <div className="rounded-md bg-red-50 p-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex items-center justify-center py-2 px-4 rounded-lg shadow-sm text-sm font-medium text-white ${
                    loading
                      ? "bg-green-400 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </div>

              <p className="text-center text-xs text-gray-400 mt-4">
                By creating an account, you agree to our{" "}
                <a href="#" className="underline">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
