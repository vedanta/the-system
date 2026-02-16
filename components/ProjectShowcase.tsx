'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Globe,
  ShoppingCart,
  Smartphone,
  Building2,
  BarChart3,
  CheckSquare,
  ArrowRight,
  Clock,
  Code,
  ExternalLink
} from 'lucide-react'

interface Project {
  id: string
  name: string
  description: string
  category: string
  buildTime: string
  linesOfCode: string
  icon: React.ReactNode
  gradient: string
  features: string[]
  demoUrl?: string
  caseStudy?: string
}

const projects: Project[] = [
  {
    id: 'saas',
    name: 'SaaS Platform',
    description: 'Multi-tenant CRM with billing, authentication, and admin dashboard',
    category: 'Business Software',
    buildTime: '45 minutes',
    linesOfCode: '4,200+',
    icon: <Globe className="w-8 h-8" />,
    gradient: 'from-blue-500 to-cyan-500',
    features: ['Multi-tenant architecture', 'Stripe billing', 'Role-based auth', 'Admin dashboard', 'API documentation'],
    demoUrl: 'https://saas-demo.vercel.app',
    caseStudy: '/examples/saas'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Store',
    description: 'Modern online store with payments, inventory, and order management',
    category: 'E-commerce',
    buildTime: '30 minutes',
    linesOfCode: '3,100+',
    icon: <ShoppingCart className="w-8 h-8" />,
    gradient: 'from-emerald-500 to-teal-500',
    features: ['Product catalog', 'Shopping cart', 'Payment processing', 'Order tracking', 'Admin panel'],
    demoUrl: 'https://store-demo.vercel.app',
    caseStudy: '/examples/ecommerce'
  },
  {
    id: 'mobile-api',
    name: 'Mobile API',
    description: 'RESTful API with authentication, rate limiting, and documentation',
    category: 'Backend Service',
    buildTime: '25 minutes',
    linesOfCode: '2,800+',
    icon: <Smartphone className="w-8 h-8" />,
    gradient: 'from-purple-500 to-pink-500',
    features: ['JWT authentication', 'Rate limiting', 'Auto documentation', 'Testing suite', 'Docker deployment'],
    demoUrl: 'https://api-demo.railway.app',
    caseStudy: '/examples/mobile-api'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Portal',
    description: 'Employee portal with SSO, role management, and compliance features',
    category: 'Enterprise',
    buildTime: '60 minutes',
    linesOfCode: '5,500+',
    icon: <Building2 className="w-8 h-8" />,
    gradient: 'from-indigo-500 to-blue-500',
    features: ['SAML/SSO integration', 'RBAC permissions', 'Audit logging', 'Compliance reports', 'Multi-environment'],
    demoUrl: 'https://enterprise-demo.vercel.app',
    caseStudy: '/examples/enterprise'
  },
  {
    id: 'dashboard',
    name: 'Analytics Dashboard',
    description: 'Real-time analytics with charts, filters, and data visualization',
    category: 'Data & Analytics',
    buildTime: '35 minutes',
    linesOfCode: '3,400+',
    icon: <BarChart3 className="w-8 h-8" />,
    gradient: 'from-orange-500 to-red-500',
    features: ['Real-time charts', 'Custom filters', 'Data export', 'Responsive design', 'Performance optimized'],
    demoUrl: 'https://dashboard-demo.vercel.app',
    caseStudy: '/examples/dashboard'
  },
  {
    id: 'todox',
    name: 'TodoX (Featured)',
    description: 'Enterprise task management with teams, projects, and dependencies',
    category: 'Productivity',
    buildTime: '25 minutes',
    linesOfCode: '2,900+',
    icon: <CheckSquare className="w-8 h-8" />,
    gradient: 'from-green-500 to-emerald-500',
    features: ['Team collaboration', 'Project tracking', 'Task dependencies', 'Time tracking', 'Reporting'],
    demoUrl: 'https://todo-x-eight.vercel.app',
    caseStudy: '/examples/todox'
  }
]

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState('saas')

  const selected = projects.find(p => p.id === selectedProject) || projects[0]

  return (
    <section className="py-20 bg-gray-50">
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
            Build Anything, Deploy Everywhere
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The System isn't limited to one type of project. See how our 26 AI specialists
            can build any software you can imagine, from simple APIs to complex enterprise systems.
          </p>
        </motion.div>

        {/* Project Selection Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
        >
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedProject(project.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                selectedProject === project.id
                  ? 'border-system-primary bg-white shadow-lg'
                  : 'border-gray-200 hover:border-system-200 bg-white/50 hover:bg-white'
              }`}
            >
              <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${project.gradient} mb-3`}>
                <div className="text-white">
                  {project.icon}
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{project.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{project.category}</p>
              <div className="flex items-center space-x-4 text-xs text-gray-400">
                <span className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {project.buildTime}
                </span>
                <span className="flex items-center">
                  <Code className="w-3 h-3 mr-1" />
                  {project.linesOfCode}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Selected Project Details */}
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left: Project Info */}
            <div className="p-8 lg:p-12">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${selected.gradient} mb-6`}>
                <div className="text-white">
                  {selected.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {selected.name}
              </h3>

              <p className="text-gray-600 mb-6 text-lg">
                {selected.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-2xl font-bold text-system-primary mb-1">
                    {selected.buildTime}
                  </div>
                  <div className="text-sm text-gray-500">Build Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-system-primary mb-1">
                    {selected.linesOfCode}
                  </div>
                  <div className="text-sm text-gray-500">Lines of Code</div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                <div className="space-y-2">
                  {selected.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-system-primary" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                {selected.demoUrl && (
                  <button className="btn-primary group">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Demo
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}

                {selected.caseStudy && (
                  <button className="btn-secondary">
                    Read Case Study
                  </button>
                )}
              </div>
            </div>

            {/* Right: Visual/Demo */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12 flex items-center justify-center">
              {/* Mock browser window */}
              <div className="bg-white rounded-lg shadow-2xl w-full max-w-md">
                <div className="flex items-center space-x-2 px-4 py-3 border-b border-gray-200">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="ml-4 text-gray-400 text-sm">
                    {selected.name.toLowerCase().replace(' ', '-')}.demo
                  </div>
                </div>
                <div className="p-6">
                  <div className={`w-full h-32 rounded-lg bg-gradient-to-r ${selected.gradient} flex items-center justify-center`}>
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">{selected.icon}</div>
                      <div className="text-sm opacity-90">Live Demo</div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-full" />
                    <div className="h-2 bg-gray-200 rounded w-3/4" />
                    <div className="h-2 bg-gray-200 rounded w-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Ready to build your own project? The System can create any type of software in minutes.
          </p>
          <button className="btn-primary group">
            Start Building Your Project
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}