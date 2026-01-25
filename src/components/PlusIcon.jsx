import { GrAdd, GrFormSubtract } from "react-icons/gr";

function PlusIcon({ onClick, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`ml-2 rounded p-1 transition ${
        disabled
          ? "cursor-not-allowed opacity-50"
          : "cursor-pointer hover:bg-slate-200"
      }`}
    >
      <GrAdd />
    </button>
  );
}

export default PlusIcon;
