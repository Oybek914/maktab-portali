import React, { useState } from "react";
import { Clock, BookOpen } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { scheduleData } from "../data/schoolData";

export default function SchedulePage() {
  const { lang, t } = useLanguage();
  const classes = Object.keys(scheduleData);
  const [selectedClass, setSelectedClass] = useState(classes[0]);

  return (
    <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold mb-2">
            {t.nav.schedule}
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            2026-2027 o'quv yili haftalik dars jadvali
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {classes.map((cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all ${
                selectedClass === cls
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/25"
                  : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500"
              }`}
            >
              {cls}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scheduleData[selectedClass].map((dayObj, idx) => (
          <div
            key={idx}
            className="glass-card rounded-3xl p-6 hover:border-emerald-500/50 transition-all"
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
              <h3 className="font-display text-lg font-extrabold text-emerald-600 dark:text-emerald-400">
                {dayObj.day[lang] || dayObj.day.uz}
              </h3>
              <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                <Clock className="h-3.5 w-3.5" /> 08:30
              </span>
            </div>
            <ol className="space-y-2.5">
              {dayObj.lessons.map((lesson, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 px-3.5 py-2.5 text-sm font-medium"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-600/15 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                    {i + 1}
                  </span>
                  <BookOpen className="h-3.5 w-3.5 text-slate-400" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
