function PageBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Pearl Mist Background with Top Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
        }}
      />

      {/* Page Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default PageBackground;