/**
 * Fixed ambient layer. The expensive blurred/morphing layers are desktop-only
 * so mobile browsers do not have to continuously repaint large GPU surfaces.
 */
export default function AmbientBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden bg-void">
      <div className="absolute inset-0 bg-aurora" />
      <div className="absolute inset-0 grid-overlay opacity-30 md:opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />

      <div className="absolute -top-40 -left-40 hidden h-[32rem] w-[32rem] bg-accent/20 blur-[96px] animate-blob [will-change:transform] md:block" />
      <div className="absolute top-1/3 -right-40 hidden h-[28rem] w-[28rem] bg-accent-soft/10 blur-[96px] animate-blob [will-change:transform] [animation-delay:3s] md:block" />
      <div className="absolute bottom-0 left-1/4 hidden h-[24rem] w-[24rem] bg-accent-dim/20 blur-[100px] animate-blob [will-change:transform] [animation-delay:6s] md:block" />

      <div className="noise-overlay hidden md:block" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void/90" />
    </div>
  );
}
