import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-extrabold text-slate-900 dark:text-white">
                  {t.schoolFull}
                </h3>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  {t.district}
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              {t.footer.about}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-emerald-600 transition-colors"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  to="/teachers"
                  className="hover:text-emerald-600 transition-colors"
                >
                  {t.nav.teachers}
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="hover:text-emerald-600 transition-colors"
                >
                  {t.nav.news}
                </Link>
              </li>
              <li>
                <Link
                  to="/schedule"
                  className="hover:text-emerald-600 transition-colors"
                >
                  {t.nav.schedule}
                </Link>
              </li>
              <li>
                <Link
                  to="/admission"
                  className="hover:text-emerald-600 transition-colors"
                >
                  {t.nav.admission}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {t.footer.contacts}
            </h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>+998 (70) 123-13-13</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>info@qibray13maktab.uz</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>{t.footer.workHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © 2026 {t.schoolFull}. {t.footer.rights}
          </p>
          <p className="font-medium text-emerald-600 dark:text-emerald-400">
            UZ • RU • ENG • QAZ
          </p>
        </div>
      </div>
    </footer>
  );
}
