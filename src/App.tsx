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
import Apis from './pages/Apis';
import ApiSettings from './pages/ApiSettings';
import SSOIntegrations from './pages/SSOIntegrations';
import SSOCreateIntegration from './pages/SSOCreateIntegration';
import SSOChooseIntegration from './pages/SSOChooseIntegration';
import DashboardLayout from './pages/DashboardLayout';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A1122]">
        <Routes>
       
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
          {/* Auth Routes */}
          <Route path="/u/login" element={<Login />} />
          <Route path="/u/signup" element={<Signup />} />
          <Route path="/u/s/signup" element={<SignupPassword />} />
          <Route path="/u/verify" element={<VerifyIdentity />} />
          <Route path="/u/verify/methods" element={<VerifyMethods />} />
          <Route path="/u/device" element={<DeviceRegistration />} />
          <Route path="/u/device/success" element={<DeviceSuccess />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="au/insights" element={<ActivityInsights />} />
            <Route path="applications" element={<Applications />} />
            <Route path="applications/:clientId/quickstart" element={<ApplicationQuickstart />} />
            <Route path="activity" element={<ActivityInsights />} />
            <Route path="settings" element={<Settings />} />
            <Route path="quickstart" element={<ApplicationQuickstart />} />
            <Route path="credentials" element={<Settings />} />
            <Route path="au/:environment/apis" element={<Apis />} />
            <Route path="addons" element={<Settings />} />
            <Route path="connections" element={<Settings />} />
            <Route path="login-experience" element={<Settings />} />
            <Route path="au/dev-1md8m8doz8ynfucb/apis/679657da55b41ef859333806/settings" element={<ApiSettings />} />
            <Route path="au/:environment/externalapps" element={<SSOIntegrations />} />
            <Route path="au/dev-1md8m8doz8ynfucb/externalapps/create" element={<SSOCreateIntegration />} />
            <Route path="au/dev-1md8m8doz8ynfucb/externalapps/create/:url_slug" element={<SSOChooseIntegration />} />
          </Route>

          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
