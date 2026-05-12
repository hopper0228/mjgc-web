"use client";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { label: "活動資訊", href: "#about" },
  { label: "報名表單", href: "#forms" },
  { label: "周邊商品", href: "#merchandise" },
  { label: "贊助活動", href: "#sponsors" },
  { label: "交通資訊", href: "#transport" },
  { label: "聯絡我們", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-amber-400/30 flex-shrink-0">
            <Image
              src="https://static.readdy.ai/image/abc124db86a99a040d4212ba1ee4392b/623eeeea97d6d33bc8c88708f880985e.jpeg"
              alt="沐榕回娘家"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-white font-semibold text-base hidden sm:block">
            第三屆沐榕回娘家
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-amber-400 text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/33der9"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex text-gray-400 hover:text-amber-400 transition-colors text-sm"
          >
            IG
          </a>
          <a
            href="https://line.me/R/ti/p/@rtu1096v"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex text-gray-400 hover:text-amber-400 transition-colors text-sm"
          >
            LINE
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-1.5 p-2 text-white"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-transform duration-200 origin-center ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-transform duration-200 origin-center ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-black/95 border-t border-white/10 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-gray-300 hover:text-amber-400 py-3 text-sm border-b border-white/5 last:border-0 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-4 pt-4">
            <a
              href="https://instagram.com/33der9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://line.me/R/ti/p/@rtu1096v"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
            >
              LINE
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
