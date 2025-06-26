import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../common/logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "about", label: "About" },
    { href: "solutions", label: "Our Solutions" },
    { href: "technology", label: "Technology" },
    { href: "benefits", label: "Benefits" },
    { href: "case-use", label: "Case Use" },
  ];

  return (
    <nav className="bg-nav sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="size-[34px] relative">
              <Logo />
            </div>
            <span className="text-2xl font-bold text-white">Clin</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.href}
                to={link.href}
                smooth={true}
                duration={500}
                offset={-64}
                spy={true}
                className="cursor-pointer relative text-[#94a3b8] hover:text-white font-medium transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#60a5fa] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </ScrollLink>
            ))}
          </div>

          <div className="md:hidden">
            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer"
              aria-label="Toggle menu"
            >
              {open ? (
                <X className="h-6 w-6 text-blue-700" />
              ) : (
                <Menu className="h-6 w-6 text-blue-700" />
              )}
            </div>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-nav px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.href}
                to={link.href}
                smooth={true}
                duration={500}
                offset={-64}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-[#94a3b8] hover:text-white font-medium cursor-pointer"
              >
                {link.label}
              </ScrollLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
