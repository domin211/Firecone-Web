import React from 'react';
import { Shield, Zap, Globe2 } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img 
          src="https://cdn.discordapp.com/avatars/1071540568766812341/d5e99ecf6daba829a4eb57c64a1afd0b.webp?size=512"
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />
        <span className="text-xl font-bold">Firecone</span>
      </div>
      <div className="flex gap-6">
        <a href="https://panel.firecone.eu/" className="hover:text-orange-500 transition-colors">Panel</a>
        <a href="https://status.firecone.eu/" className="hover:text-orange-500 transition-colors">Status</a>
        <a href="https://discord.firecone.eu/" className="hover:text-orange-500 transition-colors">Discord</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="container mx-auto px-4 pb-8 text-center">
      <div className="flex justify-center gap-8 mb-4">
        <Link to="/terms" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</Link>
        <Link to="/privacy" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</Link>
      </div>
      <p className="text-[#F97316]">© {new Date().getFullYear()} Firecone</p>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="container mx-auto px-4 text-center mt-20">
        <div className="inline-block bg-orange-500/10 text-orange-500 px-4 py-1 rounded-full mb-6">
          ✨ Simple, reliable hosting
        </div>
        <h1 className="text-6xl font-bold mb-4">
          Quality Hosting.
          <br />
          <span className="text-orange-500">No Cost.</span>
        </h1>
        <p className="text-gray-400 mb-8">
          Start your Minecraft server journey now with Firecone.
        </p>
        <a 
          href="https://client.firecone.eu/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Get Started
        </a>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 mt-32">
        <div className="bg-[#1a1f25] p-6 rounded-lg">
          <div className="bg-orange-500/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
            <Zap className="text-orange-500" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Reliable Speed</h3>
          <p className="text-gray-400">Optimized infrastructure for consistent performance</p>
        </div>

        <div className="bg-[#1a1f25] p-6 rounded-lg">
          <div className="bg-orange-500/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
            <Shield className="text-orange-500" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">DDoS Protection</h3>
          <p className="text-gray-400">Advanced mitigation against network attacks</p>
        </div>

        <div className="bg-[#1a1f25] p-6 rounded-lg">
          <div className="bg-orange-500/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
            <Globe2 className="text-orange-500" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Global Network</h3>
          <p className="text-gray-400">Strategically placed servers for optimal latency</p>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 mt-32 mb-32">
        <div className="bg-[#1a1f25] rounded-2xl p-8 grid md:grid-cols-2 gap-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-gray-400">Customer Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">0</div>
            <div className="text-gray-400">Active Users</div>
          </div>
        </div>
      </div>
    </>
  );
}

function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-orange-500">Terms of Service</h1>
        <div className="bg-[#1a1f25] p-8 rounded-lg space-y-6">
          <div className="mb-6">
            <p className="text-gray-400 mb-2"><strong>Effective Date:</strong> July 7, 2025</p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-400">These Terms of Service ("Terms") govern your access to and use of Firecone's hosting platform ("Service"). By using the Service, you agree to be bound by these Terms. If you do not agree with any part of the Terms, you must not use the Service.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Agreement to Terms</h2>
            <p className="text-gray-400">By accessing or using the Service, you confirm that you understand and agree to comply with these Terms. You also agree to comply with all applicable laws and regulations in your use of the Service.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Hosting Services</h2>
            <p className="text-gray-400 mb-4">Firecone provides free hosting services to users. We do our best to maintain a stable and secure environment, but we do not guarantee uptime or data preservation. You use the service at your own risk.</p>
            <p className="text-gray-400">Firecone may access user servers to address technical issues, perform maintenance, or enforce security measures. By using our services, you consent to this access when necessary.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">4. User Conduct</h2>
            <p className="text-gray-400 mb-4">You agree to use Firecone's services responsibly and lawfully. Prohibited behaviors include but are not limited to:</p>
            <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
              <li>Uploading or hosting any illegal, harmful, or offensive content</li>
              <li>Disrupting or interfering with other users' experience or our systems</li>
              <li>Impersonating individuals or misrepresenting your affiliation</li>
              <li>Hosting content you do not own or have permission to use</li>
              <li>Engaging in spamming, phishing, or distributing malware</li>
            </ul>
            <p className="text-gray-400">Violations may result in suspension or permanent termination of your service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Abuse and Fair Use</h2>
            <p className="text-gray-400 mb-4">Firecone is intended for fair, non-abusive use. You must not:</p>
            <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
              <li>Bypass service limits or attempt to overload the system</li>
              <li>Exploit bugs or vulnerabilities</li>
              <li>Use our platform for malicious activity or personal gain at the expense of others</li>
            </ul>
            <p className="text-gray-400 mb-4">If you find a bug or exploit, you are required to report it to Firecone.eu@gmail.com.</p>
            <p className="text-gray-400">Firecone reserves the right to terminate your server, suspend your account, and blacklist you from the platform without notice if abuse or violation of our terms is detected.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property Rights</h2>
            <p className="text-gray-400 mb-4">All intellectual property related to the Firecone platform belongs to Firecone unless otherwise stated. You may not copy, distribute, or create derivative works without permission.</p>
            <p className="text-gray-400">If you believe content hosted on Firecone infringes your intellectual property, please contact us with detailed information, including proof of ownership.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
            <p className="text-gray-400 mb-4">Firecone may use third-party services to operate and improve the platform (e.g., Cloudflare, CookieYes). Your use of Firecone implies agreement with the terms and policies of these services.</p>
            <p className="text-gray-400">We are not responsible for third-party content or services accessed via links or embedded tools.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
            <p className="text-gray-400 mb-4">We reserve the right to suspend or terminate your access to Firecone at any time, for any reason, especially if you violate these Terms or abuse the platform.</p>
            <p className="text-gray-400">All content associated with your server or account may be deleted upon termination, and we are under no obligation to retrieve or preserve it.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-gray-400 mb-4">Firecone is provided "as is" and "as available" without warranties of any kind. We do not guarantee:</p>
            <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
              <li>Continuous uptime or availability</li>
              <li>Accuracy or reliability of hosted services</li>
              <li>Security of data or content</li>
            </ul>
            <p className="text-gray-400">Use of our service is at your own risk.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-400 mb-4">Firecone will not be liable for any damages arising from your use of or inability to use the platform, including but not limited to:</p>
            <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
              <li>Data loss</li>
              <li>Service interruptions</li>
              <li>Security breaches</li>
              <li>Unauthorized access</li>
            </ul>
            <p className="text-gray-400">This limitation applies to the fullest extent permitted by law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Indemnification</h2>
            <p className="text-gray-400">You agree to indemnify and hold Firecone harmless from any claims or damages arising from your use of the service, your content, or any breach of these Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Changes to Terms</h2>
            <p className="text-gray-400">We may update these Terms from time to time. If we make material changes, we will provide at least 7 days' prior notice via our website or email (if provided). Continued use of the service after changes take effect constitutes your acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
            <p className="text-gray-400 mb-4">If you have questions or concerns regarding these Terms or the use of the Firecone platform, contact us at:</p>
            <div className="bg-orange-500/10 p-4 rounded-lg">
              <p className="text-orange-500 mb-2">📧 Email: Firecone.eu@gmail.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-orange-500">Privacy Policy</h1>
        <div className="bg-[#1a1f25] p-8 rounded-lg space-y-6">
          <div className="mb-6">
            <p className="text-gray-400 mb-2"><strong>Effective Date:</strong> July 7, 2025</p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-400 mb-4">This Privacy Policy explains how Firecone ("we", "us", or "our") collects, uses, stores, and protects your personal information when you use our free hosting services and visit our website.</p>
            <p className="text-gray-400">By using our services, you agree to this Privacy Policy. If you do not agree, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="text-gray-400 mb-4">We collect only the personal information necessary to provide and maintain our services:</p>
            <p className="text-gray-400 mb-2"><strong>Account Information:</strong> Your email address and username provided during registration.</p>
            <p className="text-gray-400 mb-2"><strong>Technical Information:</strong> IP address, browser type, device details, and usage logs for security and service improvement.</p>
            <p className="text-gray-400 mb-4"><strong>Usage Data:</strong> Anonymous analytics data collected via third-party tools like Google Analytics.</p>
            <p className="text-gray-400">We do not collect sensitive personal data or payment information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-400 mb-4">Your information is used solely to:</p>
            <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
              <li>Provide and maintain our hosting services.</li>
              <li>Communicate service-related updates and abuse notifications.</li>
              <li>Detect, prevent, and respond to abuse or security threats.</li>
              <li>Improve service performance and stability.</li>
            </ul>
            <p className="text-gray-400">We do not sell or share your personal data with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Cookies and Analytics</h2>
            <p className="text-gray-400">We use cookies and similar technologies to manage sessions and collect anonymous usage data through services such as Google Analytics. You can disable cookies in your browser settings, but this may reduce site functionality.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
            <p className="text-gray-400">We retain your personal data only as long as necessary to provide our services or comply with legal obligations. Upon account deletion, your data will be removed unless retention is required to prevent abuse or fraud.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p className="text-gray-400">We implement reasonable technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse. However, no internet transmission can be guaranteed to be 100% secure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
            <p className="text-gray-400 mb-4">To operate our service, we rely on trusted third parties including:</p>
            <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
              <li>Hosting and infrastructure providers</li>
              <li>Analytics platforms (e.g., Google Analytics)</li>
              <li>Security and CDN providers (e.g., Cloudflare)</li>
            </ul>
            <p className="text-gray-400">These providers may process data on our behalf and are obligated to safeguard your information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. User Responsibilities and Abuse Reporting</h2>
            <p className="text-gray-400 mb-4">You agree to use Firecone responsibly and legally. If you discover any vulnerabilities or abuse, please report them immediately to firecone.eu@gmail.com.</p>
            <p className="text-gray-400">We reserve the right to suspend, terminate, or blacklist accounts and servers involved in abuse or malicious activity.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Your GDPR Rights (For EU Users)</h2>
            <p className="text-gray-400 mb-4">If you are located in the European Union, you have the following rights under the General Data Protection Regulation (GDPR):</p>
            <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
              <li><strong>Access:</strong> You can request access to the personal data we hold about you.</li>
              <li><strong>Correction:</strong> You may request correction of inaccurate or incomplete data.</li>
              <li><strong>Erasure:</strong> You can request deletion of your personal data, subject to legal and operational limitations.</li>
              <li><strong>Restriction:</strong> You may request that we restrict processing of your data.</li>
              <li><strong>Data Portability:</strong> You have the right to receive your data in a structured, machine-readable format.</li>
              <li><strong>Objection:</strong> You can object to processing based on legitimate interests or direct marketing.</li>
              <li><strong>Withdraw Consent:</strong> Where processing is based on consent, you may withdraw it at any time.</li>
            </ul>
            <p className="text-gray-400">To exercise these rights, contact us at firecone.eu@gmail.com. We will respond within the legally required timeframe.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
            <p className="text-gray-400">Our services are not directed at children under 13 years old. We do not knowingly collect personal data from children.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-400">We may update this Privacy Policy occasionally. For material changes, we will provide advance notice via email or site announcement before the changes take effect. Your continued use of Firecone after such updates means you accept the revised policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
            <p className="text-gray-400 mb-4">For questions, concerns, or abuse reports, contact us at:</p>
            <div className="bg-orange-500/10 p-4 rounded-lg">
              <p className="text-orange-500">📧 Email: firecone.eu@gmail.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0f1216] text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;