import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './organisms/Header';
import Hero from './organisms/Hero';
import Features from './organisms/Features';
import Implementation from './organisms/Implementation';
import Pricing from './pages/Pricing';
import Resources from './organisms/Resources';
import StartBuilding from './organisms/StartBuilding';
import Footer from './organisms/Footer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A1122]">
        <Header />
        <Routes>
          <Route path="/pricing" element={<Pricing />} />
          {/* Add other routes here */}
        </Routes>
        <main>
          <Hero />
          <Features />
          <Implementation />
          <Resources />
          <StartBuilding />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
