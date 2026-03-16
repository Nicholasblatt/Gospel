import { Navigate, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { StoryPage } from "./pages/StoryPage";
import { QuestionsPage } from "./pages/QuestionsPage";
import { PassagesPage } from "./pages/PassagesPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/passages" element={<PassagesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resources" element={<ContactPage />} />
        <Route path="/contact" element={<Navigate to="/resources" replace />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}


