'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Rocket,
  Code2,
  Zap,
  Users,
  ArrowRight,
  Star,
  GitBranch,
  Terminal
} from 'lucide-react'

const projectTypes = [
  { id: 'saas', name: 'SaaS Platform', time: '45 min', icon: '💼' },
  { id: 'ecommerce', name: 'E-commerce Store', time: '30 min', icon: '🛍️' },
  { id: 'mobile', name: 'Mobile API', time: '25 min', icon: '📱' },
  { id: 'enterprise', name: 'Enterprise Tool', time: '60 min', icon: '🏢' },
  { id: 'dashboard', name: 'Analytics Dashboard', time: '35 min', icon: '📊' },
  { id: 'todox', name: 'TodoX (Featured)', time: '25 min', icon: '✅' },
]

export default function Hero() {
  const [selectedProject, setSelectedProject] = useState('saas')
  const [terminalText, setTerminalText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleProjectSelect = (projectId: string) => {
    setSelectedProject(projectId)
    const project = projectTypes.find(p => p.id === projectId)
    if (project) {
      typeCommand(`/ts-turbo my-${projectId} "Build a ${project.name.toLowerCase()}"`)
    }
  }

  const typeCommand = (command: string) => {
    setIsTyping(true)
    setTerminalText('')

    let i = 0
    const typeInterval = setInterval(() => {
      if (i < command.length) {
        setTerminalText(command.slice(0, i + 1))
        i++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setTerminalText('')
          setIsTyping(false)
        }, 2000)
      }
    }, 50)
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-system-50 via-white to-system-100" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-system-200/20 to-system-300/20 animate-float" />
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 rounded-full bg-gradient-to-tr from-system-secondary/10 to-system-accent/10 animate-float animation-delay-400" />
      </div>

      <div className="relative container py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-system-primary/10 text-system-primary px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Rocket className="w-4 h-4" />
              <span>26 AI Specialists • 59 Commands • 5 Stages</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              <span className="block">THE SYSTEM</span>
              <span className="block gradient-text">
                Build Anything
              </span>
              <span className="block text-gray-600 text-3xl md:text-4xl lg:text-5xl">
                with AI
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-gray-600 mb-8 max-w-lg text-balance"
            >
              Transform any idea into production-ready software. From concept to deployment in minutes, not months.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center space-x-6 mb-8"
            >
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="w-5 h-5 text-system-primary" />
                <span><strong className="text-gray-900">26</strong> AI Agents</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Code2 className="w-5 h-5 text-system-primary" />
                <span><strong className="text-gray-900">59</strong> Commands</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Zap className="w-5 h-5 text-system-primary" />
                <span><strong className="text-gray-900">5</strong> Minutes to MVP</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
            >
              <button className="btn-primary group">
                <span>Start Building</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="btn-secondary group">
                <GitBranch className="w-4 h-4 mr-2" />
                <span>Star on GitHub</span>
                <div className="ml-2 bg-system-primary text-white text-xs px-2 py-1 rounded-full">
                  2.1k
                </div>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:pl-8"
          >
            {/* Project Type Selector */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What would you like to build today?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {projectTypes.map((project) => (
                  <motion.button
                    key={project.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleProjectSelect(project.id)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                      selectedProject === project.id
                        ? 'border-system-primary bg-system-50 text-system-primary'
                        : 'border-gray-200 hover:border-system-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{project.icon}</span>
                      <div>
                        <div className="font-medium text-sm">{project.name}</div>
                        <div className="text-xs text-gray-500">{project.time}</div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Terminal Demo */}
            <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
              <div className="flex items-center space-x-2 px-4 py-3 bg-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-400 text-sm ml-4">The System Terminal</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <div className="text-gray-400">$ # Transform any idea into production software</div>
                <div className="text-green-400 flex items-center mt-2">
                  <span className="mr-2">$</span>
                  <span className="text-white">
                    {terminalText}
                    {isTyping && <span className="animate-pulse">|</span>}
                  </span>
                </div>
                {!terminalText && !isTyping && (
                  <div className="text-gray-400 mt-2">
                    👆 Click a project type above to see The System in action
                  </div>
                )}
              </div>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 bg-system-50 text-system-primary rounded-full text-sm font-medium">
                Production Ready
              </span>
              <span className="px-3 py-1 bg-system-50 text-system-primary rounded-full text-sm font-medium">
                Full Stack
              </span>
              <span className="px-3 py-1 bg-system-50 text-system-primary rounded-full text-sm font-medium">
                Auto Deploy
              </span>
              <span className="px-3 py-1 bg-system-50 text-system-primary rounded-full text-sm font-medium">
                Enterprise Grade
              </span>
            </div>
          </motion.div>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">Trusted by developers building the future</p>
          <div className="flex items-center justify-center space-x-8 grayscale opacity-60">
            <div className="text-2xl font-bold">StartupX</div>
            <div className="text-2xl font-bold">TechCorp</div>
            <div className="text-2xl font-bold">InnovateLab</div>
            <div className="text-2xl font-bold">DevStudio</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}