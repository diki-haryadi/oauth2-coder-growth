import React from 'react';
import Header from './organisms/Header';
import Hero from './organisms/Hero';
import Features from './organisms/Features';
import Implementation from './organisms/Implementation';
import Pricing from './organisms/Pricing';
import Resources from './organisms/Resources';
import StartBuilding from './organisms/StartBuilding';
import Footer from './organisms/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A1122]">
      <Header />
      <main>
        <Hero />
        <Features />
        <Implementation />
        <Pricing />
        <Resources />
        <StartBuilding />
      </main>
      <Footer />
    </div>
  );
}

export default App;
