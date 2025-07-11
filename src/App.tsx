import { useState } from 'react';
import { Shield, Zap, Globe2, Menu, X } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/favicon.png"
            alt="Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
          />
          <span className="text-lg sm:text-xl font-bold">Firecone</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <a href="https://panel.firecone.eu/" className="hover:text-orange-500 transition-colors">Panel</a>
          <a href="https://status.firecone.eu/" className="hover:text-orange-500 transition-colors">Status</a>
          <a href="https://discord.firecone.eu/" className="hover:text-orange-500 transition-colors">Discord</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
          <div className="flex flex-col gap-4 pt-4">
            <a href="https://panel.firecone.eu/" className="hover:text-orange-500 transition-colors">Panel</a>
            <a href="https://status.firecone.eu/" className="hover:text-orange-500 transition-colors">Status</a>
            <a href="https://discord.firecone.eu/" className="hover:text-orange-500 transition-colors">Discord</a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  const handleConsentWithdrawal = () => {
    // Remove the consent cookie
    document.cookie = "consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + '.' + window.location.hostname
      .split('.')
      .slice(-2)
      .join('.') + ";";

    // Reload the page to reflect the change
    window.location.reload();
  };

  return (
    <footer className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-center">
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-4">
        <Link to="/terms" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</Link>
        <Link to="/privacy" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</Link>
        <a href="/sitemap.xml" className="text-gray-400 hover:text-orange-500 transition-colors">Sitemap</a>
        <button
          onClick={handleConsentWithdrawal}
          className="text-gray-400 hover:text-orange-500 transition-colors underline cursor-pointer"
          title="Withdraw cookie consent and reload page"
        >
          Withdraw Cookie Consent
        </button>
      </div>
      <p className="text-[#F97316]">© {new Date().getFullYear()} Firecone</p>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Firecone Hosting - Quality Hosting at No Cost</title>
        <meta name="description" content="Start your Minecraft server journey now with Firecone Hosting. Reliable, free, and simple hosting solutions." />
      </Helmet>
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 sm:mt-16 lg:mt-20">
        <div className="inline-block bg-orange-500/10 text-orange-500 px-3 sm:px-4 py-1 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
          ✨ Simple, reliable hosting
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Quality Hosting.
          <br />
          <span className="text-orange-500">No Cost.</span>
        </h1>
        <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto">
          Start your Minecraft server journey now with Firecone.
        </p>
        <a
          href="https://client.firecone.eu/"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
        >
          Get Started
        </a>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16 sm:mt-24 lg:mt-32">
        <div className="bg-[#1a1f25] p-4 sm:p-6 rounded-lg">
          <div className="bg-orange-500/10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg mb-3 sm:mb-4">
            <Zap className="text-orange-500" size={20} />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Reliable Speed</h2>
          <p className="text-gray-400 text-sm sm:text-base">Optimized infrastructure for consistent performance</p>
        </div>

        <div className="bg-[#1a1f25] p-4 sm:p-6 rounded-lg">
          <div className="bg-orange-500/10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg mb-3 sm:mb-4">
            <Shield className="text-orange-500" size={20} />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">DDoS Protection</h2>
          <p className="text-gray-400 text-sm sm:text-base">Advanced mitigation against network attacks</p>
        </div>

        <div className="bg-[#1a1f25] p-4 sm:p-6 rounded-lg sm:col-span-2 lg:col-span-1">
          <div className="bg-orange-500/10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg mb-3 sm:mb-4">
            <Globe2 className="text-orange-500" size={20} />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Global Network</h2>
          <p className="text-gray-400 text-sm sm:text-base">Strategically placed servers for optimal latency</p>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 lg:mt-32 mb-16 sm:mb-24 lg:mb-32">
        <div className="bg-[#1a1f25] rounded-xl sm:rounded-2xl p-6 sm:p-8 grid gap-8 sm:gap-12 sm:grid-cols-2">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-gray-400 text-sm sm:text-base">Customer Support</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 mb-2">0</div>
            <div className="text-gray-400 text-sm sm:text-base">Active Users</div>
          </div>
        </div>
      </div>
    </>
  );
}

function TermsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Helmet>
        <title>Terms of Service - Firecone Hosting</title>
        <meta name="description" content="Review the terms of service for using Firecone Hosting, a free and reliable hosting platform." />
      </Helmet>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-orange-500">Terms of Service</h1>
        <div className="bg-[#1a1f25] p-4 sm:p-6 lg:p-8 rounded-lg space-y-4 sm:space-y-6">
          <div className="mb-4 sm:mb-6">
            <p className="text-gray-400 mb-2 text-sm sm:text-base"><strong>Effective Date:</strong> January 8, 2025</p>
          </div>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">I. Introduction</h2>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Firecone is an informal, non-commercial project that provides free game server hosting as a hobby. The Service is provided "as is" with no guarantees, warranties, or uptime commitments.</p>
            <p className="text-gray-400 text-sm sm:text-base">By using Firecone, you agree to these Terms of Service and our Privacy Policy. If you do not agree, you must not use the Service.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">II. Nature of the Service</h2>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Firecone is not a business or registered company.</p>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">This is a free, experimental, hobby-hosting platform, intended for personal, educational, and non-abusive use only.</p>
            <p className="text-gray-400 text-sm sm:text-base">There is no Service-Level Agreement (SLA) and no guarantee of availability, performance, or data retention.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">III. Acceptable Use</h2>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">You agree not to use Firecone to:</p>
            <ul className="text-gray-400 list-disc list-inside space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base ml-4">
              <li>Host or share illegal content (malware, child exploitation, warez, etc.)</li>
              <li>Launch or assist in DDoS attacks</li>
              <li>Distribute spam, phishing pages, or malicious software</li>
              <li>Abuse resources (CPU, memory, disk, bandwidth)</li>
              <li>Mine cryptocurrency or run commercial services</li>
              <li>Monetize or resell our services in any form</li>
            </ul>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Violation of any of the above will result in immediate removal of your server and potential blacklisting.</p>
            <p className="text-gray-400 text-sm sm:text-base">If you discover a bug, vulnerability, or abuse on the platform, you must report it to firecone.eu@gmail.com rather than exploit it.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">IV. Uptime, Retention & Termination</h2>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">We make no uptime guarantees.</p>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Your server or account may be deleted at any time, with or without notice.</p>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Inactive or resource-heavy servers may be removed to preserve platform stability.</p>
            <p className="text-gray-400">Users abusing the service will be suspended, removed, or blacklisted at our discretion.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">V. Server Access</h2>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Firecone administrators may access servers or user data when necessary to:</p>
            <ul className="text-gray-400 list-disc list-inside space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base ml-2 sm:ml-4">
              <li>Investigate abuse or violations</li>
              <li>Resolve technical issues</li>
              <li>Perform maintenance or enforce policy</li>
            </ul>
            <p className="text-gray-400">We aim to avoid disruption, but we are not responsible for lost data.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">VI. Limitation of Liability</h2>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">By using Firecone, you agree that:</p>
            <ul className="text-gray-400 list-disc list-inside space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base ml-2 sm:ml-4">
              <li>You use the service entirely at your own risk</li>
              <li>Firecone is not liable for data loss, downtime, or service interruptions</li>
              <li>Firecone is not responsible for damages, direct or indirect, arising from use of the platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">VII. Intellectual Property</h2>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">You are responsible for all content you upload or host. Do not host anything you don't own or have permission to use. Copyright violations may result in removal or account action.</p>
            <p className="text-gray-400">To report IP violations, contact firecone.eu@gmail.com.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">VIII. Privacy & Data Handling</h2>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Please refer to our full Privacy Policy for details. In summary:</p>
            <ul className="text-gray-400 list-disc list-inside space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base ml-2 sm:ml-4">
              <li>We collect minimal data: IP address, email, logs, basic metadata</li>
              <li>No third-party analytics, ads, or tracking</li>
              <li>Data is used only to operate and protect the platform</li>
              <li>Under GDPR, you may request to access or delete your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">IX. Abuse Policy</h2>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">To report abuse (e.g., illegal content, spam, malware):</p>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Email firecone.eu@gmail.com with:</p>
            <ul className="text-gray-400 list-disc list-inside space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base ml-2 sm:ml-4">
              <li>Server name or ID</li>
              <li>Description of the issue</li>
              <li>Any evidence (e.g., logs or screenshots)</li>
            </ul>
            <p className="text-gray-400">We take abuse seriously and will investigate and act appropriately.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">X. Changes to Terms</h2>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">We may update these Terms at any time. For major changes, we will notify users via our website or by email (if available) at least 7 days in advance.</p>
            <p className="text-gray-400">Continued use of the Service after changes become effective indicates your acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">XI. Contact Information</h2>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">This project is operated informally and not as a registered business.</p>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">For any questions, reports, or data requests, please contact:</p>
            <div className="bg-orange-500/10 p-4 rounded-lg">
              <p className="text-orange-500 mb-2">📧 Email: Firecone.eu@gmail.com</p>
              <p className="text-orange-500">🌐 Website: https://firecone.eu</p>
            </div>
          </section>
        </div>
      </div>
    </div>

  );
}

function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Helmet>
        <title>Privacy Policy - Firecone Hosting</title>
        <meta name="description" content="Learn about how Firecone Hosting handles your data and ensures your privacy." />
      </Helmet>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-orange-500">Privacy Policy</h1>
        <div className="bg-[#1a1f25] p-4 sm:p-6 lg:p-8 rounded-lg space-y-4 sm:space-y-6">
          <div className="mb-4 sm:mb-6">
            <p className="text-gray-400 mb-2 text-sm sm:text-base"><strong>Effective Date:</strong> July 7, 2025</p>
          </div>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">1. Introduction</h2>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">This Privacy Policy explains how Firecone ("we", "us", or "our") collects, uses, stores, and protects your personal information when you use our free hosting services and visit our website.</p>
            <p className="text-gray-400 text-sm sm:text-base">By using our services, you agree to this Privacy Policy. If you do not agree, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">2. Information We Collect</h2>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">We collect only the personal information necessary to provide and maintain our services:</p>
            <p className="text-gray-400 mb-2"><strong>Account Information:</strong> Your email address and username provided during registration.</p>
            <p className="text-gray-400 mb-2"><strong>Technical Information:</strong> IP address, browser type, device details, and usage logs for security and service improvement.</p>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base"><strong>Usage Data:</strong> Anonymous analytics data collected via third-party tools like Google Analytics.</p>
            <p className="text-gray-400">We do not collect sensitive personal data or payment information.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Your information is used solely to:</p>
            <ul className="text-gray-400 list-disc list-inside space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base ml-2 sm:ml-4">
              <li>Provide and maintain our hosting services.</li>
              <li>Communicate service-related updates and abuse notifications.</li>
              <li>Detect, prevent, and respond to abuse or security threats.</li>
              <li>Improve service performance and stability.</li>
            </ul>
            <p className="text-gray-400">We do not sell or share your personal data with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">4. Cookies and Analytics</h2>
            <p className="text-gray-400">We use cookies and similar technologies to manage sessions and collect anonymous usage data through services such as Google Analytics. You can disable cookies in your browser settings, but this may reduce site functionality.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">5. Data Retention</h2>
            <p className="text-gray-400">We retain your personal data only as long as necessary to provide our services or comply with legal obligations. Upon account deletion, your data will be removed unless retention is required to prevent abuse or fraud.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">6. Data Security</h2>
            <p className="text-gray-400">We implement reasonable technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse. However, no internet transmission can be guaranteed to be 100% secure.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">7. Third-Party Services</h2>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">To operate our service, we rely on trusted third parties including:</p>
            <ul className="text-gray-400 list-disc list-inside space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base ml-2 sm:ml-4">
              <li>Hosting and infrastructure providers</li>
              <li>Analytics platforms (e.g., Google Analytics)</li>
              <li>Security and CDN providers (e.g., Cloudflare)</li>
            </ul>
            <p className="text-gray-400">These providers may process data on our behalf and are obligated to safeguard your information.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">8. User Responsibilities and Abuse Reporting</h2>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">You agree to use Firecone responsibly and legally. If you discover any vulnerabilities or abuse, please report them immediately to firecone.eu@gmail.com.</p>
            <p className="text-gray-400">We reserve the right to suspend, terminate, or blacklist accounts and servers involved in abuse or malicious activity.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">9. Your GDPR Rights (For EU Users)</h2>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">If you are located in the European Union, you have the following rights under the General Data Protection Regulation (GDPR):</p>
            <ul className="text-gray-400 list-disc list-inside space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base ml-2 sm:ml-4">
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
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">10. Children's Privacy</h2>
            <p className="text-gray-400">Our services are not directed at children under 13 years old. We do not knowingly collect personal data from children.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-400">We may update this Privacy Policy occasionally. For material changes, we will provide advance notice via email or site announcement before the changes take effect. Your continued use of Firecone after such updates means you accept the revised policy.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">12. Contact Us</h2>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">For questions, concerns, or abuse reports, contact us at:</p>
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
