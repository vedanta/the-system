import { ArrowRight, Github, Clock, Users, Code2, Star } from 'lucide-react'

export default function Hero() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        {/* Status Badge */}
        <div className="inline-flex items-center space-x-3 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-6 py-3 mb-8">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold">Production Ready Framework</span>
          <div className="w-px h-4 bg-gray-600"></div>
          <Github className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-300">Open Source</span>
        </div>

        {/* Main Headlines */}
        <h1 className="text-6xl lg:text-8xl font-black mb-6 tracking-tight">
          <span className="block text-white">Build Software</span>
          <span className="block bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            With AI Teams
          </span>
        </h1>

        <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          The world's first <strong className="text-indigo-400">Autonomous Software Development Organization</strong>.
          26 AI specialists collaborate through 5 development stages with human oversight at key decision points.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
          <div className="bg-gray-900/60 p-6 rounded-xl text-center border border-gray-800">
            <Clock className="w-8 h-8 mx-auto mb-3 text-indigo-400" />
            <div className="text-2xl font-bold text-white mb-1">20-120min</div>
            <div className="text-sm text-gray-400">Concept to Prototype</div>
          </div>
          <div className="bg-gray-900/60 p-6 rounded-xl text-center border border-gray-800">
            <Users className="w-8 h-8 mx-auto mb-3 text-purple-400" />
            <div className="text-2xl font-bold text-white mb-1">26</div>
            <div className="text-sm text-gray-400">AI Specialists</div>
          </div>
          <div className="bg-gray-900/60 p-6 rounded-xl text-center border border-gray-800">
            <Code2 className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
            <div className="text-2xl font-bold text-white mb-1">59</div>
            <div className="text-sm text-gray-400">Commands</div>
          </div>
          <div className="bg-gray-900/60 p-6 rounded-xl text-center border border-gray-800">
            <Star className="w-8 h-8 mx-auto mb-3 text-emerald-400" />
            <div className="text-2xl font-bold text-white mb-1">8</div>
            <div className="text-sm text-gray-400">HITL Gates</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://github.com/vedanta/the-system"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <Github className="w-5 h-5 mr-3" />
            Get Started
            <ArrowRight className="w-5 h-5 ml-3" />
          </a>

          <a
            href="https://github.com/vedanta/the-system/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-1"
          >
            Documentation
            <ArrowRight className="w-5 h-5 ml-3" />
          </a>
        </div>

        {/* Trust Signals */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300 pt-8 border-t border-gray-800">
          <span>✓ Open Source & MIT Licensed</span>
          <span>✓ Production Ready Framework</span>
          <span>✓ Active Development</span>
          <span>✓ Claude Code Compatible</span>
        </div>
      </div>
    </div>
  )
}