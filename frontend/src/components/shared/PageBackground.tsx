function PageBackground({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Radial Gradient Background */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #fff 40%, #475569 100%)",
        }}
      />

      {/* Page Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default PageBackground