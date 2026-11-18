import React, { useState } from "react";
import { Calendar, Tag } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { newsData } from "../data/schoolData";

export default function NewsPage() {
  const { lang, t } = useLanguage();
  const [selectedCat, setSelectedCat] = useState("ALL");

  const categories = ["ALL", ...new Set(newsData.map((n) => n.category.uz))];

  const filteredNews =
    selectedCat === "ALL"
      ? newsData
      : newsData.filter((n) => n.category.uz === selectedCat);

  return (
    <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold mb-3">
          {t.sections.newsTitle}
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          {t.sections.newsSubtitle}
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCat === cat
                ? "bg-emerald-600 text-white shadow-md"
                : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-emerald-500"
            }`}
          >
            {cat === "ALL" ? t.sections.viewAll : cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredNews.map((item) => (
          <article
            key={item.id}
            className="glass-card rounded-3xl overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition-all"
          >
            <img
              src={item.image}
              alt={item.title[lang]}
              className="w-full sm:w-56 h-56 sm:h-auto object-cover"
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                    <Tag className="h-3.5 w-3.5" />
                    {item.category[lang] || item.category.uz}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.date}
                  </span>
                </div>
                <h2 className="font-display text-xl font-bold mb-2">
                  {item.title[lang] || item.title.uz}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.summary[lang] || item.summary.uz}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
