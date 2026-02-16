'use client'

import { motion } from 'framer-motion'
import {
  Lightbulb,
  Settings,
  Package,
  Code,
  Rocket,
  ArrowRight,
  Users,
  Clock
} from 'lucide-react'

interface Stage {
  id: number
  name: string
  title: string
  description: string
  agents: string[]
  duration: string
  icon: React.ReactNode
  color: string
  outputs: string[]
}

const stages: Stage[] = [
  {
    id: 1,
    name: 'Architecture',
    title: 'System Design',
    description: 'Analyze requirements and design the optimal technical architecture for your project.',
    agents: ['Solution Architect', 'Enterprise Architect'],
    duration: '2-5 min',
    icon: <Settings className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    outputs: ['Tech stack selection', 'Architecture diagrams', 'ADRs (Architecture Decision Records)', 'Database schema']
  },
  {
    id: 2,
    name: 'Product',
    title: 'Strategy & Planning',
    description: 'Define MVP scope, create user stories, and analyze market positioning.',
    agents: ['Product Lead', 'Project Planner', 'Business Analyst'],
    duration: '3-8 min',
    icon: <Lightbulb className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    outputs: ['MVP definition', 'User stories', 'Project roadmap', 'Market analysis']
  },
  {
    id: 3,
    name: 'Development',
    title: 'Code Generation',
    description: 'Build your entire application with full-stack development across all layers.',
    agents: ['Principal Dev', 'Database Dev', 'Backend Dev', 'Frontend Dev', 'QA Engineer', 'Integration Engineer'],
    duration: '15-35 min',
    icon: <Code className="w-6 h-6" />,
    color: 'from-emerald-500 to-teal-500',
    outputs: ['Complete codebase', 'Database migrations', 'API documentation', 'Test suite']
  },
  {
    id: 4,
    name: 'Release',
    title: 'Quality & Security',
    description: 'Ensure production readiness with documentation, security scans, and release packaging.',
    agents: ['Technical Writer', 'Security Engineer', 'Release Engineer'],
    duration: '5-10 min',
    icon: <Package className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    outputs: ['Documentation', 'Security validation', 'Release artifacts', 'Deployment configs']
  },
  {
    id: 5,
    name: 'Deploy',
    title: 'Go Live',
    description: 'Deploy to production with infrastructure automation and monitoring setup.',
    agents: ['DevOps Engineer', 'SRE Deploy', 'SRE Ops'],
    duration: '2-5 min',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    outputs: ['Live deployment', 'CI/CD pipelines', 'Monitoring alerts', 'Custom domains']
  }
]

export default function HowItWorks() {
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
            How The System Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our 26 AI specialists work together through a proven 5-stage development pipeline.
            From concept to production in one seamless workflow.
          </p>

          {/* Pipeline Overview */}
          <div className="flex justify-center items-center space-x-2 text-sm text-gray-500">
            <span>Total Time:</span>
            <span className="font-semibold text-system-primary">25-60 minutes</span>
            <span>•</span>
            <span>26 AI Agents</span>
            <span>•</span>
            <span>Production Ready</span>
          </div>
        </motion.div>

        {/* Stage Pipeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 top-16 bottom-16 w-0.5 bg-gradient-to-b from-system-200 via-system-300 to-system-200 hidden lg:block" />

          <div className="space-y-12">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${
                  index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:ml-auto'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="p-8">
                    {/* Stage Header */}
                    <div className="flex items-start space-x-4 mb-6">
                      {/* Stage Icon */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${stage.color} flex items-center justify-center shadow-lg`}>
                        <div className="text-white">
                          {stage.icon}
                        </div>
                      </div>

                      {/* Stage Info */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${stage.color} text-white`}>
                            Stage {stage.id}
                          </span>
                          <span className="flex items-center text-gray-500 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            {stage.duration}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {stage.title}
                        </h3>
                        <p className="text-gray-600">
                          {stage.description}
                        </p>
                      </div>
                    </div>

                    {/* Agents */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-700">
                          AI Specialists ({stage.agents.length})
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {stage.agents.map((agent) => (
                          <span
                            key={agent}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {agent}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Outputs */}
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-3">
                        Key Outputs
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {stage.outputs.map((output) => (
                          <div key={output} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-system-primary" />
                            <span className="text-sm text-gray-600">{output}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="h-1 bg-gray-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${stage.color}`}
                    />
                  </div>
                </div>

                {/* Stage Number (Mobile) */}
                <div className="absolute -top-6 left-8 lg:hidden">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${stage.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {stage.id}
                  </div>
                </div>

                {/* Connection Point (Desktop) */}
                <div className={`absolute top-12 hidden lg:block ${
                  index % 2 === 0 ? 'right-0 transform translate-x-1/2' : 'left-0 transform -translate-x-1/2'
                }`}>
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${stage.color} shadow-lg border-4 border-white`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Human Control Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-system-50 to-system-100 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            You Stay in Control
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            The System includes 8 Human-in-the-Loop gates where you review and approve
            key decisions. You're always in charge of your project's direction.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white text-system-primary rounded-lg font-medium shadow-sm">
              Architecture Approval
            </span>
            <span className="px-4 py-2 bg-white text-system-primary rounded-lg font-medium shadow-sm">
              🚦 Green Light Gate
            </span>
            <span className="px-4 py-2 bg-white text-system-primary rounded-lg font-medium shadow-sm">
              Development Review
            </span>
            <span className="px-4 py-2 bg-white text-system-primary rounded-lg font-medium shadow-sm">
              🚀 Launch Approval
            </span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-12"
        >
          <button className="btn-primary group">
            Experience The System Pipeline
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}