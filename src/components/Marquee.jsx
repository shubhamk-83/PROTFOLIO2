/**
 * Infinite horizontal marquee. Duplicates the item list once so the CSS
 * animation can loop seamlessly at translateX(-50%).
 */
export default function Marquee({ items, className = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-void to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-void to-transparent z-10" />
      <div className="flex w-max animate-marquee gap-10">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl font-medium text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.25)] whitespace-nowrap"
          >
            {item} <span className="text-accent">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
