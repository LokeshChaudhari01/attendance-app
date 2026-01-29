import { useNavigate } from "react-router-dom";
import { logout } from "../services/apiData";
import { useAuth } from "./useAuth";

export function useLogout() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout(); // backend clears cookie
      setUser(null); // clear frontend auth state
      navigate("/login", { replace: true }); // redirect like real apps
    } catch (err) {
      console.error("Logout failed:", err.message);
      alert("Logout failed:", err.message);
    }
  }

  return handleLogout;
}
