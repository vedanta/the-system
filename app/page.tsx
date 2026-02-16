import Hero from '@/components/Hero'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <Hero />

      {/* Placeholder sections for the navigation links */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="container">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Features</h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto">
            The System provides a complete autonomous software development organization with 26 AI specialists,
            59 commands, and 5 development stages. Build software with human oversight at 8 key decision points.
          </p>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gray-950">
        <div className="container">
          <h2 className="text-4xl font-bold text-white text-center mb-8">How It Works</h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto">
            Five-stage pipeline: Architecture → Product → Development → Release → Go Live.
            Each stage has specialized AI agents with human approval gates at critical decisions.
          </p>
        </div>
      </section>

      <section id="agents" className="py-20 bg-gray-900">
        <div className="container">
          <h2 className="text-4xl font-bold text-white text-center mb-8">AI Agents</h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto">
            26 specialized AI agents across 6 departments: Architecture, Design, Product, Development, Release, and Operations.
            Each agent has specific expertise and tools for their domain.
          </p>
        </div>
      </section>

      <section id="use-cases" className="py-20 bg-gray-950">
        <div className="container">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Use Cases</h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto">
            Perfect for rapid prototyping, MVP development, legacy modernization, and full-stack applications.
            Works with multiple technology stacks and deployment platforms.
          </p>
        </div>
      </section>
    </div>
  )
}