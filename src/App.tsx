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
import DatabaseConnections from './pages/DatabaseConnections';
import DatabaseConnectionsNew from './pages/DatabaseConnectionsNew';
import DatabaseConnectionSettings from './pages/DatabaseConnectionSettings';
import SocialConnections from './pages/SocialConnections';
import SocialConnectionsCreate from './pages/SocialConnectionsCreate';
import SocialConnectionPermissions from './pages/SocialConnectionPermissions';
import EnterpriseConnections from './pages/EnterpriseConnections';
import SAMLConnectionsPage from './pages/SAMLConnectionsPage';
import SAMLCreateConnectionPage from './pages/SAMLCreateConnectionPage';
import PasswordlessConnectionsPage from './pages/PasswordlessConnectionsPage';
import AuthenticationProfilePage from './pages/AuthenticationProfilePage';
import OrganizationsListPage from './pages/OrganizationsListPage';
import OrganizationsCreatePage from './pages/OrganizationsCreatePage';
import OrganizationsOverviewPage from './pages/OrganizationsOverviewPage';
import UsersPage from './pages/UsersPage';
import RolesPage from './pages/RolesPage';
import RoleSettingsPage from './pages/RoleSettingsPage';
import UniversalLoginColorsPage from './pages/UniversalLoginColorsPage';
import CustomDomains from './pages/CustomDomains';
import EmailTemplates from './pages/EmailTemplates';
import EmailProvider from './pages/EmailProvider';
import PhoneTemplates from './pages/PhoneTemplates';
import PhoneProvider from './pages/PhoneProvider';
import AttackProtection from './pages/AttackProtection';
import MultiFactorAuth from './pages/MultiFactorAuth';
import Monitoring from './pages/Monitoring';
import Triggers from './pages/Triggers';
import PreUserRegistrationTrigger from './pages/PreUserRegistrationTrigger';
import PostUserRegistrationTrigger from './pages/PostUserRegistrationTrigger';
import BrowseActions from './pages/BrowseActions';
import PostLoginTrigger from './pages/PostLoginTrigger';
import SendPhoneMessageTrigger from './pages/SendPhoneMessageTrigger';
import PasswordResetPostChallengeTrigger from './pages/PasswordResetPostChallengeTrigger';
import PostChangePasswordTrigger from './pages/PostChangePasswordTrigger';
import CredentialsExchangeTrigger from './pages/CredentialsExchangeTrigger';
import Library from './pages/Library';
import TemplatesLibrary from './pages/TemplatesLibrary';
import TemplateDetail from './pages/TemplateDetail';
import EventStreams from './pages/EventStreams';
import EventStreamNew from './pages/EventStreamNew';
import EventStreamNewWebhook from './pages/EventStreamNewWebhook';
import EventStreamNewAWS from './pages/EventStreamNewAWS';
import Logs from './pages/Logs';
import LogStreams from './pages/LogStreams';
import ActionLogs from './pages/ActionLogs';
import Marketplace from './pages/Marketplace';
import ExtensionsList from './pages/ExtensionsList';
import TenantSettingsGeneral from './pages/TenantSettingsGeneral';
import TenantSettingsSubscription from './pages/TenantSettingsSubscription';
import TenantSettingsMembers from './pages/TenantSettingsMembers';
import TenantSettingsCustomDomains from './pages/TenantSettingsCustomDomains';
import TenantSettingsSigningKeys from './pages/TenantSettingsSigningKeys';
import TenantSettingsEncryptionKeys from './pages/TenantSettingsEncryptionKeys';
import TenantSettingsAdvanced from './pages/TenantSettingsAdvanced';

const BotDetection = React.lazy(() => import('./pages/BotDetection'));
const SuspiciousIPThrottling = React.lazy(() => import('./pages/SuspiciousIPThrottling'));
const BruteForceProtection = React.lazy(() => import('./pages/BruteForceProtection'));
const BreachedPasswordDetection = React.lazy(() => import('./pages/BreachedPasswordDetection'));

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
            <Route path="au/dev-1md8m8doz8ynfucb/connections/database" element={<DatabaseConnections />} />
            <Route path="au/dev-1md8m8doz8ynfucb/apis/679657da55b41ef859333806/settings" element={<ApiSettings />} />
            <Route path="au/:environment/externalapps" element={<SSOIntegrations />} />
            <Route path="au/dev-1md8m8doz8ynfucb/externalapps/create" element={<SSOCreateIntegration />} />
            <Route path="au/dev-1md8m8doz8ynfucb/externalapps/create/:url_slug" element={<SSOChooseIntegration />} />
            <Route path="au/dev-1md8m8doz8ynfucb/connections/database/new" element={<DatabaseConnectionsNew />} />
            <Route path="au/dev-1md8m8doz8ynfucb/connections/database/:connectionId/settings" element={<DatabaseConnectionSettings />} />
            <Route path="au/dev-1md8m8doz8ynfucb/connections/social" element={<SocialConnections />} />
            <Route path="au/dev-1md8m8doz8ynfucb/connections/social/create" element={<SocialConnectionsCreate/>} />
            <Route path="au/dev-1md8m8doz8ynfucb/connections/social/create/:social/setup" element={<SocialConnectionsCreate step="setup" />} />
            <Route path="au/dev-1md8m8doz8ynfucb/connections/social/create/:slug" element={<SocialConnectionPermissions />} />
            <Route path="au/dev-1md8m8doz8ynfucb/connections/enterprise" element={<EnterpriseConnections />} />
            <Route path="au/dev-1md8m8doz8ynfucb/connections/enterprise/saml" element={<SAMLConnectionsPage />} />
            <Route path="au/dev-1md8m8doz8ynfucb/connections/enterprise/saml/create" element={<SAMLCreateConnectionPage />} />
            <Route path="au/dev-1md8m8doz8ynfucb/connections/passwordless" element={<PasswordlessConnectionsPage />} />
            <Route path="authentication/profile" element={<AuthenticationProfilePage />} />
            <Route path="au/dev-1md8m8doz8ynfucb/organizations/list" element={<OrganizationsListPage />} />
            <Route path="au/dev-1md8m8doz8ynfucb/organizations/create" element={<OrganizationsCreatePage />} />
            <Route path="au/dev-1md8m8doz8ynfucb/organizations/:orgId/overview" element={<OrganizationsOverviewPage />} />
            <Route path="au/dev-1md8m8doz8ynfucb/users" element={<UsersPage />} />
            <Route path="au/dev-1md8m8doz8ynfucb/roles" element={<RolesPage />} />
            <Route path="au/dev-1md8m8doz8ynfucb/roles/:roleId/settings" element={<RoleSettingsPage />} />
            <Route path="au/dev-1md8m8doz8ynfucb/universal-login/customizations/colors" element={<UniversalLoginColorsPage />} />
            <Route path="au/dev-1md8m8doz8ynfucb/custom_domains" element={<CustomDomains />} />
            <Route path="au/dev-1md8m8doz8ynfucb/templates" element={<EmailTemplates />} />
            <Route path="au/dev-1md8m8doz8ynfucb/templates/provider" element={<EmailProvider />} />
            <Route path="au/dev-1md8m8doz8ynfucb/phone/templates" element={<PhoneTemplates />} />
            <Route path="au/dev-1md8m8doz8ynfucb/phone/templates/phone/provider" element={<PhoneProvider />} />
            <Route path="au/dev-1md8m8doz8ynfucb/security/attack-protection" element={<AttackProtection />} />
            <Route path="au/dev-1md8m8doz8ynfucb/security/attack-protection/bot-detection" element={<React.Suspense fallback={null}><BotDetection /></React.Suspense>} />
            <Route path="au/dev-1md8m8doz8ynfucb/security/attack-protection/suspicious-ip-throttling" element={<React.Suspense fallback={null}><SuspiciousIPThrottling /></React.Suspense>} />
            <Route path="au/dev-1md8m8doz8ynfucb/security/attack-protection/brute-force-protection" element={<React.Suspense fallback={null}><BruteForceProtection /></React.Suspense>} />
            <Route path="au/dev-1md8m8doz8ynfucb/security/attack-protection/breached-password-detection" element={<React.Suspense fallback={null}><BreachedPasswordDetection /></React.Suspense>} />
            <Route path="au/dev-1md8m8doz8ynfucb/security/mfa" element={<MultiFactorAuth />} />
            <Route path="au/dev-1md8m8doz8ynfucb/security/monitoring" element={<Monitoring />} />
            <Route path="au/dev-1md8m8doz8ynfucb/actions/triggers" element={<Triggers />} />
            <Route path="au/dev-1md8m8doz8ynfucb/actions/triggers/pre-user-registration" element={<PreUserRegistrationTrigger />} />
            <Route path="au/dev-1md8m8doz8ynfucb/actions/triggers/post-user-registration" element={<PostUserRegistrationTrigger />} />
            <Route path="au/dev-1md8m8doz8ynfucb/actions/library/actions/packaged" element={<BrowseActions />} />
            <Route path="au/dev-1md8m8doz8ynfucb/actions/triggers/post-login" element={<PostLoginTrigger />} />
            <Route path="au/dev-1md8m8doz8ynfucb/actions/triggers/send-phone-message" element={<SendPhoneMessageTrigger />} />
            <Route path="au/dev-1md8m8doz8ynfucb/actions/triggers/password-reset-post-challenge" element={<PasswordResetPostChallengeTrigger />} />
            <Route path="au/dev-1md8m8doz8ynfucb/actions/triggers/post-change-password" element={<PostChangePasswordTrigger />} />
            <Route path="au/dev-1md8m8doz8ynfucb/actions/triggers/credentials-exchange" element={<CredentialsExchangeTrigger />} />
            <Route path="au/dev-1md8m8doz8ynfucb/actions/library" element={<Library />} />
            <Route path="au/dev-1md8m8doz8ynfucb/actions/library/templates" element={<TemplatesLibrary />} />
            <Route path="au/dev-1md8m8doz8ynfucb/actions/library/templates/templates/:id" element={<TemplateDetail />} />
            <Route path="au/dev-1md8m8doz8ynfucb/events/event-streams" element={<EventStreams />} />
            <Route path="au/dev-1md8m8doz8ynfucb/events/event-streams/new" element={<EventStreamNew />} />
            <Route path="au/dev-1md8m8doz8ynfucb/events/event-streams/new/webhook" element={<EventStreamNewWebhook />} />
            <Route path="au/dev-1md8m8doz8ynfucb/events/event-streams/new/aws" element={<EventStreamNewAWS />} />
            <Route path="au/dev-1md8m8doz8ynfucb/logs" element={<Logs />} />
            <Route path="au/dev-1md8m8doz8ynfucb/log-streams" element={<LogStreams />} />
            <Route path="au/dev-1md8m8doz8ynfucb/action-logs" element={<ActionLogs />} />
            <Route path="au/dev-1md8m8doz8ynfucb/marketplace" element={<Marketplace />} />
            <Route path="au/dev-1md8m8doz8ynfucb/extensions/list" element={<ExtensionsList />} />
            <Route path="au/dev-1md8m8doz8ynfucb/tenant/general" element={<TenantSettingsGeneral />} />
            <Route path="au/dev-1md8m8doz8ynfucb/tenant/billing/subscription" element={<TenantSettingsSubscription />} />
            <Route path="au/dev-1md8m8doz8ynfucb/tenant/admins" element={<TenantSettingsMembers />} />
            <Route path="au/dev-1md8m8doz8ynfucb/tenant/custom_domains" element={<TenantSettingsCustomDomains />} />
            <Route path="au/dev-1md8m8doz8ynfucb/tenant/signing_keys" element={<TenantSettingsSigningKeys />} />
            <Route path="au/dev-1md8m8doz8ynfucb/tenant/encryption_keys" element={<TenantSettingsEncryptionKeys />} />
            <Route path="au/dev-1md8m8doz8ynfucb/tenant/advanced" element={<TenantSettingsAdvanced />} />
          </Route>

          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
