import React from "react";

export default function Title({ title, text }) {
  return (
    <div>
      <h2 class="text-[2.074rem] font-bold mb-1 text-[#60a5fa] text-center tracking-tight">
        {title}
      </h2>
      {text && (
        <p className="max-w-xl mx-auto text-center text-gray-200">{text}</p>
      )}
    </div>
  );
}
