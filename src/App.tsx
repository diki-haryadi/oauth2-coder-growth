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
import Login from './pages/Login';
import Signup from './pages/Signup';
import SignupPassword from './pages/SignupPassword';
import VerifyIdentity from './pages/VerifyIdentity';
import VerifyMethods from './pages/VerifyMethods';
import DeviceRegistration from './pages/DeviceRegistration';
import DeviceSuccess from './pages/DeviceSuccess';
import Dashboard from './pages/Dashboard';
import ActivityInsights from './pages/ActivityInsights';
import Applications from './pages/Applications';
import ApplicationQuickstart from './pages/ApplicationQuickstart';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A1122]">
        <Routes>
          {/* Auth Routes */}
          <Route path="/u/login" element={<Login />} />
          <Route path="/u/signup" element={<Signup />} />
          <Route path="/u/s/signup" element={<SignupPassword />} />
          <Route path="/u/verify" element={<VerifyIdentity />} />
          <Route path="/u/verify/methods" element={<VerifyMethods />} />
          <Route path="/u/device" element={<DeviceRegistration />} />
          <Route path="/u/device/success" element={<DeviceSuccess />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/dashboard/au/insights" element={<ActivityInsights />} />
          <Route path="/dashboard/applications" element={<Applications />} />
          <Route path="/dashboard/applications/:clientId/quickstart" element={<ApplicationQuickstart />} />
          <Route path="/activity" element={<ActivityInsights />} />
          {/* <Route path="/dashboard/au/:tenantId/insights" element={<ActivityInsights />} /> */}

          {/* Main Routes */}
          <Route path="/pricing" element={
            <>
              <Header />
              <Pricing />
              <Footer />
            </>
          } />
          <Route path="/" element={
            <>
              <Header />
              <main>
                <Hero />
                <Features />
                <Implementation />
                <Resources />
                <StartBuilding />
              </main>
              <Footer />
            </>
          } />

          {/* New Routes */}
          <Route path="/settings" element={<Settings />} />
          <Route path="/quickstart" element={<ApplicationQuickstart />} />
          <Route path="/credentials" element={<Settings />} />
          <Route path="/apis" element={<Settings />} />
          <Route path="/addons" element={<Settings />} />
          <Route path="/connections" element={<Settings />} />
          <Route path="/login-experience" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
