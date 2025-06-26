import React from "react";

const footerLinks = [
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Policy() {
  return (
    <div className="bg-[#1e293b] py-3 px-10 border-t border-[rgba(96,165,250,0.2)]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <nav className="flex flex-wrap gap-6 justify-center md:justify-start">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative text-[#94a3b8] text-sm font-medium tracking-normal transition-colors duration-300 hover:text-white"
            >
              {link.label}
              <span className="absolute w-0 h-px bg-[#60a5fa] bottom-[-4px] left-0 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <p className="text-[#64748b] text-sm text-center md:text-right">
          © 2025 Clin Technologies. All rights reserved.
        </p>
      </div>
    </div>
  );
}
