import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import SplitText from "./components/SplitText";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import Navbar from "./components/NAvbar";

import { AuthProvider } from "./context/AuthContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          {/* Header */}
          <header className="mx-4 my-6 rounded-xl bg-emerald-600 py-4 text-center text-2xl sm:text-3xl font-semibold text-slate-50 shadow-sm">
            <SplitText
              text="Attendance Tracker"
              className="text-5xl font-normal text-center"
              delay={50}
              duration={0.4}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </header>

          {/* Routes */}
          <main className="min-h-screen bg-slate-50">
            <Routes>
              <Route
                index
                path="/"
                element={
                  <ProtectedRoute>
                    <Main />
                  </ProtectedRoute>
                }
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </BrowserRouter>
      </AuthProvider>

    </QueryClientProvider>
  );
}

export default App;
