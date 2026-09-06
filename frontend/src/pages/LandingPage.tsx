import Navbar from "@/components/shared/Navbar"
import Hero from "@/components/shared/Hero"
import BrainPreview from "@/components/shared/BrainPreview"
import Footer from "@/components/shared/Footer"
import PageBackground from "@/components/shared/PageBackground"

function LandingPage() {
  return (
    <PageBackground>
      <Navbar />

      <main>
        <Hero />
        <BrainPreview />
      </main>

      <Footer />
    </PageBackground>
  )
}

export default LandingPage