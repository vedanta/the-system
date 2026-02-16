import Hero from '@/components/Hero'
import ProjectShowcase from '@/components/ProjectShowcase'
import HowItWorks from '@/components/HowItWorks'
import AgentShowcase from '@/components/AgentShowcase'
import TechnicalProof from '@/components/TechnicalProof'
import UseCases from '@/components/UseCases'
import GetStarted from '@/components/GetStarted'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Project Showcase - Multiple project types */}
      <ProjectShowcase />

      {/* How The System Works - 5 stage pipeline */}
      <HowItWorks />

      {/* Agent Showcase - 26 AI specialists */}
      <AgentShowcase />

      {/* Use Cases - Different audiences */}
      <UseCases />

      {/* Technical Proof - Quality guarantees */}
      <TechnicalProof />

      {/* Get Started - CTAs and next steps */}
      <GetStarted />

      {/* Footer */}
      <Footer />
    </div>
  )
}