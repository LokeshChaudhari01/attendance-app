import { useLogout } from "../hooks/useLogout";

function Navbar() {
  const logout = useLogout();

  return (
    <div className="flex justify-center">
      <button onClick={logout} className="w-20 bg-amber-300 h-10">
        Logout
      </button>
    </div>
  );
}

export default Navbar;
    