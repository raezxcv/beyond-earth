import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StarfieldCanvas } from './components/StarfieldCanvas';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { CelestialDetailPage } from './pages/CelestialDetailPage';
import { MissionsPage } from './pages/MissionsPage';
import { JournalPage } from './pages/JournalPage';

const ScrollToTopOnNavigate: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  const [starfieldEnabled, setStarfieldEnabled] = useState(true);

  return (
    <BrowserRouter>
      <ScrollToTopOnNavigate />
      <div className="min-h-screen flex flex-col bg-void text-starlight relative selection:bg-amber/30 selection:text-starlight">
        <StarfieldCanvas enabled={starfieldEnabled} />

        <Navbar
          starfieldEnabled={starfieldEnabled}
          onToggleStarfield={() => setStarfieldEnabled((prev) => !prev)}
        />

        <main id="main-content" className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route
              path="/celestial"
              element={<Navigate to="/celestial/saturn" replace />}
            />
            <Route path="/celestial/:id" element={<CelestialDetailPage />} />
            <Route path="/missions" element={<MissionsPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

