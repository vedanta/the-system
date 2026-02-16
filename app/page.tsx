import Hero from '@/components/Hero'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
        </div>
        <div className="container relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-6">Complete Development Ecosystem</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From concept to production, The System provides everything you need for modern software development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-10 rounded-2xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Architecture</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">Complete system design with enterprise patterns, solution architecture, and technology stack optimization.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• System design & ADRs</li>
                <li>• Technology selection & optimization</li>
                <li>• Scalability & performance planning</li>
                <li>• Integration architecture</li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-10 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Complete Design System</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">Professional design department with UX analysis, wireframes, interactive prototypes, and style management.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Interactive wireframes & prototypes</li>
                <li>• UX analysis & accessibility audits</li>
                <li>• Design system & style libraries</li>
                <li>• API-driven UI generation</li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-10 rounded-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Development</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">Full-stack development with specialized agents for database design, backend APIs, and modern frontend implementation.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Database schema & migrations</li>
                <li>• RESTful APIs & GraphQL endpoints</li>
                <li>• Modern React/Vue/Angular frontends</li>
                <li>• Real-time features & WebSockets</li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-10 rounded-2xl border border-gray-700/50 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Legacy Modernization</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">Comprehensive analysis of existing codebases with automated migration strategies and implementation guidance.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Codebase health assessment</li>
                <li>• Technology debt analysis</li>
                <li>• Migration pathway planning</li>
                <li>• Modernization roadmaps</li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-10 rounded-2xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Security & Quality</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">Enterprise-grade security scanning, comprehensive testing strategies, and quality assurance throughout development.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• OWASP security compliance</li>
                <li>• Automated vulnerability scanning</li>
                <li>• Comprehensive test coverage</li>
                <li>• Performance & load testing</li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-10 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Production Deployment</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">Complete CI/CD pipelines, infrastructure as code, containerization, and production monitoring with SRE practices.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Docker & Kubernetes deployment</li>
                <li>• Infrastructure as Code (Terraform)</li>
                <li>• CI/CD pipelines & automated testing</li>
                <li>• Monitoring, alerting & SLOs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 bg-gray-950 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-6">Intelligent Development Pipeline</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Each stage builds upon the previous with specialized AI agents and human oversight at critical decision points
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {/* Stage 1 */}
              <div className="group relative">
                <div className="flex items-start space-x-8 p-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">1</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <h3 className="text-2xl font-bold text-white">Architecture & Design</h3>
                      <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-semibold">HITL Gate</span>
                    </div>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">Strategic foundation with system architecture, technology optimization, and comprehensive design planning.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                        <div className="text-indigo-400 font-semibold text-sm mb-1">Solution Architect</div>
                        <div className="text-gray-300 text-xs">Stack selection & optimization</div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                        <div className="text-purple-400 font-semibold text-sm mb-1">Enterprise Architect</div>
                        <div className="text-gray-300 text-xs">System design & ADRs</div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                        <div className="text-emerald-400 font-semibold text-sm mb-1">UX Analyzer</div>
                        <div className="text-gray-300 text-xs">User experience design</div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                        <div className="text-cyan-400 font-semibold text-sm mb-1">Wireframe Generator</div>
                        <div className="text-gray-300 text-xs">Interactive prototypes</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Connection Line */}
                <div className="absolute -bottom-6 left-10 w-0.5 h-12 bg-gradient-to-b from-indigo-500 to-purple-500 opacity-30"></div>
              </div>

              {/* Stage 2 */}
              <div className="group relative">
                <div className="flex items-start space-x-8 p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">2</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <h3 className="text-2xl font-bold text-white">Product Strategy</h3>
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-semibold">Green Light</span>
                    </div>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">Define MVP scope, create detailed roadmaps, and validate market opportunity with comprehensive business analysis.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                        <div className="text-purple-400 font-semibold text-sm mb-1">Product Lead</div>
                        <div className="text-gray-300 text-xs">MVP definition & user stories</div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                        <div className="text-pink-400 font-semibold text-sm mb-1">Project Planner</div>
                        <div className="text-gray-300 text-xs">Roadmaps & sprint planning</div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                        <div className="text-rose-400 font-semibold text-sm mb-1">Business Analyst</div>
                        <div className="text-gray-300 text-xs">Market analysis & ROI</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 left-10 w-0.5 h-12 bg-gradient-to-b from-purple-500 to-cyan-500 opacity-30"></div>
              </div>

              {/* Stage 3 */}
              <div className="group relative">
                <div className="flex items-start space-x-8 p-8 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">3</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <h3 className="text-2xl font-bold text-white">Full-Stack Development</h3>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-semibold">Quality Gates</span>
                    </div>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">Comprehensive implementation with specialized teams for database, backend services, frontend interfaces, and seamless integration.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                        <div className="text-cyan-400 font-semibold text-sm mb-1">Database Developer</div>
                        <div className="text-gray-300 text-xs">Schema design & migrations</div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                        <div className="text-emerald-400 font-semibold text-sm mb-1">Backend Developer</div>
                        <div className="text-gray-300 text-xs">APIs & business logic</div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                        <div className="text-green-400 font-semibold text-sm mb-1">Frontend Developer</div>
                        <div className="text-gray-300 text-xs">UI components & UX</div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                        <div className="text-teal-400 font-semibold text-sm mb-1">Integration Engineer</div>
                        <div className="text-gray-300 text-xs">E2E testing & deployment</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 left-10 w-0.5 h-12 bg-gradient-to-b from-cyan-500 to-amber-500 opacity-30"></div>
              </div>

              {/* Stage 4 */}
              <div className="group relative">
                <div className="flex items-start space-x-8 p-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">4</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <h3 className="text-2xl font-bold text-white">Release & Security</h3>
                      <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm font-semibold">Security Critical</span>
                    </div>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">Production readiness with comprehensive documentation, security validation, release packaging, and infrastructure setup.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                        <div className="text-amber-400 font-semibold text-sm mb-1">Technical Writer</div>
                        <div className="text-gray-300 text-xs">Architecture documentation</div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                        <div className="text-red-400 font-semibold text-sm mb-1">Security Engineer</div>
                        <div className="text-gray-300 text-xs">OWASP compliance & scans</div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                        <div className="text-orange-400 font-semibold text-sm mb-1">Release Engineer</div>
                        <div className="text-gray-300 text-xs">Version control & packaging</div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                        <div className="text-yellow-400 font-semibold text-sm mb-1">DevOps Engineer</div>
                        <div className="text-gray-300 text-xs">Infrastructure as Code</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 left-10 w-0.5 h-12 bg-gradient-to-b from-amber-500 to-emerald-500 opacity-30"></div>
              </div>

              {/* Stage 5 */}
              <div className="group relative">
                <div className="flex items-start space-x-8 p-8 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">5</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <h3 className="text-2xl font-bold text-white">Production & Operations</h3>
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-semibold">Launch Ready</span>
                    </div>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">Live deployment with comprehensive monitoring, alerting systems, SRE practices, and ongoing operational excellence.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                        <div className="text-emerald-400 font-semibold text-sm mb-1">SRE Deploy Engineer</div>
                        <div className="text-gray-300 text-xs">Production deployment & scaling</div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                        <div className="text-green-400 font-semibold text-sm mb-1">SRE Ops Engineer</div>
                        <div className="text-gray-300 text-xs">Monitoring, alerting & SLOs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Flow Summary */}
            <div className="mt-16 p-8 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-600/50 backdrop-blur-sm">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Human-in-the-Loop Excellence</h3>
                <p className="text-gray-300 text-lg mb-6">Critical decisions require human approval, ensuring quality and alignment at every stage</p>
                <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
                  <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full font-semibold">Architecture Review</span>
                  <span className="text-gray-500">→</span>
                  <span className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full font-semibold">Green Light Approval</span>
                  <span className="text-gray-500">→</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full font-semibold">Development Gates</span>
                  <span className="text-gray-500">→</span>
                  <span className="px-4 py-2 bg-red-500/20 text-red-300 rounded-full font-semibold">Security Validation</span>
                  <span className="text-gray-500">→</span>
                  <span className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full font-semibold">Launch Approval</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="agents" className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        </div>

        <div className="container relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-6">Expert AI Agent Organization</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Specialized departments with domain expertise working in harmony to deliver comprehensive solutions
            </p>
          </div>

          {/* Department Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">

            {/* Architecture Department */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 p-10 rounded-2xl border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">📐</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Architecture Department</h3>
                    <div className="text-indigo-300 font-medium">Strategic Foundation</div>
                  </div>
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">Enterprise architects and solution specialists design scalable, maintainable systems with optimal technology selection.</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span className="text-gray-200 font-medium">Solution Architect</span>
                    <span className="text-gray-400 text-sm">Technology optimization & stack selection</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span className="text-gray-200 font-medium">Enterprise Architect</span>
                    <span className="text-gray-400 text-sm">System design & architecture decisions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Department */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 p-10 rounded-2xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">🎨</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Design Department</h3>
                    <div className="text-purple-300 font-medium">User Experience Excellence</div>
                  </div>
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">Comprehensive design system with UX research, interactive prototypes, and professional visual design.</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-200 font-medium">UX Analyzer</span>
                    <span className="text-gray-400 text-sm">User experience research & optimization</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-200 font-medium">Wireframe Generator</span>
                    <span className="text-gray-400 text-sm">Interactive prototypes & mockups</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-200 font-medium">Style Manager</span>
                    <span className="text-gray-400 text-sm">Design systems & brand consistency</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-200 font-medium">Prototype Developer</span>
                    <span className="text-gray-400 text-sm">Interactive demos & validations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Department */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/5 p-10 rounded-2xl border border-pink-500/30 hover:border-pink-400/60 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">📦</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Product Department</h3>
                    <div className="text-pink-300 font-medium">Market Strategy & Planning</div>
                  </div>
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">Product strategy, market analysis, and comprehensive planning for successful product launches.</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-200 font-medium">Product Lead</span>
                    <span className="text-gray-400 text-sm">MVP definition & user story creation</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-200 font-medium">Project Planner</span>
                    <span className="text-gray-400 text-sm">Roadmaps, sprints & timeline management</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-200 font-medium">Business Analyst</span>
                    <span className="text-gray-400 text-sm">Market research & financial modeling</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Department */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 p-10 rounded-2xl border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">💻</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Development Department</h3>
                    <div className="text-emerald-300 font-medium">Full-Stack Implementation</div>
                  </div>
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">Complete development team with specialized expertise across all technology layers and integration patterns.</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-gray-200 font-medium">Database Developer</span>
                    <span className="text-gray-400 text-sm">Schema design & data modeling</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-gray-200 font-medium">Backend Developer</span>
                    <span className="text-gray-400 text-sm">APIs, services & business logic</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-gray-200 font-medium">Frontend Developer</span>
                    <span className="text-gray-400 text-sm">UI components & user interfaces</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-gray-200 font-medium">Integration Engineer</span>
                    <span className="text-gray-400 text-sm">System integration & E2E testing</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Release & Operations Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

            {/* Release Department */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 p-10 rounded-2xl border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">🚀</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Release Department</h3>
                    <div className="text-orange-300 font-medium">Production Readiness</div>
                  </div>
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">Comprehensive release preparation with documentation, security validation, and deployment infrastructure.</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-200 font-medium">Technical Writer</span>
                    <span className="text-gray-400 text-sm">Architecture & API documentation</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-200 font-medium">Security Engineer</span>
                    <span className="text-gray-400 text-sm">OWASP compliance & vulnerability scans</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-200 font-medium">Release Engineer</span>
                    <span className="text-gray-400 text-sm">Version control & artifact packaging</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-200 font-medium">DevOps Engineer</span>
                    <span className="text-gray-400 text-sm">Infrastructure as Code & CI/CD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operations Department */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 p-10 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">🛡️</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Operations Department</h3>
                    <div className="text-cyan-300 font-medium">Production Excellence</div>
                  </div>
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">Site reliability engineering with comprehensive monitoring, alerting, and operational excellence practices.</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-200 font-medium">SRE Deploy Engineer</span>
                    <span className="text-gray-400 text-sm">Production deployment & scaling</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-gray-200 font-medium">SRE Ops Engineer</span>
                    <span className="text-gray-400 text-sm">Monitoring, alerting & SLO management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Agent Summary */}
          <div className="mt-16 p-8 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-600/50 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Collaborative Intelligence Network</h3>
              <p className="text-gray-300 text-lg mb-6">Each agent specializes in their domain while collaborating seamlessly across departments for comprehensive project delivery</p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-gray-300">Strategic Planning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">Design Excellence</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-300">Product Strategy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-300">Full-Stack Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Release Management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-300">Operations Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="py-24 bg-gray-950 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900/50 to-gray-950"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-6">Transform Any Development Challenge</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From greenfield innovation to legacy transformation, The System adapts to your unique development needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">

            {/* New Projects */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-indigo-600/10 p-10 rounded-3xl border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-500 backdrop-blur-sm hover:transform hover:scale-105">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-indigo-500/25 transition-all duration-500">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">New Projects</h3>
                    <div className="text-indigo-300 text-lg font-medium">From Concept to Production</div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">Transform innovative ideas into market-ready applications with our comprehensive development pipeline and expert AI guidance.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                    <div className="text-indigo-400 font-semibold mb-2">⚡ Rapid MVP Development</div>
                    <div className="text-gray-400 text-sm">Validate ideas quickly with working prototypes</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                    <div className="text-purple-400 font-semibold mb-2">🏗️ Full-Stack Applications</div>
                    <div className="text-gray-400 text-sm">Complete web and mobile application development</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                    <div className="text-cyan-400 font-semibold mb-2">🔌 API Architecture</div>
                    <div className="text-gray-400 text-sm">Scalable backend services and integrations</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                    <div className="text-emerald-400 font-semibold mb-2">🌐 Modern Web Apps</div>
                    <div className="text-gray-400 text-sm">React, Vue, Angular with best practices</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>20-120min delivery</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Production-ready</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Fully documented</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Legacy Modernization */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-emerald-600/10 p-10 rounded-3xl border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-500 backdrop-blur-sm hover:transform hover:scale-105">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-emerald-500/25 transition-all duration-500">
                    <span className="text-4xl">🔄</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Legacy Modernization</h3>
                    <div className="text-emerald-300 text-lg font-medium">Transform Existing Systems</div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">Breathe new life into existing codebases with comprehensive analysis, strategic migration planning, and seamless modernization.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                    <div className="text-emerald-400 font-semibold mb-2">🔍 Codebase Analysis</div>
                    <div className="text-gray-400 text-sm">Deep health assessment and technical debt evaluation</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                    <div className="text-teal-400 font-semibold mb-2">📋 Migration Planning</div>
                    <div className="text-gray-400 text-sm">Strategic roadmaps for seamless transitions</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                    <div className="text-cyan-400 font-semibold mb-2">⬆️ Stack Upgrades</div>
                    <div className="text-gray-400 text-sm">Modern technology adoption and optimization</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                    <div className="text-green-400 font-semibold mb-2">🎯 Gap Analysis</div>
                    <div className="text-gray-400 text-sm">Implementation requirements and risk assessment</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>Risk assessment</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span>Zero downtime</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Future-ready</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Enterprise Solutions */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-purple-600/10 p-10 rounded-3xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 backdrop-blur-sm hover:transform hover:scale-105">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-purple-500/25 transition-all duration-500">
                    <span className="text-4xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Enterprise Solutions</h3>
                    <div className="text-purple-300 text-lg font-medium">Scale & Security First</div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">Build mission-critical applications with enterprise-grade security, comprehensive documentation, and scalable architecture.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                    <div className="text-purple-400 font-semibold mb-2">🏛️ Enterprise Architecture</div>
                    <div className="text-gray-400 text-sm">Scalable, maintainable system design</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                    <div className="text-red-400 font-semibold mb-2">🔒 Security Compliance</div>
                    <div className="text-gray-400 text-sm">OWASP standards and vulnerability protection</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                    <div className="text-pink-400 font-semibold mb-2">📚 Complete Documentation</div>
                    <div className="text-gray-400 text-sm">Architecture guides and API references</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                    <div className="text-violet-400 font-semibold mb-2">🚀 Production Pipelines</div>
                    <div className="text-gray-400 text-sm">CI/CD, monitoring, and deployment automation</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Security validated</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Enterprise scale</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Compliance ready</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Rapid Prototyping */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-amber-600/10 p-10 rounded-3xl border border-amber-500/30 hover:border-amber-400/60 transition-all duration-500 backdrop-blur-sm hover:transform hover:scale-105">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-amber-500/25 transition-all duration-500">
                    <span className="text-4xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Rapid Prototyping</h3>
                    <div className="text-amber-300 text-lg font-medium">Validate Ideas Fast</div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">Create compelling proof-of-concepts and interactive demonstrations to validate ideas and secure stakeholder buy-in.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                    <div className="text-amber-400 font-semibold mb-2">🎨 Interactive Prototypes</div>
                    <div className="text-gray-400 text-sm">Clickable demos with realistic interactions</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                    <div className="text-orange-400 font-semibold mb-2">🎯 Design Systems</div>
                    <div className="text-gray-400 text-sm">Consistent visual language and components</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                    <div className="text-yellow-400 font-semibold mb-2">📊 Stakeholder Demos</div>
                    <div className="text-gray-400 text-sm">Professional presentations and walkthroughs</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                    <div className="text-red-400 font-semibold mb-2">✅ Concept Validation</div>
                    <div className="text-gray-400 text-sm">User testing and feedback integration</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Minutes not weeks</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Interactive demos</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Stakeholder ready</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="mt-20 p-10 bg-gradient-to-r from-gray-800/60 to-gray-700/60 rounded-3xl border border-gray-600/50 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Proven Results Across Industries</h3>
              <p className="text-gray-300 text-lg">The System delivers consistent value across diverse development scenarios</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-black text-indigo-400 mb-2">Minutes</div>
                <div className="text-gray-300 font-medium">Concept to Prototype</div>
                <div className="text-gray-500 text-sm">Not weeks or months</div>
              </div>
              <div>
                <div className="text-3xl font-black text-emerald-400 mb-2">100%</div>
                <div className="text-gray-300 font-medium">Production Ready</div>
                <div className="text-gray-500 text-sm">Security validated</div>
              </div>
              <div>
                <div className="text-3xl font-black text-purple-400 mb-2">5-Stage</div>
                <div className="text-gray-300 font-medium">Comprehensive Pipeline</div>
                <div className="text-gray-500 text-sm">End-to-end coverage</div>
              </div>
              <div>
                <div className="text-3xl font-black text-amber-400 mb-2">HITL</div>
                <div className="text-gray-300 font-medium">Quality Control</div>
                <div className="text-gray-500 text-sm">Human oversight gates</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}