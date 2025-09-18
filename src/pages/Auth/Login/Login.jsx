import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // TODO: replace with real auth call (e.g. fetch / axios)
    console.log({ email, password, remember });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT: Illustration / Brand */}
        <div className="hidden md:flex flex-col items-center justify-center p-10 bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 text-white">
          <div className="w-full max-w-xs text-center">
            <div className="mb-6">
              {/* Small logo circle */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold">Welcome back!</h2>
              <p className="mt-2 text-sm text-indigo-100">Sign in to access your dashboard and manage your account.</p>
            </div>

            {/* Illustration */}
            <div className="mt-6">
              <svg viewBox="0 0 400 260" className="w-full h-40 object-cover opacity-90" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden>
                <rect width="400" height="260" rx="12" fill="rgba(255,255,255,0.06)" />
                <g transform="translate(40,40)">
                  <circle cx="40" cy="40" r="28" fill="rgba(255,255,255,0.12)" />
                  <rect x="100" y="20" width="140" height="90" rx="8" fill="rgba(255,255,255,0.08)" />
                  <rect x="20" y="120" width="320" height="20" rx="8" fill="rgba(255,255,255,0.06)" />
                </g>
              </svg>
            </div>

            <div className="mt-8 text-xs text-indigo-100/90">
              <p className="mb-2">New here? <a href="#" className="underline">Create an account</a></p>
              <p className="opacity-90">Or continue with a social account below.</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="flex items-center justify-center p-8 sm:p-12">
          <div className="w-full max-w-md">
            <h3 className="text-2xl font-semibold text-gray-900">Sign in to your account</h3>
            <p className="mt-2 text-sm text-gray-500">Enter your credentials to continue.</p>

            <form className="mt-6 space-y-6" onSubmit={handleSubmit} noValidate>

              {error && (
                <div className="rounded-md bg-red-50 p-3 text-sm text-red-700">{error}</div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    aria-required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-gray-700">Remember me</span>
                </label>

                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:underline">Forgot your password?</a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button type="button" className="w-full inline-flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg shadow-sm text-sm bg-white hover:bg-gray-50">
                  Google
                </button>
                <button type="button" className="w-full inline-flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg shadow-sm text-sm bg-white hover:bg-gray-50">
                  GitHub
                </button>
              </div>

              <p className="text-center text-xs text-gray-400 mt-4">By continuing, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.</p>
            </form>

          </div>
        </div>

      </div>
    </div>
  );
}
