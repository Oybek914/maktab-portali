import React, { useState, useEffect } from "react";
import { GraduationCap, Sparkles, ArrowRight, Globe2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function WelcomeIntro({ onComplete }) {
  const { lang, changeLanguage, t } = useLanguage();
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 60);
    return () => clearInterval(timer);
  }, []);

  const handleEnter = () => {
    setExiting(true);
    setTimeout(() => {
      onComplete();
    }, 650);
  };

  const languages = [
    { id: "uz", label: "UZ", flag: "🇺🇿" },
    { id: "ru", label: "RU", flag: "🇷🇺" },
    { id: "en", label: "ENG", flag: "🇬🇧" },
    { id: "kk", label: "QAZ", flag: "🇰🇿" },
  ];

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-slate-950 text-white transition-all duration-700 ${
        exiting
          ? "opacity-0 scale-105 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Animated Ambient Gradient Orbs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-600/30 blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-amber-500/25 blur-3xl animate-pulse-slow" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12)_0%,transparent_70%)]" />

      {/* Top Language Quick Switcher */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 rounded-full bg-white/10 p-1.5 backdrop-blur-md border border-white/15">
        <Globe2 className="w-4 h-4 text-emerald-400 ml-2 mr-1" />
        {languages.map((item) => (
          <button
            key={item.id}
            onClick={() => changeLanguage(item.id)}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              lang === item.id
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30"
                : "text-slate-300 hover:text-white"
            }`}
          >
            {item.flag} {item.label}
          </button>
        ))}
      </div>

      {/* Main Center Interactive Gate */}
      <div className="relative z-10 max-w-2xl px-6 text-center animate-scale-in">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-700 shadow-2xl shadow-emerald-500/30 animate-float border border-white/20">
          <GraduationCap className="h-12 w-12 text-white" />
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-300 mb-5">
          <Sparkles className="h-3.5 w-3.5" />
          {t.district}
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-emerald-100 to-amber-200 bg-clip-text text-transparent">
          13-MAKTAB
        </h1>

        <p className="text-xl sm:text-2xl font-semibold text-emerald-300 mb-3">
          {t.introWelcome}
        </p>

        <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto mb-8 leading-relaxed">
          {t.introSubtitle}
        </p>

        {/* Progress Bar */}
        <div className="mx-auto max-w-xs mb-8">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-amber-400 transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleEnter}
            className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all"
          >
            <span>{t.introEnterBtn}</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
