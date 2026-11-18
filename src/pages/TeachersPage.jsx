import React, { useState } from "react";
import { Search, Award, BookOpen } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { teachersData } from "../data/schoolData";

export default function TeachersPage() {
  const { lang, t } = useLanguage();
  const [query, setQuery] = useState("");

  const filtered = teachersData.filter((teacher) => {
    const q = query.toLowerCase();
    return (
      teacher.name.toLowerCase().includes(q) ||
      (teacher.subject[lang] || teacher.subject.uz).toLowerCase().includes(q)
    );
  });

  return (
    <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold mb-3">
            {t.nav.teachers}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl">
            {t.schoolFull} — tajribali, fidoyi va zamonaviy metodikalarga ega
            pedagoglar jamoasi.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ism yoki fan bo'yicha qidirish..."
            className="w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 pl-10 pr-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {filtered.map((teacher) => (
          <div
            key={teacher.id}
            className="group glass-card rounded-3xl overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
          >
            <div className="h-64 overflow-hidden relative">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-3 right-3 rounded-xl bg-emerald-600 px-3 py-1 text-xs font-bold text-white shadow">
                {teacher.experience}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-bold mb-1">
                {teacher.name}
              </h3>
              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-1.5">
                <Award className="h-4 w-4" />
                {teacher.role[lang] || teacher.role.uz}
              </p>
              <div className="pt-3 border-t border-slate-200/70 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <BookOpen className="h-4 w-4 text-amber-500" />
                <span>{teacher.subject[lang] || teacher.subject.uz}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
