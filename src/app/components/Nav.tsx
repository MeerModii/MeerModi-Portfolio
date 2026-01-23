"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download, Moon, Sun } from "lucide-react";
import { personalInfo } from "../data/content";

export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // Initialize theme
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = (savedTheme as "light" | "dark") || systemTheme;
    
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Work", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <nav 
          className={`
            relative flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-300
            ${isScrolled 
              ? "bg-background/80 backdrop-blur-md border-border shadow-lg shadow-black/5 dark:shadow-black/20" 
              : "bg-transparent border-transparent"
            }
          `}
        >
          {/* Logo */}
          <a href="#" className="font-display font-bold text-xl tracking-tight text-foreground flex items-center gap-2">
            <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-extrabold">M</span>
            <span className={isScrolled ? "hidden sm:block" : ""}>Meer.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-muted hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
             <button
                onClick={toggleTheme}
                className="p-2 text-muted hover:text-foreground transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Toggle theme"
             >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
             </button>
             <a 
                href={`mailto:${personalInfo.email}`}
                className="px-6 py-2.5 text-sm font-bold bg-foreground text-background rounded-full hover:bg-primary hover:text-white transition-all hover:scale-105 min-w-[100px] text-center"
             >
                Hire Me
             </a>
          </div>

          {/* Mobile Menu Actions */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="text-foreground"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              className="text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[80px] z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col p-8 border-t border-border animate-in slide-in-from-top-10 fade-in duration-200">
           <div className="flex flex-col gap-6 text-center mt-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-bold text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-border my-4" />
              <a 
                href={personalInfo.resume}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl text-muted hover:text-foreground flex items-center justify-center gap-2"
              >
                <Download size={20} /> Resume
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-8 py-4 bg-primary text-[#030712] font-bold rounded-xl"
              >
                Hire Me
              </a>
           </div>
        </div>
      )}
    </header>
  );
};