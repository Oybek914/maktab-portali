import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Award,
  Trophy,
  Cpu,
  Globe,
  ShieldCheck,
  BookOpen,
  Calendar,
  Handshake,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import {
  statsData,
  featuresData,
  newsData,
  sponsorsData,
} from "../data/schoolData";

const iconMap = {
  Users,
  Award,
  Trophy,
  Cpu,
  Globe,
  ShieldCheck,
  BookOpen,
};

export default function HomePage() {
  const { lang, t } = useLanguage();

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 h-[420px] w-[420px] rounded-full bg-emerald-500/15 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 h-[380px] w-[380px] rounded-full bg-amber-500/15 blur-3xl animate-pulse-slow" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                <Sparkles className="h-3.5 w-3.5" />
                {t.hero.badge}
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                {t.hero.title1}{" "}
                <span className="text-gradient block sm:inline">
                  {t.hero.title2}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                {t.hero.desc}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/admission"
                  className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-7 py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-emerald-600/25 hover:scale-[1.03] active:scale-95 transition-all"
                >
                  <span>{t.hero.ctaPrimary}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-7 py-4 text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 hover:border-emerald-500 transition-all"
                >
                  {t.hero.ctaSecondary}
                </Link>
              </div>
            </div>

            {/* Hero Right Visual Card */}
            <div className="lg:col-span-5 relative animate-scale-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800 group">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80"
                  alt="Qibray 13-maktab"
                  className="h-[400px] w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block rounded-lg bg-emerald-500 px-3 py-1 text-xs font-bold text-slate-950 mb-2">
                    {t.district}
                  </span>
                  <h3 className="font-display text-xl font-bold">
                    {t.schoolFull}
                  </h3>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="hidden sm:flex items-center gap-3 rounded-2xl glass-card p-4 shadow-xl absolute -bottom-6 -left-6 animate-float">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/20 text-amber-500">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Top Rating 2026
                  </p>
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white">
                    Qibray TOP-3 Maktab
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* STATS GRID */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {statsData.map((stat) => {
              const IconComponent = iconMap[stat.icon] || Users;
              return (
                <div
                  key={stat.id}
                  className="glass-card rounded-3xl p-6 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-xl"
                >
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="font-display text-3xl font-extrabold text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                    {t.hero.stats[stat.key]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES / WHY US */}
      <section className="py-20 bg-white dark:bg-slate-900/50 border-y border-slate-200/70 dark:border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-3">
              {t.sections.whyTitle}
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              {t.sections.whySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuresData.map((feat) => {
              const IconComp = iconMap[feat.icon] || Cpu;
              return (
                <div
                  key={feat.id}
                  className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900 p-7 hover:border-emerald-500/60 hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-5 inline-flex h-13 w-13 p-3.5 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2.5">
                    {feat.title[lang] || feat.title.uz}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feat.desc[lang] || feat.desc.uz}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LATEST NEWS PREVIEW */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-2">
                {t.sections.newsTitle}
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                {t.sections.newsSubtitle}
              </p>
            </div>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              {t.sections.viewAll} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsData.map((item) => (
              <article
                key={item.id}
                className="group glass-card rounded-3xl overflow-hidden flex flex-col hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title[lang]}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 rounded-xl bg-slate-950/75 backdrop-blur-md px-3 py-1 text-xs font-bold text-emerald-400">
                    {item.category[lang] || item.category.uz}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-2">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.date}
                    </div>
                    <h3 className="font-display text-base font-bold mb-2 line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item.title[lang] || item.title.uz}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {item.summary[lang] || item.summary.uz}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORS & PARTNERS SECTION */}
      <section className="py-20 bg-gradient-to-b from-emerald-950 to-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-400/30 px-4 py-1 text-xs font-bold text-emerald-300 mb-4">
              <Handshake className="h-4 w-4" />
              Partners & Sponsors
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-3">
              {t.sections.sponsorsTitle}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              {t.sections.sponsorsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorsData.map((sp) => (
              <div
                key={sp.id}
                className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-md hover:bg-white/10 hover:border-emerald-400/40 transition-all"
              >
                <span className="inline-block rounded-lg bg-amber-400/20 text-amber-300 px-3 py-1 text-xs font-bold mb-4">
                  {sp.tag[lang] || sp.tag.uz}
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                  {sp.name}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {sp.desc[lang] || sp.desc.uz}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
