import Navbar from "@/components/shared/Navbar"
import Hero from "@/components/shared/Hero"
import KnowledgePreview from "@/components/shared/KnowledgePreview"
import Footer from "@/components/shared/Footer"


function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="pattern-light flex-1">
        <Navbar />

        <main>
          <Hero />
          <KnowledgePreview />
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default LandingPage