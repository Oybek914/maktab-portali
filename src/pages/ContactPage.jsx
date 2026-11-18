import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { submitContactMessage } from "../services/api";

export default function ContactPage() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await submitContactMessage(data);
    } catch (e) {
      console.error(e);
    }
    setSent(true);
    reset();
  };

  return (
    <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold mb-3">
          {t.nav.contact}
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          {t.schoolFull} bilan bog'lanish va manzilimiz
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-card rounded-3xl p-6 flex items-start gap-4">
            <MapPin className="h-6 w-6 text-emerald-600 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-base">Manzil</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                {t.footer.address}
              </p>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 flex items-start gap-4">
            <Phone className="h-6 w-6 text-emerald-600 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-base">Telefon</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                +998 (70) 123-13-13 • +998 (90) 987-13-13
              </p>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 flex items-start gap-4">
            <Mail className="h-6 w-6 text-emerald-600 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-base">Elektron pochta</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                info@qibray13maktab.uz
              </p>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 flex items-start gap-4">
            <Clock className="h-6 w-6 text-emerald-600 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-base">Ish vaqti</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                {t.footer.workHours}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          {sent ? (
            <div className="glass-card rounded-3xl p-10 text-center space-y-4">
              <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
              <h3 className="font-display text-2xl font-bold">
                Xabaringiz yuborildi!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Maktab ma'muriyati tez orada javob beradi.
              </p>
              <button
                onClick={() => setSent(false)}
                className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white"
              >
                Yangi xabar
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card rounded-3xl p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  {...register("name", { required: true })}
                  placeholder="Ismingiz"
                  className="w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3.5 text-sm focus:border-emerald-500 focus:outline-none"
                />
                <input
                  {...register("phone", { required: true })}
                  placeholder="Telefon raqamingiz (+998...)"
                  className="w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3.5 text-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <textarea
                rows={4}
                {...register("message", { required: true })}
                placeholder="Murojaatingiz matnini yozing..."
                className="w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3.5 text-sm focus:border-emerald-500 focus:outline-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-colors"
              >
                <Send className="h-4 w-4" />
                <span>Xabar yuborish</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
