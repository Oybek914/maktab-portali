import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import WelcomeIntro from "./components/WelcomeIntro";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TeachersPage from "./pages/TeachersPage";
import NewsPage from "./pages/NewsPage";
import SchedulePage from "./pages/SchedulePage";
import AdmissionPage from "./pages/AdmissionPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem("qibray13_intro_seen");
  });
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const handleFinishIntro = () => {
    sessionStorage.setItem("qibray13_intro_seen", "true");
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <WelcomeIntro onComplete={handleFinishIntro} />}
      <Routes>
        <Route
          path="/"
          element={<MainLayout onReplayIntro={() => setShowIntro(true)} />}
        >
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="teachers" element={<TeachersPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="admission" element={<AdmissionPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}
