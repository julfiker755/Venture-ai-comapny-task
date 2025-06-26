import React from "react";

export default function Button({ children, outline=true }) {
  return (
    <button
      className={`py-2 px-4 ${
        outline
          ? "bg-gradient-to-r cursor-pointer from-[#3b82f6] to-[#2563eb] text-white rounded-full hover:translate-y-[-3px] hover:shadow-[0_8px_20px_rgba(37,99,235,0.5)] transition-all shadow-[0_5px_15px_rgba(37,99,235,0.4)] relative overflow-hidden z-1 text-center"
          : "bg-transparent border-2 border-[#3b82f6] text-white  rounded-full hover:bg-[rgba(59,130,246,0.1)] transition-colors shadow-[0_5px_15px_rgba(37,99,235,0.2)] inline-block text-center"
      }`}
    >
      {children}
    </button>
  );
}
