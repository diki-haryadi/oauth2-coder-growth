import React from 'react';
// @ts-ignore
import MonacoEditor from 'react-monaco-editor';

const TEMPLATES = [
  'Verification Email (Link)',
  'Verification Email (Code)',
  'Welcome Email',
  'Enroll in Multifactor Authentication',
  'Change Password (Link)',
  'Change Password (Code)',
  'Blocked Account Email',
  'Password Breach Alert',
  'Verification Code for Email MFA',
  'User Invitation',
];

const TEMPLATE_DATA = {
  'Verification Email (Link)': {
    desc: 'This email will be sent whenever a user signs up or logs in for the first time. When the user follows the verification link, an email_verified flag will be set in the user\'s profile. @url@ (or {{ url }}) is a placeholder for this link.',
    subject: 'Verify your email address',
    message: `<!DOCTYPE html>\n<html><body>Click the link to verify your email: <a href=\"{{ url }}\">Verify</a></body></html>`
  },
  'Verification Email (Code)': {
    desc: 'This email will be sent in scenarios where the user needs to prove they have access to the email on file for an account: (1) You have enabled the code-based email verification flow, and a user signs up or logs into the account for the first time. (2) You have enabled the Adaptive MFA policy and there is a low-confidence transaction for which account ownership must be verified. The email will include a code that users will need to enter during the authentication. {{ code }} is a <a href="#" class="text-blue-700 underline">Liquid placeholder</a> for this code.',
    subject: 'Your verification code',
    message: `<!DOCTYPE html>\n<html><body>Your verification code is: <b>{{ code }}</b></body></html>`
  },
  'Welcome Email': {
    desc: 'This email is sent to users when they create a new account. You can use this to welcome them to your application.',
    subject: 'Welcome to {{ application.name }}!',
    message: `<!DOCTYPE html>\n<html><body>Welcome to our app, {{ user.email }}!</body></html>`
  },
  'Enroll in Multifactor Authentication': {
    desc: 'This email is sent when a user enrolls in multifactor authentication.',
    subject: 'Enroll in MFA',
    message: `<!DOCTYPE html>\n<html><body>Click to enroll in MFA: <a href=\"{{ url }}\">Enroll</a></body></html>`
  },
  'Change Password (Link)': {
    desc: 'This email is sent when a user requests a password change link.',
    subject: 'Change your password',
    message: `<!DOCTYPE html>\n<html><body>Click to change your password: <a href=\"{{ url }}\">Change Password</a></body></html>`
  },
  'Change Password (Code)': {
    desc: 'This email is sent when a user requests a password change code.',
    subject: 'Your password change code',
    message: `<!DOCTYPE html>\n<html><body>Your password change code is: <b>{{ code }}</b></body></html>`
  },
  'Blocked Account Email': {
    desc: 'This email is sent when a user\'s account is blocked due to suspicious activity.',
    subject: 'Your account has been blocked',
    message: `<!DOCTYPE html>\n<html><body>Your account has been blocked. Contact support for help.</body></html>`
  },
  'Password Breach Alert': {
    desc: 'This email is sent when a password breach is detected.',
    subject: 'Password breach detected',
    message: `<!DOCTYPE html>\n<html><body>We detected a password breach. Please reset your password.</body></html>`
  },
  'Verification Code for Email MFA': {
    desc: 'This email is sent for email-based MFA verification.',
    subject: 'Your MFA verification code',
    message: `<!DOCTYPE html>\n<html><body>Your MFA code is: <b>{{ code }}</b></body></html>`
  },
  'User Invitation': {
    desc: 'This email is sent to invite a user to your application.',
    subject: 'You are invited!',
    message: `<!DOCTYPE html>\n<html><body>You are invited to join our app. Click <a href=\"{{ url }}\">here</a> to accept.</body></html>`
  },
};

export default function EmailTemplates() {
  const [selectedTemplate, setSelectedTemplate] = React.useState(TEMPLATES[0]);

  const templateData = TEMPLATE_DATA[selectedTemplate];

  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">Email Templates</h1>
        <div className="text-gray-600 mb-6">
          Standard welcome, password reset, and account verification email-based workflows, built right into Auth0. <a href="#" className="text-blue-700 underline">Show more</a>
        </div>
        <div className="bg-yellow-100 border border-yellow-300 text-yellow-900 rounded-lg px-4 py-3 mb-8 flex items-start gap-3">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mt-1"><circle cx="12" cy="12" r="10" fill="#FEF3C7" stroke="#F59E42" strokeWidth="2"/><path d="M12 8v4m0 4h.01" stroke="#F59E42" strokeWidth="2" strokeLinecap="round"/></svg>
          <div>
            <b>Warning!</b> You are using the <b>Auth0 Email Provider</b> which is only intended for development/trial use. Any customizations made to this email template will <b>NOT</b> take effect until a <a href="#" className="text-blue-700 underline">Custom Email Provider</a> is configured. All emails sent will use the default Auth0 templates, even if customized. Please enable a <a href="#" className="text-blue-700 underline">Custom Email Provider</a> for production use of custom templates.
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl shadow p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Template *</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
              value={selectedTemplate}
              onChange={e => setSelectedTemplate(e.target.value)}
            >
              {TEMPLATES.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <div className="text-gray-600 text-sm mt-3 mb-6" dangerouslySetInnerHTML={{__html: templateData.desc}} />
          </div>
          <div className="text-gray-600 text-sm mb-6">
            This email will be sent whenever a user signs up or logs in for the first time. When the user follows the verification link, an <code className="bg-gray-100 px-1 rounded">email_verified</code> flag will be set in the user's profile. <code className="bg-gray-100 px-1 rounded">@url@</code> (or <code className="bg-gray-100 px-1 rounded">{'{{ url }}'}</code> if you are using the HTML + <a href="#" className="text-blue-700 underline">Liquid</a> syntax) is a placeholder for this link.
          </div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-medium text-gray-700">Status</span>
            <span className="ml-2 flex items-center gap-2">
              <span className="inline-block w-10 h-6 rounded-full bg-green-200 relative">
                <span className="inline-block w-5 h-5 bg-green-500 rounded-full absolute left-5 top-0.5 shadow" />
              </span>
              <span className="text-green-700 font-medium">Template enabled</span>
            </span>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100" value="no-reply@auth0user.net" readOnly />
            <div className="text-xs text-gray-500 mt-1">You can include any of the <a href="#" className="text-blue-700 underline">common variables</a> like <code className="bg-gray-100 px-1 rounded">{'{{ application.name }}'}</code>. For example: <code className="bg-gray-100 px-1 rounded">{'{{ application.name }}'}</code> &lt;support@yourcompany.com /&gt;.</div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Subject" value={templateData.subject} readOnly />
            <div className="text-xs text-gray-500 mt-1">You can include any of the <a href="#" className="text-blue-700 underline">common variables</a> like <code className="bg-gray-100 px-1 rounded">{'{{ application.name }}'}</code> and <code className="bg-gray-100 px-1 rounded">{'{{ user.email }}'}</code>. For example: <span className="bg-gray-100 px-1 rounded">Welcome to {'{{ application.name }}'}!</span>.</div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Redirect To</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="URL to redirect after verification" />
            <div className="text-xs text-gray-500 mt-1">The user will be redirected to this URL after the action finishes. You can use the <code className="bg-gray-100 px-1 rounded">{'{{ application.name }}'}</code> and <code className="bg-gray-100 px-1 rounded">{'{{ application.callback_domain }}'}</code> variables. See <a href="#" className="text-blue-700 underline">Configuring the Redirect To URL</a> for more information.</div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">URL Lifetime</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" value="432000" readOnly />
            <div className="text-xs text-gray-500 mt-1">The url will be expired when the lifetime in <b>seconds</b> is passed. <b>Default: 432000</b> seconds (5 days).</div>
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <div className="border border-gray-300 rounded-md overflow-hidden">
              <MonacoEditor
                height="300"
                language="html"
                value={templateData.message}
                options={{ readOnly: true, minimap: { enabled: false }, fontSize: 14, scrollBeyondLastLine: false }}
              />
            </div>
          </div>
        </div>
        {/* Tombol bawah kanan */}
        <div className="flex justify-end gap-3 mt-6">
          <button className="bg-[#3B5CCC] hover:bg-[#2d4bb3] text-white font-semibold px-6 py-2 rounded-md text-base">Save</button>
          <button className="bg-gray-100 text-gray-400 font-semibold px-6 py-2 rounded-md text-base cursor-not-allowed" disabled>Try</button>
          <button className="bg-white border border-gray-300 text-gray-700 font-semibold px-6 py-2 rounded-md text-base">Reset</button>
        </div>
      </div>
    </div>
  );
} 