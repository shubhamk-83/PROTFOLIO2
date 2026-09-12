import { Link } from 'react-router-dom';
import AmbientBackground from './AmbientBackground';

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6">
      <AmbientBackground />
      <div className="relative z-10 text-center flex flex-col items-center gap-6">
        <p className="font-display text-8xl md:text-9xl font-semibold text-gradient">404</p>
        <p className="text-mute max-w-sm">
          This page drifted off somewhere. Let's get you back to solid ground.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-glow hover:shadow-glow-lg transition-shadow"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
