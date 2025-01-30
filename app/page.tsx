import { Navbar } from "./components/navbar"
import { Header } from "./components/header"
import { About } from "./components/about"
import { Projects } from "./components/projects"
import { Education } from "./components/education"
import { ProfessionalSummary } from "./components/professional-summary"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navbar />
      <Header />
      <About />
      <Education />
      <Projects />
      <ProfessionalSummary />
      <Contact />
      <Footer />
    </main>
  )
}

