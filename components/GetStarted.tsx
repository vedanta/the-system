'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  GitBranch,
  BookOpen,
  MessageCircle,
  Star,
  Terminal,
  Zap,
  Clock,
  CheckCircle
} from 'lucide-react'

const quickStart = [
  {
    step: 1,
    title: 'Clone The System',
    description: 'Get the framework on your machine',
    command: 'git clone https://github.com/vedanta/the-system.git',
    time: '30 seconds'
  },
  {
    step: 2,
    title: 'Run Your First Command',
    description: 'Build your first project with AI',
    command: '/ts-turbo my-app "Build a task management SaaS"',
    time: '15 minutes'
  },
  {
    step: 3,
    title: 'Deploy to Production',
    description: 'Push live with one command',
    command: '/ts-push vercel',
    time: '2 minutes'
  }
]

const resources = [
  {
    title: 'Framework Documentation',
    description: 'Complete guide to all 59 commands and 26 agents',
    icon: <BookOpen className="w-6 h-6" />,
    link: '/docs',
    type: 'docs'
  },
  {
    title: 'GitHub Repository',
    description: 'Star the repo and explore the source code',
    icon: <GitBranch className="w-6 h-6" />,
    link: 'https://github.com/vedanta/the-system',
    type: 'github'
  },
  {
    title: 'Community Discord',
    description: 'Get help and share your projects',
    icon: <MessageCircle className="w-6 h-6" />,
    link: '/discord',
    type: 'community'
  },
  {
    title: 'Video Tutorials',
    description: 'Watch The System in action',
    icon: <Star className="w-6 h-6" />,
    link: '/tutorials',
    type: 'tutorials'
  }
]

export default function GetStarted() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of developers who are shipping faster and building better with The System.
            Get started in under 60 seconds.
          </p>
        </motion.div>

        {/* Quick Start Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gray-900 rounded-2xl p-8 mb-16 overflow-hidden relative"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-l from-system-primary/10 to-transparent rounded-full transform translate-x-32 -translate-y-32" />

          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Quick Start Guide</h3>
                <p className="text-gray-400">From zero to production in under 20 minutes</p>
              </div>
            </div>

            <div className="space-y-6">
              {quickStart.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-system-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">{step.title}</h4>
                      <span className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        {step.time}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{step.description}</p>
                    <div className="bg-black/50 rounded-lg p-3 font-mono text-green-400 text-sm">
                      $ {step.command}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="flex items-center space-x-2 text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Total time: ~17 minutes to live production app</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="btn-primary group text-lg py-4 px-8">
              <Download className="w-5 h-5 mr-3" />
              Get The System
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="btn-secondary group text-lg py-4 px-8">
              <GitBranch className="w-5 h-5 mr-3" />
              Star on GitHub
              <div className="ml-3 bg-system-primary text-white text-sm px-3 py-1 rounded-full">
                2.1k ⭐
              </div>
            </button>

            <button className="btn-ghost group text-lg py-4 px-8">
              <Zap className="w-5 h-5 mr-3" />
              Try Live Demo
            </button>
          </div>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Resources & Community
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-system-200 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-system-50 rounded-xl flex items-center justify-center text-system-primary mb-4 group-hover:bg-system-100 transition-colors">
                  {resource.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{resource.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <div className="flex items-center text-system-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-system-50 to-system-100 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Join the Movement
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-system-primary mb-2">2.1k+</div>
              <div className="text-gray-600">GitHub Stars</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-system-primary mb-2">5,000+</div>
              <div className="text-gray-600">Projects Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-system-primary mb-2">850+</div>
              <div className="text-gray-600">Community Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-system-primary mb-2">99.2%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Stop building from scratch. Start building the future.
          </p>
          <button className="btn-primary group text-xl py-4 px-10">
            <Zap className="w-6 h-6 mr-3" />
            Build Your First Project Now
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}