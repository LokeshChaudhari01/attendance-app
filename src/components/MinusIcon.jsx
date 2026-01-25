import { GrFormSubtract } from "react-icons/gr";

function MinusIcon({ onClick, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`ml-1 rounded p-1 transition ${
        disabled
          ? "cursor-not-allowed opacity-50"
          : "cursor-pointer hover:bg-slate-200"
      }`}
    >
      <GrFormSubtract />
    </button>
  );
}

export default MinusIcon;
