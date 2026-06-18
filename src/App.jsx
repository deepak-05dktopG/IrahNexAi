import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import logoImg from './assets/irahnexai_LOGO.png';
import Lightfall from './components/ui/Lightfall';

const footerLinks = {
  Company: [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ],
  Services: [
    { name: 'Smart Software & AI', path: '/services' },
    { name: 'Web & App Development', path: '/services' },
    { name: 'Business Dashboards', path: '/services' },
    { name: 'Task Automation', path: '/services' },
    { name: 'Interactive Design', path: '/services' },
  ],
};

const Footer = () => (
  <footer className="relative border-t border-white/5 bg-[#05070F] overflow-hidden">
    {/* Lightfall Animated Background for Footer */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <Lightfall
        colors={['#2563EB', '#6366F1', '#06B6D4']}
        backgroundColor="#05070F"
        speed={0.8}
        streakCount={1}
        streakWidth={3.0}
        streakLength={1.2}
        glow={1.5}
        density={0.25}
        twinkle={0.6}
        zoom={2.0}
        backgroundGlow={0.2}
        opacity={0.45}
        mouseInteraction={true}
        mouseStrength={0.6}
        mouseRadius={0.8}
      />
    </div>

    <div className="gradient-divider relative z-10" />
    <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
      <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
        {/* Brand column */}
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5 mb-5">
            <img
              src={logoImg}
              alt="IrahNexAI Logo"
              className="w-11 h-11 object-contain"
            />
            <div className="flex items-baseline select-none uppercase text-lg" style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 900, letterSpacing: '0.02em' }}>
              <span className="bg-gradient-to-b from-[#206DF5] via-[#0D4EB5] to-[#05235C] bg-clip-text text-transparent">
                IRAHNEX
              </span>
              <span className="bg-gradient-to-b from-[#00FFFF] to-[#007BB5] bg-clip-text text-transparent">
                AI
              </span>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
            Professional technology agency building websites, apps, and smart automated tools.
          </p>
          {/* Social icons */}
          <div className="flex gap-3">
            {[
              { label: 'GitHub', svg: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> },
              { label: 'LinkedIn', svg: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></> },
              { label: 'Twitter', svg: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /> },
            ].map(({ label, svg }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-white/8 bg-white/3 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {svg}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Links & Contact details (stacked on mobile, side by side on desktop) */}
        <div className="flex flex-col sm:flex-row gap-10 lg:gap-16 xl:gap-24 w-full lg:justify-end">
          {/* Nav columns (forced same row on mobile using grid) */}
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5" style={{ fontFamily: 'var(--font-accent)' }}>
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map(({ name, path }) => (
                    <li key={name}>
                      <Link
                        to={path}
                        className="text-slate-400 hover:text-slate-200 transition-colors duration-200"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Details Column (100% width on mobile, after navigation columns) */}
          <div className="w-full sm:w-auto sm:max-w-md border-t border-white/5 pt-8 sm:border-none sm:pt-0">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5" style={{ fontFamily: 'var(--font-accent)' }}>
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex flex-wrap items-center gap-x-2 text-sm text-slate-400">
                <svg className="w-4 h-4 text-blue-400 shrink-0 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919025512345" className="hover:text-slate-200 transition-colors">+91 90255 12345</a>
                <span className="text-slate-700">|</span>
                <a href="tel:+919025567890" className="hover:text-slate-200 transition-colors">+91 90255 67890</a>
              </li>
              <li className="flex flex-wrap items-center gap-x-2 text-sm text-slate-400">
                <svg className="w-4 h-4 text-blue-400 shrink-0 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z" />
                </svg>
                <a href="mailto:hello@irahnexai.com" className="hover:text-slate-200 transition-colors">hello@irahnexai.com</a>
                <span className="text-slate-700">|</span>
                <a href="mailto:support@irahnexai.com" className="hover:text-slate-200 transition-colors">support@irahnexai.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="hr-fade mb-6" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-xs">
          © {new Date().getFullYear()} IrahNexAI. All rights reserved.
        </p>
        <p className="text-slate-500 text-xs">
          Built with AI · Made with precision
        </p>
      </div>
    </div>
  </footer>
);

function App() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, easing: 'ease-out-cubic', offset: 60 });
  }, []);

  return (
    <Router>
      <div className="bg-grid min-h-screen text-slate-200 selection:bg-blue-600/30 selection:text-white overflow-x-clip">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
