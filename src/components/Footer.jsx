import { motion } from 'framer-motion';
import { NAV_LINKS, SOCIALS } from '../utils/data';
import { useCursor } from '../context/CursorContext';

export default function Footer() {
  const { enter, leave } = useCursor();
  const year = new Date().getFullYear();

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el && window.__lenis) window.__lenis.scrollTo(el, { offset: -80, duration: 1.2 });
    else if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <motion.button
              onClick={() => goTo('home')}
              onMouseEnter={() => enter('link')}
              onMouseLeave={leave}
              whileHover={{ letterSpacing: '0.02em' }}
              className="font-display text-4xl md:text-6xl font-semibold text-ink"
            >
              Shubham<span className="text-accent">.</span>
            </motion.button>
            <p className="mt-3 text-mute max-w-sm">
              Creative Developer &amp; MERN Stack Engineer, building interfaces that feel as good as they look.
            </p>
          </div>

          <div className="flex gap-4">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => enter('link')}
                onMouseLeave={leave}
                aria-label={label}
                className="grid h-12 w-12 place-items-center rounded-full glass text-ink hover:text-accent hover:shadow-glow hover:-translate-y-1 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 border-t border-line">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => goTo(link.id)}
                  onMouseEnter={() => enter('link')}
                  onMouseLeave={leave}
                  className="text-sm text-mute hover:text-ink transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <p className="text-sm text-mute">
            &copy; {year} Shubham Kumar. Designed &amp; built with intent.
          </p>
        </div>
      </div>
    </footer>
  );
}
