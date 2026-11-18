import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  GraduationCap,
  Sun,
  Moon,
  Menu,
  X,
  Sparkles,
  Globe,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({ onReplayIntro }) {
  const { lang, changeLanguage, t } = useLanguage();
  const { darkMode, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/teachers", label: t.nav.teachers },
    { to: "/news", label: t.nav.news },
    { to: "/schedule", label: t.nav.schedule },
    { to: "/admission", label: t.nav.admission },
    { to: "/contact", label: t.nav.contact },
  ];

  const langs = [
    { id: "uz", code: "UZ" },
    { id: "ru", code: "RU" },
    { id: "en", code: "ENG" },
    { id: "kk", code: "QAZ" },
  ];

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-slate-200/70 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-lg shadow-emerald-600/20 group-hover:rotate-6 transition-transform">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <span className="block font-display text-lg font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
                {t.schoolShort}
              </span>
              <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                Qibray • Toshkent
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70 hover:text-emerald-600 dark:hover:text-emerald-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Controls: 4 Languages + Theme + Intro Replay */}
          <div className="flex items-center gap-2">
            {/* 4 Language Switcher (UZ / RU / ENG / QAZ) */}
            <div className="hidden sm:flex items-center rounded-xl bg-slate-100 dark:bg-slate-800/90 p-1 border border-slate-200/70 dark:border-slate-700">
              {langs.map((item) => (
                <button
                  key={item.id}
                  onClick={() => changeLanguage(item.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    lang === item.id
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {item.code}
                </button>
              ))}
            </div>

            {/* Replay Intro Animation Button */}
            <button
              onClick={onReplayIntro}
              title="Kirish animatsiyasini qayta ko'rish"
              className="hidden md:flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-amber-500 hover:bg-amber-50 dark:hover:bg-slate-800 transition-colors"
            >
              <Sparkles className="h-4 w-4" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-3 pb-6 space-y-3 animate-fade-up">
          <div className="flex items-center justify-between gap-1 rounded-xl bg-slate-100 dark:bg-slate-900 p-1.5">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 pl-2">
              <Globe className="h-3.5 w-3.5" /> Til:
            </span>
            <div className="flex gap-1">
              {langs.map((item) => (
                <button
                  key={item.id}
                  onClick={() => changeLanguage(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                    lang === item.id
                      ? "bg-emerald-600 text-white"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {item.code}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-semibold ${
                    isActive
                      ? "bg-emerald-600 text-white"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
