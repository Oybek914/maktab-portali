import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2, Send, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { submitAdmissionForm } from "../services/api";

export default function AdmissionPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await submitAdmissionForm(data);
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    }
  };

  return (
    <div className="py-16 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-3">
          <Sparkles className="h-4 w-4" />
          Qabul 2026–2027
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold mb-3">
          {t.admission.title}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {t.admission.subtitle}
        </p>
      </div>

      {submitted ? (
        <div className="glass-card rounded-3xl p-10 text-center space-y-4 animate-scale-in">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h2 className="font-display text-2xl font-extrabold">
            {t.admission.successTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            {t.admission.successDesc}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white"
          >
            Yana ariza yuborish
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="glass-card rounded-3xl p-8 sm:p-10 space-y-6 shadow-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                {t.admission.studentName} *
              </label>
              <input
                {...register("studentName", { required: true })}
                placeholder="Aliyev Sardor Bekzod o'g'li"
                className="w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3.5 text-sm focus:border-emerald-500 focus:outline-none"
              />
              {errors.studentName && (
                <span className="text-xs text-rose-500 mt-1 block">
                  Majburiy maydon
                </span>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                {t.admission.parentName} *
              </label>
              <input
                {...register("parentName", { required: true })}
                placeholder="Aliyev Bekzod"
                className="w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3.5 text-sm focus:border-emerald-500 focus:outline-none"
              />
              {errors.parentName && (
                <span className="text-xs text-rose-500 mt-1 block">
                  Majburiy maydon
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                {t.admission.phone} *
              </label>
              <input
                {...register("phone", { required: true })}
                placeholder="+998 90 123 45 67"
                className="w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3.5 text-sm focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                {t.admission.grade}
              </label>
              <select
                {...register("grade")}
                className="w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3.5 text-sm focus:border-emerald-500 focus:outline-none"
              >
                <option value="1-sinf">1-sinf</option>
                <option value="2-4-sinf">2–4-sinf</option>
                <option value="5-9-sinf">5–9-sinf</option>
                <option value="10-11-sinf (IT)">10–11-sinf (IT / STEAM)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                {t.admission.languageTrack}
              </label>
              <select
                {...register("languageTrack")}
                className="w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3.5 text-sm focus:border-emerald-500 focus:outline-none"
              >
                <option value="O'zbek">O'zbek tili</option>
                <option value="Rus">Русский язык</option>
                <option value="Qozoq">Қазақ тілі</option>
                <option value="Ingliz (STEAM)">English Track</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2">
              {t.admission.note}
            </label>
            <textarea
              rows={3}
              {...register("note")}
              placeholder="O'quvchining qiziqishlari yoki qo'shimcha savollar..."
              className="w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-emerald-600/25 hover:opacity-95 transition-all disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            <span>
              {isSubmitting ? t.admission.sending : t.admission.submit}
            </span>
          </button>
        </form>
      )}
    </div>
  );
}
