import React from "react";
import { cn } from "../../../lib/utils";

export default function Title({className, title,titleStyle, text,textStyle }) {
  return (
    <div className={className}>
      <h2 class={cn("text-[2.074rem] font-bold mb-1 text-[#60a5fa] text-center tracking-tight",titleStyle)}>
        {title}
      </h2>
      {text && (
        <p className={cn("max-w-xl mx-auto text-center text-gray-200",textStyle)}>{text}</p>
      )}
    </div>
  );
}
