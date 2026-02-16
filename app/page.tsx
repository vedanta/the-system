import Hero from '@/components/Hero'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="container">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Complete Development Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">🏗️ Full Architecture</h3>
              <p className="text-gray-300">Complete system design with enterprise architecture, solution planning, and technology optimization.</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">🎨 Design Department</h3>
              <p className="text-gray-300">Professional wireframes, prototypes, style systems, and comprehensive UX analysis.</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">⚡ Rapid Development</h3>
              <p className="text-gray-300">Full-stack development with specialized agents for database, backend, and frontend implementation.</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">🔍 Legacy Analysis</h3>
              <p className="text-gray-300">Analyze and modernize existing codebases with migration pathways and implementation strategies.</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">🛡️ Security & QA</h3>
              <p className="text-gray-300">Built-in security scanning, comprehensive testing, and quality assurance throughout the pipeline.</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">🚀 Full Deployment</h3>
              <p className="text-gray-300">Complete CI/CD pipelines, infrastructure as code, and production deployment with monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gray-950">
        <div className="container">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Five-Stage Development Pipeline</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center space-x-6 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-white">1</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Architecture & Design</h3>
                  <p className="text-gray-300">System design, technology selection, wireframes, and comprehensive planning with human oversight.</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center font-bold text-white">2</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Product Planning</h3>
                  <p className="text-gray-300">MVP definition, user stories, project roadmaps, and business analysis with approval gates.</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center font-bold text-white">3</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Development</h3>
                  <p className="text-gray-300">Full-stack implementation with specialized agents for database, backend, frontend, and integration.</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-white">4</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Release & Security</h3>
                  <p className="text-gray-300">Documentation, security validation, release packaging, and deployment infrastructure setup.</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white">5</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Go Live & Operations</h3>
                  <p className="text-gray-300">Production deployment, monitoring setup, alerting configuration, and ongoing operations support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="agents" className="py-20 bg-gray-900">
        <div className="container">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Specialized AI Agent Teams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-indigo-400 mb-4">📐 Architecture Department</h3>
              <p className="text-gray-300 mb-4">System architects and enterprise specialists design scalable, maintainable solutions.</p>
              <div className="text-sm text-gray-400">Solution Architect • Enterprise Architect</div>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-purple-400 mb-4">🎨 Design Department</h3>
              <p className="text-gray-300 mb-4">Complete design system with UX analysis, wireframes, prototypes, and style management.</p>
              <div className="text-sm text-gray-400">UX Analyzer • Wireframe Generator • Style Manager • Prototype Developer</div>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">📦 Product Department</h3>
              <p className="text-gray-300 mb-4">Product strategy, planning, and business analysis for market-ready solutions.</p>
              <div className="text-sm text-gray-400">Product Lead • Project Planner • Business Analyst</div>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-emerald-400 mb-4">💻 Development Department</h3>
              <p className="text-gray-300 mb-4">Full-stack development team with specialized expertise for each technology layer.</p>
              <div className="text-sm text-gray-400">Database Developer • Backend Developer • Frontend Developer • Integration Engineer</div>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-orange-400 mb-4">🚀 Release Department</h3>
              <p className="text-gray-300 mb-4">Documentation, security, packaging, and deployment infrastructure specialists.</p>
              <div className="text-sm text-gray-400">Technical Writer • Security Engineer • Release Engineer • DevOps Engineer</div>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-rose-400 mb-4">🛡️ Operations Department</h3>
              <p className="text-gray-300 mb-4">Production deployment, monitoring, alerting, and ongoing operational support.</p>
              <div className="text-sm text-gray-400">SRE Deploy Engineer • SRE Ops Engineer</div>
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="py-20 bg-gray-950">
        <div className="container">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Perfect for Every Development Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">🚀 New Projects</h3>
              <p className="text-gray-300 mb-6">Transform ideas into working prototypes and production applications with comprehensive development pipeline.</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Rapid MVP development</li>
                <li>• Full-stack application creation</li>
                <li>• API and service architecture</li>
                <li>• Modern web applications</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">🔄 Legacy Modernization</h3>
              <p className="text-gray-300 mb-6">Analyze existing codebases and create migration strategies for modernization and enhancement.</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Codebase analysis and assessment</li>
                <li>• Migration pathway planning</li>
                <li>• Technology stack upgrades</li>
                <li>• Implementation gap analysis</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">🎯 Enterprise Solutions</h3>
              <p className="text-gray-300 mb-6">Scalable enterprise applications with comprehensive security, documentation, and deployment.</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Enterprise architecture design</li>
                <li>• Security compliance validation</li>
                <li>• Comprehensive documentation</li>
                <li>• Production deployment pipelines</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">⚡ Rapid Prototyping</h3>
              <p className="text-gray-300 mb-6">Quick proof-of-concepts and prototypes for validation and stakeholder demonstrations.</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Interactive prototypes</li>
                <li>• Design system creation</li>
                <li>• Stakeholder presentations</li>
                <li>• Concept validation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}