"use client";

import Link from "next/link";
import { Leaf, Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-leaf-100/60 transition-all duration-200">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO AREA */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group text-leaf-900 font-bold text-xl tracking-tight shrink-0 select-none"
        >
          <div className="p-1.5 rounded-xl bg-leaf-50 group-hover:bg-leaf-100 transition-colors duration-300">
            <Leaf className="w-5 h-5 fill-leaf-500 text-leaf-600 group-hover:scale-105 transition-transform duration-300" />
          </div>
          <span>
            Green <span className="text-leaf-600 font-medium">Leaves</span>
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-10 h-full">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <li key={l.href} className="relative flex items-center h-full">
                <Link
                  href={l.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 relative py-2 ${
                    isActive
                      ? "text-leaf-700 font-semibold"
                      : "text-leaf-800/80 hover:text-leaf-600"
                  }`}
                >
                  {l.label}
                  {/* Absolute active bar preventing any layout/height shifts */}
                  {isActive && (
                    <span className="absolute bottom-[-25px] left-0 right-0 h-[3px] bg-leaf-500 rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ACTIONS / CTA BUTTON */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="px-12 inline-flex items-center gap-1 bg-leaf-600 hover:bg-leaf-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm shadow-leaf-600/10 hover:shadow-md hover:shadow-leaf-600/20 active:scale-[0.98]"
          >
             Contact
          </Link>
        </div>

        {/* MOBILE MENU INTERACTIVE TOGGLE */}
        <button
          className="md:hidden p-2 text-leaf-800 hover:text-leaf-600 hover:bg-leaf-50 rounded-xl transition-colors duration-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* MOBILE EXPANDED MENU DRAWER */}
      {open && (
        <div className="md:hidden border-t border-leaf-100 bg-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col p-5 gap-1.5">
            {links.map((l) => {
              const isActive = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block w-full py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-leaf-50 text-leaf-700 font-semibold border-l-4 border-leaf-500 pl-3"
                        : "text-leaf-800 hover:bg-leaf-50/50 hover:text-leaf-600"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-3 mt-2 border-t border-leaf-50">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-full bg-leaf-600 hover:bg-leaf-700 text-white py-3 rounded-xl text-sm font-semibold transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
