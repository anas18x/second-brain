import Navbar from "@/components/shared/Navbar"
import Hero from "@/components/shared/Hero"
import BrainPreview from "@/components/shared/BrainPreview"
import Footer from "@/components/shared/Footer"


function LandingPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <BrainPreview />
      </main>

      <Footer />
    </>
  )
}

export default LandingPage