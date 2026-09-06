import Navbar from "@/components/shared/Navbar"
import Hero from "@/components/shared/Hero"
import BrainPreview from "@/components/shared/BrainPreview"
import Footer from "@/components/shared/Footer"
import LandingPageBackground from "@/components/shared/PageBackground"

function LandingPage() {
  return (
    <LandingPageBackground>
      <Navbar />

      <main>
        <Hero />
        <BrainPreview />
      </main>

      <Footer />
    </LandingPageBackground>
  )
}

export default LandingPage