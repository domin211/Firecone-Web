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
        <a href="https://client.firecone.eu/" className="hover:text-orange-500 transition-colors">Client</a>
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
        <div className="bg-[#1a1f25] rounded-2xl p-8 grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-gray-400">Customer Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">1K+</div>
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
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-400">By accessing and using Firecone's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
            <p className="text-gray-400">Firecone provides Minecraft server hosting services. While we strive to ensure high availability, we cannot guarantee uninterrupted service.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="text-gray-400">Users are responsible for maintaining the security of their account credentials and for all activities that occur under their account.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Service Limitations</h2>
            <p className="text-gray-400">We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.</p>
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
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information Collection</h2>
            <p className="text-gray-400">We collect information necessary to provide our services, including but not limited to email addresses and server usage data.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Data Usage</h2>
            <p className="text-gray-400">We use collected information to provide and improve our services, communicate with users, and ensure compliance with our terms of service.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
            <p className="text-gray-400">We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
            <p className="text-gray-400">Our service may integrate with third-party services. Please review their privacy policies to understand how they handle your data.</p>
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