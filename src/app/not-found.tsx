export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#111827] via-[#030712] to-[#030712] px-4">
      <div className="text-center relative z-10">
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <h1 className="text-9xl font-display font-bold text-white/5 mb-4 select-none">404</h1>
        <h2 className="text-3xl font-display font-semibold text-foreground mb-4">Page Not Found</h2>
        <p className="text-muted mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-primary text-background font-bold rounded-xl hover:bg-white transition-all shadow-[0_0_20px_-5px_rgba(45,212,191,0.5)]"
        >
          ← Back to Portfolio
        </a>
      </div>
    </div>
  );
}