import React from "react";

function Button({ value, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="px-4 py-1 bg-zinc-200 text-zinc-900 text-[15px] font-medium border-none outline-none rounded-sm"
      >
        {value}
      </button>
    </div>
  );
}

export default Button;
