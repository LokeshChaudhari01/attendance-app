import { useState } from "react";
import { login } from "../services/authApi";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [rollNumber, setRoll] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await login({ rollNumber, password });
      setUser(res.user);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="bg-slate-50 px-4 pt-6 flex justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-slate-800 mb-6">
          Welcome back 
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-slate-600 mb-1">
              Roll Number
            </label>
            <input
              placeholder="e.g. bt24cse066"
              value={rollNumber}
              onChange={(e) => setRoll(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-600 mb-1">
              Password
            </label>
            <input
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg font-medium transition">
            Login
          </button>
        </form>

        <div className="flex justify-center gap-1 mt-6 text-sm text-slate-600">
          <span>Don't have an account?</span>
          <Link
            to="/signup"
            className="text-emerald-600 hover:text-emerald-700 font-medium underline underline-offset-2"
          >
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
}
