import Navbar from "@/components/shared/Navbar"
import Hero from "@/components/shared/Hero"
import BrainPreview from "@/components/shared/BrainPreview"
import Footer from "@/components/shared/Footer"

function LandingPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Radial Gradient Background from Top */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #fff 40%, #475569 100%)",
        }}
      />

      {/* Bottom Fade Center Grid */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d1d5db 1px, transparent 1px),
            linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
        }}
      />

      {/* Landing Page Content */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <BrainPreview />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default LandingPage