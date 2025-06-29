import React, { useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import { useNavigate } from 'react-router-dom';

const apiData = {
  id: '679657da55b41ef859333806',
  name: 'Auth0 Management API',
  subtitle: 'System API',
  identifier: 'https://dev-1md8m8doz8ynfucb.au.auth0.com/api/v2/',
};

const tabs = [
  'Quickstart',
  'Settings',
  'Permissions',
  'Machine To Machine Applications',
  'Test',
  'API Explorer',
];

const permissions = [
  { perm: 'read:client_grants', desc: 'Read Client Grants' },
  { perm: 'create:client_grants', desc: 'Create Client Grants' },
  { perm: 'delete:client_grants', desc: 'Delete Client Grants' },
  { perm: 'update:client_grants', desc: 'Update Client Grants' },
  { perm: 'read:users', desc: 'Read Users' },
  { perm: 'update:users', desc: 'Update Users' },
  { perm: 'delete:users', desc: 'Delete Users' },
  { perm: 'create:users', desc: 'Create Users' },
  { perm: 'read:users_app_metadata', desc: 'Read Users App Metadata' },
  { perm: 'update:users_app_metadata', desc: 'Update Users App Metadata' },
  { perm: 'delete:users_app_metadata', desc: 'Delete Users App Metadata' },
  { perm: 'create:users_app_metadata', desc: 'Create Users App Metadata' },
  { perm: 'read:user_custom_blocks', desc: 'Read Custom User Blocks' },
  { perm: 'create:user_custom_blocks', desc: 'Create Custom User Blocks' },
  { perm: 'delete:user_custom_blocks', desc: 'Delete Custom User Blocks' },
  { perm: 'create:user_tickets', desc: 'Create User Tickets' },
  { perm: 'read:clients', desc: 'Read Clients' },
  { perm: 'update:clients', desc: 'Update Clients' },
  { perm: 'delete:clients', desc: 'Delete Clients' },
  { perm: 'create:clients', desc: 'Create Clients' },
  { perm: 'read:client_keys', desc: 'Read Client Keys' },
  { perm: 'update:client_keys', desc: 'Update Client Keys' },
  { perm: 'delete:client_keys', desc: 'Delete Client Keys' },
  { perm: 'create:client_keys', desc: 'Create Client Keys' },
  { perm: 'read:client_credentials', desc: 'Read Client Credentials' },
  { perm: 'update:client_credentials', desc: 'Update Client Credentials' },
  { perm: 'delete:client_credentials', desc: 'Delete Client Credentials' },
  { perm: 'create:client_credentials', desc: 'Create Client Credentials' },
  { perm: 'read:connections', desc: 'Read Connections' },
  { perm: 'update:connections', desc: 'Update Connections' },
  { perm: 'delete:connections', desc: 'Delete Connections' },
  { perm: 'create:connections', desc: 'Create Connections' },
  { perm: 'read:resource_servers', desc: 'Read Resource Servers' },
  { perm: 'update:resource_servers', desc: 'Update Resource Servers' },
  { perm: 'delete:resource_servers', desc: 'Delete Resource Servers' },
  { perm: 'create:resource_servers', desc: 'Create Resource Servers' },
  { perm: 'read:device_credentials', desc: 'Read Device Credentials' },
  { perm: 'update:device_credentials', desc: 'Update Device Credentials' },
  { perm: 'delete:device_credentials', desc: 'Delete Device Credentials' },
  { perm: 'create:device_credentials', desc: 'Create Device Credentials' },
  { perm: 'read:rules', desc: 'Read Rules' },
  { perm: 'update:rules', desc: 'Update Rules' },
  { perm: 'delete:rules', desc: 'Delete Rules' },
  { perm: 'create:rules', desc: 'Create Rules' },
  { perm: 'read:rules_configs', desc: 'Read Rules Configs' },
  { perm: 'update:rules_configs', desc: 'Update Rules Configs' },
  { perm: 'delete:rules_configs', desc: 'Delete Rules Configs' },
  { perm: 'read:hooks', desc: 'Read Hooks' },
  { perm: 'update:hooks', desc: 'Update Hooks' },
  { perm: 'delete:hooks', desc: 'Delete Hooks' },
  { perm: 'create:hooks', desc: 'Create Hooks' },
  { perm: 'read:actions', desc: 'Read Actions' },
  { perm: 'update:actions', desc: 'Update Actions' },
  { perm: 'delete:actions', desc: 'Delete Actions' },
  { perm: 'create:actions', desc: 'Create Actions' },
  { perm: 'read:email_provider', desc: 'Read Email Provider' },
  { perm: 'update:email_provider', desc: 'Update Email Provider' },
  { perm: 'delete:email_provider', desc: 'Delete Email Provider' },
  { perm: 'create:email_provider', desc: 'Create Email Provider' },
  { perm: 'blacklist:tokens', desc: 'Blacklist Tokens' },
  { perm: 'read:stats', desc: 'Read Stats' },
  { perm: 'read:insights', desc: 'Read Insights' },
  { perm: 'read:tenant_settings', desc: 'Read Tenant Settings' },
  { perm: 'update:tenant_settings', desc: 'Update Tenant Settings' },
  { perm: 'read:logs', desc: 'Read Logs' },
  { perm: 'read:logs_users', desc: 'Read logs relating to users' },
  { perm: 'read:shields', desc: 'Read Shields' },
  { perm: 'create:shields', desc: 'Create Shields' },
  { perm: 'update:shields', desc: 'Update Shields' },
  { perm: 'delete:shields', desc: 'Delete Shields' },
  { perm: 'read:anomaly_blocks', desc: 'Read Anomaly Detection Blocks' },
  { perm: 'delete:anomaly_blocks', desc: 'Delete Anomaly Detection Blocks' },
  { perm: 'update:triggers', desc: 'Update Triggers' },
  { perm: 'read:triggers', desc: 'Read Triggers' },
  { perm: 'read:grants', desc: 'Read User Grants' },
  { perm: 'delete:grants', desc: 'Delete User Grants' },
  { perm: 'read:guardian_factors', desc: 'Read Guardian factors configuration' },
  { perm: 'update:guardian_factors', desc: 'Update Guardian factors' },
  { perm: 'read:guardian_enrollments', desc: 'Read Guardian enrollments' },
  { perm: 'delete:guardian_enrollments', desc: 'Delete Guardian enrollments' },
  { perm: 'create:guardian_enrollment_tickets', desc: 'Create enrollment tickets for Guardian' },
  { perm: 'read:user_idp_tokens', desc: 'Read Users IDP tokens' },
  { perm: 'create:passwords_checking_job', desc: 'Create password checking jobs' },
  { perm: 'delete:passwords_checking_job', desc: 'Deletes password checking job and all its resources' },
  { perm: 'read:custom_domains', desc: 'Read custom domains configurations' },
  { perm: 'delete:custom_domains', desc: 'Delete custom domains configurations' },
  { perm: 'create:custom_domains', desc: 'Configure new custom domains' },
  { perm: 'update:custom_domains', desc: 'Update custom domain configurations' },
  { perm: 'read:email_templates', desc: 'Read email templates' },
  { perm: 'create:email_templates', desc: 'Create email templates' },
  { perm: 'update:email_templates', desc: 'Update email templates' },
  { perm: 'read:mfa_policies', desc: 'Read Multifactor Authentication policies' },
  { perm: 'update:mfa_policies', desc: 'Update Multifactor Authentication policies' },
  { perm: 'read:roles', desc: 'Read roles' },
  { perm: 'create:roles', desc: 'Create roles' },
  { perm: 'delete:roles', desc: 'Delete roles' },
  { perm: 'update:roles', desc: 'Update roles' },
  { perm: 'read:prompts', desc: 'Read prompts settings' },
  { perm: 'update:prompts', desc: 'Update prompts settings' },
  { perm: 'read:branding', desc: 'Read branding settings' },
  { perm: 'update:branding', desc: 'Update branding settings' },
  { perm: 'delete:branding', desc: 'Delete branding settings' },
  { perm: 'read:log_streams', desc: 'Read log_streams' },
  { perm: 'create:log_streams', desc: 'Create log_streams' },
  { perm: 'delete:log_streams', desc: 'Delete log_streams' },
  { perm: 'update:log_streams', desc: 'Update log_streams' },
  { perm: 'create:signing_keys', desc: 'Create signing keys' },
  { perm: 'read:signing_keys', desc: 'Read signing keys' },
  { perm: 'update:signing_keys', desc: 'Update signing keys' },
  { perm: 'read:limits', desc: 'Read entity limits' },
  { perm: 'update:limits', desc: 'Update entity limits' },
  { perm: 'create:role_members', desc: 'Create role members' },
  { perm: 'read:role_members', desc: 'Read role members' },
  { perm: 'delete:role_members', desc: 'Update role members' },
  { perm: 'read:entitlements', desc: 'Read entitlements' },
  { perm: 'read:attack_protection', desc: 'Read attack protection' },
  { perm: 'update:attack_protection', desc: 'Update attack protection' },
  { perm: 'read:organizations_summary', desc: 'Read organization summary' },
  { perm: 'create:authentication_methods', desc: 'Create Authentication Methods' },
  { perm: 'read:authentication_methods', desc: 'Read Authentication Methods' },
  { perm: 'update:authentication_methods', desc: 'Update Authentication Methods' },
  { perm: 'delete:authentication_methods', desc: 'Delete Authentication Methods' },
  { perm: 'read:organizations', desc: 'Read Organizations' },
  { perm: 'update:organizations', desc: 'Update Organizations' },
  { perm: 'create:organizations', desc: 'Create Organizations' },
  { perm: 'delete:organizations', desc: 'Delete Organizations' },
  { perm: 'create:organization_members', desc: 'Create organization members' },
  { perm: 'read:organization_members', desc: 'Read organization members' },
  { perm: 'delete:organization_members', desc: 'Delete organization members' },
  { perm: 'create:organization_connections', desc: 'Create organization connections' },
  { perm: 'read:organization_connections', desc: 'Read organization connections' },
  { perm: 'update:organization_connections', desc: 'Update organization connections' },
  { perm: 'delete:organization_connections', desc: 'Delete organization connections' },
  { perm: 'create:organization_member_roles', desc: 'Create organization member roles' },
  { perm: 'read:organization_member_roles', desc: 'Read organization member roles' },
  { perm: 'delete:organization_member_roles', desc: 'Delete organization member roles' },
  { perm: 'create:organization_invitations', desc: 'Create organization invitations' },
  { perm: 'read:organization_invitations', desc: 'Read organization invitations' },
  { perm: 'delete:organization_invitations', desc: 'Delete organization invitations' },
  { perm: 'read:scim_config', desc: 'Read SCIM configuration' },
  { perm: 'create:scim_config', desc: 'Create SCIM configuration' },
  { perm: 'update:scim_config', desc: 'Update SCIM configuration' },
  { perm: 'delete:scim_config', desc: 'Delete SCIM configuration' },
  { perm: 'create:scim_token', desc: 'Create SCIM token' },
  { perm: 'read:scim_token', desc: 'Read SCIM token' },
  { perm: 'delete:scim_token', desc: 'Delete SCIM token' },
  { perm: 'delete:phone_providers', desc: 'Delete a Phone Notification Provider' },
  { perm: 'create:phone_providers', desc: 'Create a Phone Notification Provider' },
  { perm: 'read:phone_providers', desc: 'Read a Phone Notification Provider' },
  { perm: 'update:phone_providers', desc: 'Update a Phone Notification Provider' },
  { perm: 'delete:phone_templates', desc: 'Delete a Phone Notification Template' },
  { perm: 'create:phone_templates', desc: 'Create a Phone Notification Template' },
  { perm: 'read:phone_templates', desc: 'Read a Phone Notification Template' },
  { perm: 'update:phone_templates', desc: 'Update a Phone Notification Template' },
  { perm: 'create:encryption_keys', desc: 'Create encryption keys' },
  { perm: 'read:encryption_keys', desc: 'Read encryption keys' },
  { perm: 'update:encryption_keys', desc: 'Update encryption keys' },
  { perm: 'delete:encryption_keys', desc: 'Delete encryption keys' },
  { perm: 'read:sessions', desc: 'Read Sessions' },
  { perm: 'delete:sessions', desc: 'Delete Sessions' },
  { perm: 'read:refresh_tokens', desc: 'Read Refresh Tokens' },
  { perm: 'delete:refresh_tokens', desc: 'Delete Refresh Tokens' },
  { perm: 'create:self_service_profiles', desc: 'Create Self Service Profiles' },
  { perm: 'read:self_service_profiles', desc: 'Read Self Service Profiles' },
  { perm: 'update:self_service_profiles', desc: 'Update Self Service Profiles' },
  { perm: 'delete:self_service_profiles', desc: 'Delete Self Service Profiles' },
  { perm: 'create:sso_access_tickets', desc: 'Create SSO Access Tickets' },
  { perm: 'delete:sso_access_tickets', desc: 'Delete SSO Access Tickets' },
  { perm: 'read:forms', desc: 'Read Forms' },
  { perm: 'update:forms', desc: 'Update Forms' },
  { perm: 'delete:forms', desc: 'Delete Forms' },
  { perm: 'create:forms', desc: 'Create Forms' },
  { perm: 'read:flows', desc: 'Read Flows' },
  { perm: 'update:flows', desc: 'Update Flows' },
  { perm: 'delete:flows', desc: 'Delete Flows' },
  { perm: 'create:flows', desc: 'Create Flows' },
  { perm: 'read:flows_vault', desc: 'Read Flows Vault items' },
  { perm: 'read:flows_vault_connections', desc: 'Read Flows Vault connections' },
  { perm: 'update:flows_vault_connections', desc: 'Update Flows Vault connections' },
  { perm: 'delete:flows_vault_connections', desc: 'Delete Flows Vault connections' },
  { perm: 'create:flows_vault_connections', desc: 'Create Flows Vault connections' },
  { perm: 'read:flows_executions', desc: 'Read Flows Executions' },
  { perm: 'delete:flows_executions', desc: 'Delete Flows Executions' },
  { perm: 'read:connections_options', desc: 'Read Connections Options' },
  { perm: 'update:connections_options', desc: 'Update Connections Options' },
  { perm: 'read:self_service_profile_custom_texts', desc: 'Read Self Service Profile Custom Texts' },
  { perm: 'update:self_service_profile_custom_texts', desc: 'Update Self Service Profile Custom Texts' },
  { perm: 'create:network_acls', desc: 'Create Network ACLs' },
  { perm: 'update:network_acls', desc: 'Update Network ACLs' },
  { perm: 'read:network_acls', desc: 'Read Network ACLs' },
  { perm: 'delete:network_acls', desc: 'Delete Network ACLs' },
  { perm: 'delete:vdcs_templates', desc: 'Delete Verifiable Digital Credential Templates' },
  { perm: 'read:vdcs_templates', desc: 'Read Verifiable Digital Credential Templates' },
  { perm: 'create:vdcs_templates', desc: 'Create Verifiable Digital Credential Templates' },
  { perm: 'update:vdcs_templates', desc: 'Update Verifiable Digital Credential Templates' },
  { perm: 'create:custom_signing_keys', desc: 'Create Customer Provided Public Signing Keys' },
  { perm: 'read:custom_signing_keys', desc: 'Read Customer Provided Public Signing Keys' },
  { perm: 'update:custom_signing_keys', desc: 'Update Customer Provided Public Signing Keys' },
  { perm: 'delete:custom_signing_keys', desc: 'Delete Customer Provided Public Signing Keys' },
  { perm: 'read:federated_connections_tokens', desc: 'List Federated Connections Tokensets belonging to a user' },
  { perm: 'delete:federated_connections_tokens', desc: 'Delete Federated Connections Tokensets belonging to a user' },
  { perm: 'create:user_attribute_profiles', desc: 'Create User Attribute Profiles' },
  { perm: 'read:user_attribute_profiles', desc: 'Read User Attribute Profiles' },
  { perm: 'update:user_attribute_profiles', desc: 'Update User Attribute Profiles' },
  { perm: 'delete:user_attribute_profiles', desc: 'Delete User Attribute Profiles' },
  { perm: 'read:event_streams', desc: 'Read event streams' },
  { perm: 'create:event_streams', desc: 'Create event streams' },
  { perm: 'delete:event_streams', desc: 'Delete event streams' },
  { perm: 'update:event_streams', desc: 'Update event streams' },
  { perm: 'read:event_deliveries', desc: 'Read event stream deliveries' },
  { perm: 'update:event_deliveries', desc: 'Redeliver event(s) to an event stream' },
  { perm: 'create:connection_profiles', desc: 'Create Connection Profiles' },
  { perm: 'read:connection_profiles', desc: 'Read Connection Profiles' },
  { perm: 'update:connection_profiles', desc: 'Update Connection Profiles' },
  { perm: 'delete:connection_profiles', desc: 'Delete Connection Profiles' },
  { perm: 'read:organization_client_grants', desc: 'Read Organization Client Grants' },
  { perm: 'create:organization_client_grants', desc: 'Create Organization Client Grants' },
  { perm: 'delete:organization_client_grants', desc: 'Delete Organization Client Grants' },
  { perm: 'read:connections_keys', desc: 'Read connection keys' },
  { perm: 'update:connections_keys', desc: 'Update connection keys' },
  { perm: 'create:connections_keys', desc: 'Create connection keys' },
];

const m2mApps = [
  { name: 'Auth0 Management API (Test Application)', clientId: 'Tn9FmVOVKsmLnHDd5tUL0YtsfMcS1hL5', authorized: true },
  { name: 'My App', clientId: 'iKysfeiLlWthen86y0dM3ylp8qvOibJi', authorized: false },
];

const ApiSettings = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('Settings');
  const [m2mFilter, setM2mFilter] = useState('');
  const [tokenTab, setTokenTab] = useState('CURL');
  const [apiTokenCopied, setApiTokenCopied] = useState(false);
  const [testApp, setTestApp] = useState(m2mApps[0].name);
  const [tokenExpiration, setTokenExpiration] = useState('86400');
  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard.writeText(apiData.identifier);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  const handleApiTokenCopy = () => {
    setApiTokenCopied(true);
    setTimeout(() => setApiTokenCopied(false), 1200);
  };

  // Tambahkan kode untuk setiap bahasa
  const tokenCodeSamples = {
    'CURL': `curl --request POST \
--url https://dev-1md8m8doz8ynfucb.au.auth0.com/oauth/token \
--header 'content-type: application/json' \
--data '{
  "client_id": "Tn9FmVOVKsmLnHDd5tUL0YtsfMcS1hL5",
  "client_secret": "...",
  "audience": "https://dev-1md8m8doz8ynfucb.au.auth0.com/api/v2/",
  "grant_type": "client_credentials"
}'`,
    'C#': `var client = new RestClient("https://dev-1md8m8doz8ynfucb.au.auth0.com/oauth/token");
var request = new RestRequest(Method.POST);
request.AddHeader("content-type", "application/json");
request.AddParameter("application/json", "{\"client_id\":\"Tn9FmVOVKsmLnHDd5tUL0YtsfMcS1hL5\",\"client_secret\":\"...\",\"audience\":\"https://dev-1md8m8doz8ynfucb.au.auth0.com/api/v2/\",\"grant_type\":\"client_credentials\"}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);`,
    'Go': `package main
import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)
func main() {
  url := "https://dev-1md8m8doz8ynfucb.au.auth0.com/oauth/token"
  payload := strings.NewReader("{\"client_id\":\"Tn9FmVOVKsmLnHDd5tUL0YtsfMcS1hL5\",\"client_secret\":\"...\",\"audience\":\"https://dev-1md8m8doz8ynfucb.au.auth0.com/api/v2/\",\"grant_type\":\"client_credentials\"}")
  req, _ := http.NewRequest("POST", url, payload)
  req.Header.Add("content-type", "application/json")
  res, _ := http.DefaultClient.Do(req)
  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)
  fmt.Println(res)
  fmt.Println(string(body))
}`,
    'Java': `HttpResponse<String> response = Unirest.post("https://dev-1md8m8doz8ynfucb.au.auth0.com/oauth/token")
  .header("content-type", "application/json")
  .body("{\"client_id\":\"Tn9FmVOVKsmLnHDd5tUL0YtsfMcS1hL5\",\"client_secret\":\"...\",\"audience\":\"https://dev-1md8m8doz8ynfucb.au.auth0.com/api/v2/\",\"grant_type\":\"client_credentials\"}")
  .asString();`,
    'Node.JS': `async function getToken() {
  try {
    const response = await fetch('https://dev-1md8m8doz8ynfucb.au.auth0.com/oauth/token', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        "client_id": "Tn9FmVOVKsmLnHDd5tUL0YtsfMcS1hL5",
        "client_secret": "...",
        "audience": "https://dev-1md8m8doz8ynfucb.au.auth0.com/api/v2/",
        "grant_type": "client_credentials"
      }),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching token:', error);
  }
}`,
    'PHP': `$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://dev-1md8m8doz8ynfucb.au.auth0.com/oauth/token",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"client_id\":\"Tn9FmVOVKsmLnHDd5tUL0YtsfMcS1hL5\",\"client_secret\":\"...\",\"audience\":\"https://dev-1md8m8doz8ynfucb.au.auth0.com/api/v2/\",\"grant_type\":\"client_credentials\"}",
  CURLOPT_HTTPHEADER => array("content-type: application/json"),
));
$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);
if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}`,
    'Python': `import http.client
conn = http.client.HTTPSConnection("dev-1md8m8doz8ynfucb.au.auth0.com")
payload = "{\"client_id\":\"Tn9FmVOVKsmLnHDd5tUL0YtsfMcS1hL5\",\"client_secret\":\"...\",\"audience\":\"https://dev-1md8m8doz8ynfucb.au.auth0.com/api/v2/\",\"grant_type\":\"client_credentials\"}"
headers = { 'content-type': "application/json" }
conn.request("POST", "/oauth/token", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))`,
    'Ruby': `require 'uri'
require 'net/http'
url = URI("https://dev-1md8m8doz8ynfucb.au.auth0.com/oauth/token")
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE
request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'
request.body = "{\"client_id\":\"Tn9FmVOVKsmLnHDd5tUL0YtsfMcS1hL5\",\"client_secret\":\"...\",\"audience\":\"https://dev-1md8m8doz8ynfucb.au.auth0.com/api/v2/\",\"grant_type\":\"client_credentials\"}"
response = http.request(request)
puts response.read_body`
  };
  const sendTokenSamples = {
    'CURL': `curl --request GET \
--url http://path_to_your_api/ \
--header 'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...'
`,
    'C#': `// C# example for sending token to API`,
    'Go': `// Go example for sending token to API`,
    'Java': `// Java example for sending token to API`,
    'Node.JS': `// Node.JS example for sending token to API`,
    'PHP': `// PHP example for sending token to API`,
    'Python': `# Python example for sending token to API`,
    'Ruby': `# Ruby example for sending token to API`,
  };

  // Tab Content
  let tabContent: React.ReactNode = null;
  if (activeTab === 'Quickstart') {
    tabContent = (
      <div>
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded px-4 py-3 mb-8 flex items-center">
          <svg className="w-5 h-5 mr-3 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01" /></svg>
          This API represents an Auth0 entity as is ready to be consumed without further configuration. You can see some examples on how to do so under the <a href="#" className="underline text-blue-700 ml-1">Test Tab</a>.
        </div>
      </div>
    );
  } else if (activeTab === 'Settings') {
    tabContent = (
      <div>
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded px-4 py-3 mb-8 flex items-center">
          <svg className="w-5 h-5 mr-3 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01" /></svg>
          This API represents an Auth0 entity and cannot be modified or deleted. You can still authorize applications to consume this API.
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">General Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Id</label>
              <input type="text" value={apiData.id} readOnly className="w-full px-4 py-2 border border-gray-200 rounded bg-gray-100 text-gray-700 mb-4" />
              <span className="text-gray-500 text-xs">The API id on our system. Useful if you prefer to work directly with Auth0's Management API instead.</span>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Name *</label>
              <input type="text" value={apiData.name} readOnly className="w-full px-4 py-2 border border-gray-200 rounded bg-gray-100 text-gray-700 mb-4" />
              <span className="text-gray-500 text-xs">A friendly name for the API. The following characters are not allowed &lt; &gt;</span>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-medium mb-1">Identifier</label>
              <div className="flex items-center">
                <input type="text" value={apiData.identifier} readOnly className="w-full px-4 py-2 border border-gray-200 rounded bg-gray-100 text-gray-700" />
                <button onClick={handleCopy} className="ml-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-500 hover:text-blue-600 p-2 rounded" title="Copy identifier">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15V5a2 2 0 012-2h10" /></svg>
                </button>
              </div>
              <span className="text-gray-500 text-xs">Unique identifier for the API. This value will be used as the <span className="bg-gray-100 px-1 rounded font-mono">audience</span> parameter on authorization calls.</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Access Token Expiration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Maximum Access Token Lifetime *</label>
              <input type="text" value="86400" readOnly className="w-full px-4 py-2 border border-gray-200 rounded bg-gray-100 text-gray-700 mb-4" />
              <span className="text-gray-500 text-xs">Time until an <span className="bg-gray-100 px-1 rounded font-mono">access token</span> issued for this API will expire.</span>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Implicit / Hybrid Flow Access Token Lifetime *</label>
              <input type="text" value="7200" readOnly className="w-full px-4 py-2 border border-gray-200 rounded bg-gray-100 text-gray-700 mb-4" />
              <span className="text-gray-500 text-xs">Time until an <span className="bg-gray-100 px-1 rounded font-mono">access token</span> issued for this API, using either the implicit or hybrid flow, will expire. Cannot exceed the maximum access token lifetime.</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Access Token Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">JSON Web Token (JWT) Profile</label>
              <input type="text" value="Auth0" readOnly className="w-full px-4 py-2 border border-gray-200 rounded bg-gray-100 text-gray-700 mb-2" />
              <span className="text-gray-500 text-xs">Profile used when issuing <span className="bg-gray-100 px-1 rounded font-mono">access tokens</span> for this API.<br /><a href="#" className="text-blue-600 underline">Learn more about token profiles</a></span>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">JSON Web Token (JWT) Signing Algorithm</label>
              <input type="text" value="RS256" readOnly className="w-full px-4 py-2 border border-gray-200 rounded bg-gray-100 text-gray-700 mb-2" />
              <span className="text-gray-500 text-xs">Algorithm used to sign <span className="bg-gray-100 px-1 rounded font-mono">access tokens</span> issued for this API.<br /><a href="#" className="text-blue-600 underline">Learn more about signing algorithms</a></span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Access Settings</h2>
          <div className="flex items-center gap-8">
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-medium mb-1">Allow Skipping User Consent</label>
              <div className="flex items-center mt-2">
                <input type="checkbox" className="toggle toggle-md" disabled />
                <span className="ml-3 text-gray-500 text-sm">If this setting is enabled, this API will skip user consent for applications flagged as First Party.</span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  } else if (activeTab === 'Permissions') {
    tabContent = (
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">List of Permissions</h2>
        <p className="text-gray-600 mb-6">These are all the permissions that this API uses.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th className="text-left text-xs font-semibold text-gray-700 pb-2">Permission</th>
                <th className="text-left text-xs font-semibold text-gray-700 pb-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {permissions.map((p) => (
                <tr key={p.perm}>
                  <td className="align-top py-1"><span className="bg-gray-100 border border-gray-200 rounded px-2 py-1 text-xs font-mono text-gray-600 select-all">{p.perm}</span></td>
                  <td className="align-top py-1 text-gray-700 text-sm">{p.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (activeTab === 'Machine To Machine Applications') {
    tabContent = (
      <div className="mb-8">
        <p className="mb-4 text-gray-700">Here is a list of your Machine to Machine Applications. You can authorize these to request access tokens for this API by executing a <a href="#" className="text-blue-600 underline">client credentials exchange</a>.<br />
        Single Page and Native apps do not require further configuration. They both can execute <a href="#" className="text-blue-600 underline">Authorization Code Flow with PKCE</a>.</p>
        <input
          type="text"
          placeholder="Filter by Application Name or Client ID"
          className="w-full mb-6 px-4 py-2 border border-gray-200 rounded text-gray-900 placeholder-gray-400 bg-white"
          value={m2mFilter}
          onChange={e => setM2mFilter(e.target.value)}
        />
        <div className="divide-y divide-gray-200 bg-white rounded-lg border border-gray-200">
          {m2mApps.filter(app => app.name.toLowerCase().includes(m2mFilter.toLowerCase()) || app.clientId.toLowerCase().includes(m2mFilter.toLowerCase())).map(app => (
            <div key={app.clientId} className="flex items-center justify-between px-6 py-4">
              <div>
                <a href="#" className="text-blue-700 font-medium hover:underline text-base">{app.name}</a>
                <div className="text-gray-500 text-xs mt-1">Client Id: <span className="font-mono bg-gray-100 px-1 rounded">{app.clientId}</span></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-xs mr-2">{app.authorized ? 'Authorized' : 'Unauthorized'}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={app.authorized} readOnly className="sr-only peer" />
                  <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${app.authorized ? 'peer-checked:bg-green-500' : 'peer-checked:bg-gray-300'}`}></div>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (activeTab === 'Test') {
    tabContent = (
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Asking Auth0 for tokens from my application</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">Select the application you would like to test</label>
          <select value={testApp} onChange={e => setTestApp(e.target.value)} className="w-full max-w-md px-4 py-2 border border-gray-200 rounded text-gray-900 bg-white">
            {m2mApps.map(app => <option key={app.name}>{app.name}</option>)}
          </select>
        </div>
        <div className="flex gap-2 mb-2 border-b border-gray-200">
          {Object.keys(tokenCodeSamples).map(tab => (
            <button key={tab} onClick={() => setTokenTab(tab)} className={`px-3 py-1 rounded-t border-b-2 font-mono text-sm ${tokenTab === tab ? 'border-blue-600 text-blue-600 bg-white' : 'border-transparent text-gray-500 bg-white hover:text-blue-600'}`}>{tab}</button>
          ))}
        </div>
        <div className="bg-black text-white font-mono rounded-lg p-4 mb-4 overflow-x-auto text-sm relative">
          <button onClick={handleApiTokenCopy} className="absolute top-2 right-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-500 hover:text-blue-600 p-2 rounded" title="Copy code">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15V5a2 2 0 012-2h10" /></svg>
          </button>
          {apiTokenCopied && <span className="absolute top-2 right-12 text-xs text-green-400">Copied!</span>}
          <pre className="whitespace-pre-wrap">{tokenCodeSamples[tokenTab]}</pre>
        </div>
        <p className="text-gray-700 mb-2 text-sm">In this example, <span className="bg-gray-100 px-1 rounded font-mono">client_id</span> and <span className="bg-gray-100 px-1 rounded font-mono">client_secret</span> are the ones from the {testApp} application. You can change this values with any from your other authorized applications.</p>
        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-2">Response</h3>
        <div className="bg-black text-white font-mono rounded-lg p-4 mb-4 overflow-x-auto text-sm relative">
          <button onClick={handleApiTokenCopy} className="absolute top-2 right-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-500 hover:text-blue-600 p-2 rounded" title="Copy code">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15V5a2 2 0 012-2h10" /></svg>
          </button>
          {apiTokenCopied && <span className="absolute top-2 right-12 text-xs text-green-400">Copied!</span>}
          {`{
  "access_token": "eyJ...",
  "token_type": "Bearer"
}`}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-2">Sending the token to the API</h3>
        <p className="text-gray-700 mb-2 text-sm">You can use this <span className="bg-gray-100 px-1 rounded font-mono">bearer token</span> with an <span className="bg-gray-100 px-1 rounded font-mono">Authorization Header</span> in your request to obtain authorized access to your API.</p>
        <div className="flex gap-2 mb-2 border-b border-gray-200">
          {Object.keys(sendTokenSamples).map(tab => (
            <button key={tab} onClick={() => setTokenTab(tab)} className={`px-3 py-1 rounded-t border-b-2 font-mono text-sm ${tokenTab === tab ? 'border-blue-600 text-blue-600 bg-white' : 'border-transparent text-gray-500 bg-white hover:text-blue-600'}`}>{tab}</button>
          ))}
        </div>
        <div className="bg-black text-white font-mono rounded-lg p-4 mb-4 overflow-x-auto text-sm relative">
          <button onClick={handleApiTokenCopy} className="absolute top-2 right-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-500 hover:text-blue-600 p-2 rounded" title="Copy code">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15V5a2 2 0 012-2h10" /></svg>
          </button>
          {apiTokenCopied && <span className="absolute top-2 right-12 text-xs text-green-400">Copied!</span>}
          <pre className="whitespace-pre-wrap">{sendTokenSamples[tokenTab]}</pre>
        </div>
      </div>
    );
  } else if (activeTab === 'API Explorer') {
    tabContent = (
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Token</h2>
        <div className="bg-black text-white font-mono rounded-lg p-4 mb-4 overflow-x-auto text-sm relative">
          <button onClick={handleApiTokenCopy} className="absolute top-2 right-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-500 hover:text-blue-600 p-2 rounded" title="Copy token">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15V5a2 2 0 012-2h10" /></svg>
          </button>
          {apiTokenCopied && <span className="absolute top-2 right-12 text-xs text-green-400">Copied!</span>}
          eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9... (token)
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">Token Expiration (Seconds) *</label>
          <input type="text" value={tokenExpiration} onChange={e => setTokenExpiration(e.target.value)} className="w-full max-w-xs px-4 py-2 border border-gray-200 rounded bg-white text-gray-900 mb-2" />
          <button className="ml-2 px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700">Save</button>
          <div className="text-gray-500 text-xs mt-1">Expiration value for every token generated for this API.</div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-2">Using this token in the API Explorer</h3>
        <ol className="list-decimal list-inside text-gray-700 mb-2 text-sm">
          <li>Go to the <a href="#" className="text-blue-600 underline">Management API Explorer</a>.</li>
          <li>Click the <span className="bg-gray-100 px-1 rounded font-mono">Set API Token</span> button at the top left.</li>
          <li>Set the API token by pasting the API Token that you copied in the first step.</li>
          <li>Click the <span className="bg-gray-100 px-1 rounded font-mono">Set Token</span> button.</li>
        </ol>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-screen bg-gray-50">
      <div className="flex-1 min-w-0 relative">
        <main className="w-full h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-12 py-10">
            <button onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/apis')} className="flex items-center bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 hover:text-blue-700 mb-6 text-sm px-4 py-2 rounded shadow-none">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              Back to APIs
            </button>
            <div className="flex items-center mb-2">
              <span className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded mr-6">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
              </span>
              <div>
                <h1 className="text-3xl font-semibold text-gray-900 mb-1">{apiData.name}</h1>
                <div className="flex items-center gap-4">
                  <span className="text-gray-500 text-base">{apiData.subtitle}</span>
                  <span className="text-gray-500 text-base">Identifier</span>
                  <span className="bg-gray-100 border border-gray-200 rounded px-2 py-1 text-xs font-mono text-gray-600 select-all mr-2">{apiData.identifier}</span>
                  <button onClick={handleCopy} className="ml-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-500 hover:text-blue-600 p-2 rounded" title="Copy identifier">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15V5a2 2 0 012-2h10" /></svg>
                  </button>
                  {copied && <span className="ml-2 text-xs text-green-600">Copied!</span>}
                </div>
              </div>
            </div>
            <div className="border-b border-gray-200 mt-6 mb-8">
              <div className="flex gap-2">
                {tabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-3 px-5 text-sm font-medium relative rounded-t-lg ${tab === activeTab ? 'text-blue-600 bg-white border-t border-l border-r border-gray-200' : 'text-gray-500 hover:text-blue-600 bg-white'}`}
                  >
                    {tab}
                    {tab === activeTab && (<div className="absolute -bottom-px left-0 right-0 h-0.5 bg-blue-600" />)}
                  </button>
                ))}
              </div>
            </div>
            {tabContent}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ApiSettings; 