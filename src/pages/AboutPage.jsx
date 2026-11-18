import React from "react";
import {
  Award,
  Target,
  Eye,
  CheckCircle,
  Building2,
  Handshake,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { sponsorsData } from "../data/schoolData";

export default function AboutPage() {
  const { lang, t } = useLanguage();

  const content = {
    uz: {
      title: "Qibray tumani 13-sonli maktab haqida",
      subtitle:
        "1978-yildan buyon minglab bilimli va vatanparvar yoshlarni tarbiyalab kelayotgan ziyo maskani.",
      historyTitle: "Maktabimiz tarixi va buguni",
      historyText:
        "Toshkent viloyati Qibray tumanidagi 13-sonli umumiy o'rta ta'lim maktabi bugungi kunda 1480 nafardan ortiq o'quvchi va 94 nafar oliy va birinchi toifali pedagoglarni birlashtirgan zamonaviy ta'lim majmuasidir. Maktabda o'zbek, rus va qozoq sinflari faoliyat yuritadi hamda ingliz tili chuqurlashtirilgan holda o'qitiladi.",
      mission: "Bizning missiyamiz",
      missionText:
        "Har bir o'quvchiga zamonaviy raqamli bilimlar, mustaqil fikrlash va milliy qadriyatlarga hurmat ruhida sifatli ta'lim berish.",
      vision: "Kelajak maqsadimiz",
      visionText:
        "Toshkent viloyatidagi eng ilg'or STEAM va IT yo'nalishidagi namunaviy maktabga aylanish.",
      highlights: [
        "3 ta zamonaviy kompyuter va robototexnika xonasi",
        "15 000+ kitob fondiga ega elektron va bosma kutubxona",
        "Yopiq sport zali, futbol maydoni va shaxmat klubi",
        "O'zbek, Rus, Ingliz va Qozoq tillarida madaniy-ma'rifiy to'garaklar",
      ],
    },
    ru: {
      title: "О школе №13 Кибрайского района",
      subtitle: "Центр знаний, воспитывающий талантливую молодёжь с 1978 года.",
      historyTitle: "История и современность",
      historyText:
        "Общеобразовательная школа №13 Кибрайского района Ташкентской области сегодня объединяет более 1480 учеников и 94 квалифицированных педагога. В школе функционируют классы с узбекским, русским и казахским языками обучения, а также углублённый английский.",
      mission: "Наша миссия",
      missionText:
        "Дать каждому ученику качественное образование, цифровые навыки и воспитание в духе уважения к традициям.",
      vision: "Наше видение",
      visionText: "Стать образцовой STEAM и IT-школой Ташкентской области.",
      highlights: [
        "3 современных класса информатики и робототехники",
        "Цифровая и печатная библиотека на 15 000+ книг",
        "Крытый спортзал, футбольное поле и шахматный клуб",
        "Кружки на узбекском, русском, английском и казахском языках",
      ],
    },
    en: {
      title: "About Qibray School No. 13",
      subtitle: "A beacon of knowledge nurturing future leaders since 1978.",
      historyTitle: "Our Heritage & Modern Campus",
      historyText:
        "Located in Qibray District, Tashkent Region, School No. 13 serves over 1,480 students with a dedicated faculty of 94 educators. We offer instruction in Uzbek, Russian, and Kazakh tracks alongside intensive English and IT programs.",
      mission: "Our Mission",
      missionText:
        "Empower every student with modern digital skills, critical thinking, and strong ethical values.",
      vision: "Our Vision",
      visionText:
        "Become the leading STEAM and innovation-driven public school in Tashkent Region.",
      highlights: [
        "3 modern computer science & robotics laboratories",
        "Digital & print library with 15,000+ volumes",
        "Indoor sports arena, football pitch & chess academy",
        "Multilingual clubs in Uzbek, Russian, English & Kazakh",
      ],
    },
    kk: {
      title: "Қыбрай ауданы №13 мектеп туралы",
      subtitle:
        "1978 жылдан бері мыңдаған білімді жастарды тәрбиелеп келе жатқан білім ордасы.",
      historyTitle: "Мектебіміздің тарихы мен бүгіні",
      historyText:
        "Ташкент облысы Қыбрай ауданындағы №13 жалпы орта білім беретін мектебі бүгінде 1480-нен астам оқушы мен 94 білікті ұстазды біріктірген заманауи білім кешені. Мектепте өзбек, орыс және қазақ сыныптары жұмыс істейді, ағылшын тілі тереңдетіп оқытылады.",
      mission: "Біздің миссиямыз",
      missionText:
        "Әрбір оқушыға заманауи цифрлық білім, сыни ойлау және ұлттық құндылықтарға құрмет рухында сапалы білім беру.",
      vision: "Болашақ мақсатымыз",
      visionText:
        "Ташкент облысындағы ең озық STEAM және IT бағытындағы үлгілі мектепке айналу.",
      highlights: [
        "3 заманауи компьютер және робототехника кабинеті",
        "15 000+ кітап қоры бар электронды және баспа кітапхана",
        "Жабық спорт залы, футбол алаңы және шахмат клубы",
        "Өзбек, орыс, ағылшын және қазақ тілдеріндегі үйірмелер",
      ],
    },
  };

  const c = content[lang] || content.uz;

  return (
    <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-4">
          <Building2 className="h-4 w-4" />
          {t.district}
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold mb-4">
          {c.title}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
          {c.subtitle}
        </p>
      </div>

      {/* Main Story + Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80"
            alt="School Campus"
            className="w-full h-[380px] object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            {c.historyTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {c.historyText}
          </p>
          <ul className="space-y-3">
            {c.highlights.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-sm font-semibold"
              >
                <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card rounded-3xl p-8">
          <div className="h-12 w-12 rounded-2xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center mb-4">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="font-display text-xl font-bold mb-2">{c.mission}</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {c.missionText}
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8">
          <div className="h-12 w-12 rounded-2xl bg-amber-500/15 text-amber-600 flex items-center justify-center mb-4">
            <Eye className="h-6 w-6" />
          </div>
          <h3 className="font-display text-xl font-bold mb-2">{c.vision}</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {c.visionText}
          </p>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="pt-4">
        <div className="flex items-center gap-3 mb-8">
          <Handshake className="h-7 w-7 text-emerald-600" />
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold">
            {t.sections.sponsorsTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sponsorsData.map((sp) => (
            <div
              key={sp.id}
              className="glass-card rounded-3xl p-6 flex items-start gap-4"
            >
              <div className="h-12 w-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {sp.tag[lang] || sp.tag.uz}
                </span>
                <h3 className="font-display text-lg font-bold mt-0.5 mb-1">
                  {sp.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {sp.desc[lang] || sp.desc.uz}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
