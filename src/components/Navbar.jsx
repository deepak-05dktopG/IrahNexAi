import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/irahnexai_LOGO.png';

/* ───────────────────────── NAV LINKS ───────────────────────── */
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

/* ──────────────────── DESKTOP NAV ITEM ─────────────────────── */
const NavItem = ({ link, isActive }) => (
  <Link
    to={link.path}
    className="relative px-4 py-2 text-sm font-medium tracking-wide group transition-colors duration-200"
  >
    {/* Hover bg pill */}
    <span
      className={`absolute inset-0 rounded-lg transition-all duration-200
        ${isActive
          ? 'bg-blue-600/15 border border-blue-500/20'
          : 'opacity-0 group-hover:opacity-100 bg-white/5'
        }`}
    />

    {/* Label */}
    <span
      className={`relative z-10 transition-colors duration-200
        ${isActive ? 'text-blue-400 font-semibold' : 'text-slate-400 group-hover:text-slate-100'}`}
    >
      {link.name}
    </span>

    {/* Active dot */}
    {isActive && (
      <motion.span
        layoutId="nav-dot"
        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500"
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      />
    )}
  </Link>
);

/* ────────────────── MOBILE MENU PANEL ──────────────────────── */
const MobileMenu = ({ isOpen, links, currentPath, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 md:hidden bg-black/75"
          onClick={onClose}
        />

        {/* Panel */}
        <motion.nav
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', ease: 'easeOut', duration: 0.22 }}
          className="fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden flex flex-col pt-20 px-6 pb-8 overflow-y-auto"
          style={{
            background: 'rgba(8, 11, 18, 0.98)',
            borderLeft: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {/* Close btn */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/5 transition-all"
            aria-label="Close menu"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          {/* Logo inside panel */}
          <div className="mb-8 flex items-center gap-3">
            <img
              src={logoImg}
              alt="IrahNexAI Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="uppercase text-base flex items-baseline select-none" style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 900, letterSpacing: '0.02em' }}>
              <span className="bg-gradient-to-b from-[#206DF5] via-[#0D4EB5] to-[#05235C] bg-clip-text text-transparent">IRAHNEX</span>
              <span className="bg-gradient-to-b from-[#00FFFF] to-[#007BB5] bg-clip-text text-transparent">AI</span>
            </span>
          </div>

          <ul className="space-y-1 flex-1">
            {links.map((link) => {
              const active = currentPath === link.path;
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={onClose}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                      ${active
                        ? 'bg-blue-600/15 text-blue-400 border border-blue-500/20'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                      }`}
                  >
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />}
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="pt-6 border-t border-white/5">
            <Link
              to="/contact"
              onClick={onClose}
              className="btn-primary w-full justify-center text-center"
            >
              Get a Free Quote
            </Link>
            <p className="text-center text-xs text-slate-700 mt-4 tracking-widest uppercase">
              IrahNexAI © {new Date().getFullYear()}
            </p>
          </div>
        </motion.nav>
      </>
    )}
  </AnimatePresence>
);

/* ════════════════════ MAIN NAVBAR COMPONENT ═════════════════ */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Close mobile menu on route change ── */
  useEffect(() => { setIsOpen(false); }, [location]);

  /* ── Lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <div className="h-[2px] w-full" style={{ background: 'linear-gradient(90deg, transparent 0%, #2563EB 30%, #6366F1 70%, transparent 100%)' }} />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}
        style={{
          background: scrolled
            ? 'rgba(8, 11, 18, 0.92)'
            : 'rgba(8, 11, 18, 0.5)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.07)'
            : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-2.5 group" aria-label="IrahNexAI Home">
              <img
                src={logoImg}
                alt="IrahNexAI Logo"
                className="w-11 h-11 object-contain transition-all duration-200 group-hover:scale-105"
              />
              <div className="flex items-baseline select-none uppercase text-lg" style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 900, letterSpacing: '0.02em' }}>
                <span className="bg-gradient-to-b from-[#206DF5] via-[#0D4EB5] to-[#05235C] bg-clip-text text-transparent">
                  IRAHNEX
                </span>
                <span className="bg-gradient-to-b from-[#00FFFF] to-[#007BB5] bg-clip-text text-transparent">
                  AI
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <NavItem
                  key={link.name}
                  link={link}
                  isActive={location.pathname === link.path}
                />
              ))}

              {/* CTA Button */}
              <Link
                to="/contact"
                className="btn-primary ml-4 text-sm py-2 px-5"
              >
                Get a Free Quote
              </Link>
            </nav>

            {/* ── Mobile hamburger ── */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                {isOpen ? (
                  <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                ) : (
                  <>
                    <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="3" y1="10" x2="14" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      <MobileMenu
        isOpen={isOpen}
        links={navLinks}
        currentPath={location.pathname}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default Navbar;
