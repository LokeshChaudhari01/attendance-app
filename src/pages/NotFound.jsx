import { Link } from "react-router-dom";

export default function NotFound({ message }) {
  return (
    <div className="bg-slate-50 px-4 pt-10 flex justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-semibold text-slate-800 mb-2">404</h1>
        <p className="text-slate-600 mb-6">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition"
        >
          {message || "Go back home"}
        </Link>
      </div>
    </div>
  );
}
