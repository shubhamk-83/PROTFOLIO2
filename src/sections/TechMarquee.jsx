import Marquee from '../components/Marquee';
import { MARQUEE_WORDS } from '../utils/data';

/**
 * Full-bleed infinite marquee used as a rhythm break between dense sections.
 */
export default function TechMarquee() {
  return (
    <section className="relative py-14 border-y border-line">
      <Marquee items={MARQUEE_WORDS} />
    </section>
  );
}
