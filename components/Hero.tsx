'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Rocket, Github } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>
      </div>

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-10">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-xl border border-indigo-500/30 rounded-full px-6 py-3 shadow-glow"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-white">Live & Production Ready</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center space-x-1">
                <Github className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">2.1k+ stars</span>
              </div>
            </motion.div>

            {/* Main Headlines */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6"
            >
              <h1 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight">
                <span className="block text-gradient bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Build Software
                </span>
                <span className="block text-gradient-primary mt-2">
                  Like Magic
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl font-medium">
                The world's first <strong className="text-gradient-primary font-bold">Autonomous Software Development Organization</strong>.
                26 AI specialists collaborate to transform your ideas into production-ready applications in minutes, not months.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-hero group relative overflow-hidden"
              >
                <div className="flex items-center justify-center relative z-10">
                  <Rocket className="w-6 h-6 mr-3" />
                  <span>Start Building Free</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>

              <motion.a
                href="https://github.com/vedanta/the-system"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary group"
              >
                <Github className="w-5 h-5 mr-3" />
                <span>GitHub</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Simple Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="card-elevated p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">See The Magic</h3>
            <div className="bg-gray-950 rounded-xl p-6 font-mono text-sm">
              <div className="space-y-2">
                <div className="text-emerald-400">$ /ts-turbo my-saas "Build a project management platform"</div>
                <div className="text-emerald-400">🎩 Founder-Advisor: Strategic analysis complete • GREEN LIGHT</div>
                <div className="text-emerald-400">🤖 Solution-Architect: Optimized stack selected</div>
                <div className="text-emerald-400">💻 Development Department: Building in parallel...</div>
                <div className="text-emerald-400">🚀 Deploy: Live at https://my-saas.vercel.app</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}