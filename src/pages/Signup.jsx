import { useState } from "react";
import { signup } from "../services/authApi";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [rollNumber, setRoll] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await signup({ rollNumber, password });
      alert("Signup success. Now login.");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="bg-slate-50 px-4 pt-6 flex justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-slate-800 mb-6">
          Create your account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-slate-600 mb-1">
              Roll Number
            </label>
            <input
              placeholder="e.g. bt24cse214"
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
              placeholder="Create a password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg font-medium transition">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
