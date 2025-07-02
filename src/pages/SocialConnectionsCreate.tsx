import React, { useState } from 'react';
import integrationsData from './ListIntegrations.json';
import { useNavigate, useParams } from 'react-router-dom';

// Mock: these are the catalog_ids of already added connections
const alreadyAdded = ['google-oauth2', 'github'];

export default function SocialConnectionsCreate({ step }: { step?: 'permissions' | 'setup' }) {
  const navigate = useNavigate();
  const { social } = useParams();
  const [search, setSearch] = useState('');
  const socialIntegrations = integrationsData.integrations.filter(
    (item) => item.feature_type === 'FEATURE_TYPE_SOCIAL_CONNECTION'
  );
  const filtered = socialIntegrations.filter((item) => {
    const name = item.name || item.partner?.display_name || '';
    return name.toLowerCase().includes(search.toLowerCase());
  });

  if (step === 'setup') {
    // Ambil slug dari params
    const { social: slug } = useParams();
    const integration = integrationsData.integrations.find((item: any) => item.catalog_id === slug);
    const name = integration?.name || integration?.partner?.display_name || slug || '';
    const logo = integration?.logo || integration?.partner?.logo || '/public/icons/linkedin.svg';
    // User Data
    const userData = [
      { label: 'Public Profile', value: 'public_profile', checked: true },
      { label: 'Email', value: 'email' },
      { label: 'Group Access Member Info', value: 'groups_access_member_info' },
      { label: 'Publish to Groups', value: 'publish_to_groups' },
      { label: 'Age Range', value: 'user_age_range' },
      { label: 'Birthday', value: 'user_birthday' },
      { label: 'Events', value: 'user_events' },
      { label: 'Friends', value: 'user_friends' },
      { label: 'Gender', value: 'user_gender' },
      { label: 'Hometown', value: 'user_hometown' },
      { label: 'Likes', value: 'user_likes' },
      { label: 'Location', value: 'user_location' },
      { label: 'Profile URL', value: 'user_link' },
      { label: 'Photos', value: 'user_photos' },
      { label: 'Posts', value: 'user_posts' },
      { label: 'Tagged Places', value: 'user_tagged_places' },
      { label: 'Videos', value: 'user_videos' },
    ];
    // Permissions
    const permissions = [
      { label: 'Ads Management', value: 'ads_management' },
      { label: 'Ads Read', value: 'ads_read' },
      { label: 'Business Management', value: 'business_management' },
      { label: 'Leads Retrieval', value: 'leads_retrieval' },
      { label: 'Manage Pages', value: 'manage_pages' },
      { label: 'Pages Manage CTA', value: 'pages_manage_cta' },
      { label: 'Pages Manage Instant Articles', value: 'pages_manage_instant_articles' },
      { label: 'Pages Show List', value: 'pages_show_list' },
      { label: 'Pages Messaging', value: 'pages_messaging' },
      { label: 'Pages Messaging Phone Number', value: 'pages_messaging_phone_number' },
      { label: 'Pages Messaging Subscriptions', value: 'pages_messaging_subscriptions' },
      { label: 'Publish Pages', value: 'publish_pages' },
      { label: 'Publish to Groups', value: 'publish_to_groups' },
      { label: 'Publish Videos', value: 'publish_video' },
      { label: 'Read Audience Network Insights', value: 'read_audience_network_insights' },
      { label: 'Read Insights', value: 'read_insights' },
      { label: 'Read Page Mailboxes', value: 'read_page_mailboxes' },
    ];
    // Deprecated Permissions
    const deprecatedPermissions = [
      { label: 'manage_notifications', value: 'manage_notifications' },
      { label: 'publish_actions', value: 'publish_actions' },
      { label: 'read_stream', value: 'read_stream' },
      { label: 'read_mailbox', value: 'read_mailbox' },
      { label: 'user_groups', value: 'user_groups' },
      { label: 'user_managed_groups', value: 'user_managed_groups' },
      { label: 'user_status', value: 'user_status' },
    ];
    // State
    const [advanced, setAdvanced] = React.useState(true);
    return (
      <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 relative">
          {/* Setup Guide Button */}
          <button className="absolute right-8 top-8 flex items-center gap-2 border border-gray-200 bg-white px-3 py-1.5 rounded text-gray-900 text-sm font-medium hover:bg-gray-50">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h2"/></svg>
            Setup Guide
          </button>
          {/* Logo & Title */}
          <div className="flex items-center mb-8">
            <img src={logo} alt={name} className="h-10 w-10 mr-4 rounded" />
            <h2 className="text-2xl font-semibold text-gray-900">New {name} Social Connection</h2>
          </div>
          <form>
            <div className="mb-8 border rounded-lg p-6">
              <div className="font-bold text-lg mb-6">General</div>
              <div className="mb-4">
                <label className="block font-bold mb-1">Name</label>
                <input className="w-full border rounded px-3 py-2 bg-gray-100" value={name?.toLowerCase()} readOnly />
                <div className="text-xs text-gray-500 mt-1">If you are triggering a login manually, this is the identifier you would use on the connection parameter.</div>
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-1">App ID</label>
                <input className="w-full border rounded px-3 py-2" placeholder="Leave blank to use Auth0 dev keys" />
                <a href="#" className="text-blue-600 text-xs underline mt-1 inline-block">How to obtain a App ID?</a>
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-1">App Secret</label>
                <input className="w-full border rounded px-3 py-2" placeholder="Leave blank to use Auth0 dev keys" />
                <div className="text-xs text-gray-500 mt-1">For security purposes, we don't show your existing App Secret.</div>
              </div>
              {/* User Data */}
              <div className="mb-2 font-bold">User Data</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
                {userData.map((item, idx) => (
                  <label key={item.value} className="flex items-center gap-2 text-sm font-normal">
                    <input type="checkbox" checked={item.checked} readOnly={item.checked} className="mr-1" />
                    {item.label}
                    <span className="ml-1 px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-500">{item.value}</span>
                    <span className="ml-1 text-gray-400 cursor-pointer" title="Info"><svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span>
                  </label>
                ))}
              </div>
              {/* Permissions */}
              <div className="mb-2 font-bold mt-8">Permissions</div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-2">
                {permissions.map((item, idx) => (
                  <label key={item.value} className="flex items-center gap-2 text-sm font-normal">
                    <input type="checkbox" className="mr-1" />
                    {item.label}
                    <span className="ml-1 px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-500">{item.value}</span>
                    <span className="ml-1 text-gray-400 cursor-pointer" title="Info"><svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span>
                  </label>
                ))}
              </div>
              <div className="text-xs text-gray-500 mb-6">For each Permission checked, Auth0 will request that permission from Facebook so you can call the Facebook API from your application using the access_token. Please see the Facebook <a href="https://developers.facebook.com/docs/permissions/reference" className="underline" target="_blank" rel="noopener noreferrer">Documentation</a> for details.</div>
              {/* Deprecated Permissions */}
              <div className="mb-2 font-bold mt-8">Deprecated Permissions</div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-2">
                {deprecatedPermissions.map((item, idx) => (
                  <label key={item.value} className="flex items-center gap-2 text-sm font-normal">
                    <input type="checkbox" className="mr-1" />
                    {item.label}
                    <span className="ml-1 px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-500">{item.value}</span>
                    <span className="ml-1 text-gray-400 cursor-pointer" title="Info"><svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span>
                  </label>
                ))}
              </div>
              <div className="text-xs text-gray-500 mb-6">These permissions are only available for applications using Graph API version v2.3 or older.</div>
              {/* Additional Scopes */}
              <div className="mb-2 font-bold mt-8">Additional Scopes</div>
              <textarea className="w-full border rounded px-3 py-2 mb-2" placeholder="e.g. scope1, scope2, ..." rows={2}></textarea>
              <div className="text-xs text-gray-500 mb-6">Enter additional scopes separated by commas. Be sure to include valid scopes from the IDPs documentation. Any invalid scopes may throw an error during authentication.</div>
              {/* Advanced */}
              <div className="flex items-center justify-between mt-8 mb-4">
                <div className="font-bold">Advanced</div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <span className="text-sm">Sync user profile attributes at each login</span>
                  <input type="checkbox" checked={advanced} onChange={() => setAdvanced(!advanced)} className="toggle-checkbox" />
                  <span className={`w-10 h-6 flex items-center bg-gray-200 rounded-full p-1 duration-300 ease-in-out ${advanced ? 'bg-green-400' : ''}`}></span>
                </label>
              </div>
              {/* Create Button */}
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mt-2">Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Step: setup (form)
  return (
    <div className="min-h-screen bg-white w-screen">
      <div className="max-w-6xl pt-14 pb-0 px-8">
        <button className="bg-white flex items-center text-gray-600 text-sm mb-6 hover:underline" onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/connections/social')}>
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mr-1"><path d="M15 19l-7-7 7-7" /></svg>
          Social Connections
        </button>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">New Social Connection</h1>
        <input
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 bg-white mb-8 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search for Social Connections"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((item) => {
            const name = item.name || item.partner?.display_name || '';
            const desc = item.short_description || item.description || '';
            const logo = item.logo || item.partner?.logo;
            const added = alreadyAdded.includes(item.catalog_id);
            return (
              <div
                key={item.catalog_id}
                className={`rounded-xl border border-gray-200 bg-white p-6 flex flex-col gap-2 relative ${added ? 'opacity-60' : 'hover:shadow-lg transition-shadow duration-200 cursor-pointer'}`}
                onClick={() => !added && navigate(`/dashboard/au/dev-1md8m8doz8ynfucb/connections/social/create/${item.catalog_id}`)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <img src={logo} alt={name} className="w-10 h-10 object-contain rounded" />
                  <div>
                    <div className="text-lg font-semibold text-gray-900 leading-tight">{name}</div>
                    <div className="text-xs text-gray-500 font-medium tracking-widest">SOCIAL CONNECTIONS</div>
                  </div>
                  {added && <span className="ml-auto px-3 py-1 rounded bg-gray-100 text-gray-400 text-xs font-semibold">ADDED</span>}
                </div>
                <div className="text-gray-500 text-sm line-clamp-2">{desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 