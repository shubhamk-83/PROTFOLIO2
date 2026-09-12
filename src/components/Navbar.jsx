import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { NAV_LINKS } from '../utils/data';
import useScrollSpy from '../hooks/useScrollSpy';
import { useCursor } from '../context/CursorContext';

const ids = NAV_LINKS.map((l) => l.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(ids);
  const { enter, leave } = useCursor();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el && window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -80, duration: 1.2 });
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 md:px-6 transition-all duration-500 ${
          scrolled ? 'glass-strong py-3 mx-4' : 'py-2 mx-4 bg-transparent border border-transparent'
        }`}
      >
        <button
          onClick={() => goTo('home')}
          onMouseEnter={() => enter('link')}
          onMouseLeave={leave}
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          Shubham<span className="text-accent">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.id} className="relative">
              <button
                onClick={() => goTo(link.id)}
                onMouseEnter={() => enter('link')}
                onMouseLeave={leave}
                className="relative px-4 py-2 text-sm font-medium text-mute hover:text-ink transition-colors"
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-4 right-4 -bottom-0.5 h-px bg-accent shadow-glow"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => goTo('contact')}
          onMouseEnter={() => enter('link')}
          onMouseLeave={leave}
          className="hidden md:inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-sm font-medium text-ink hover:bg-accent/20 hover:shadow-glow transition-all"
        >
          Let's Talk
        </button>

        <button
          className="md:hidden text-ink text-2xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="md:hidden mx-4 mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => goTo(link.id)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  active === link.id ? 'text-ink bg-white/5' : 'text-mute'
                }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
