'use client'

import { motion } from 'framer-motion'
import {
  Shield,
  Code,
  Zap,
  Globe,
  Database,
  Lock,
  CheckCircle,
  Gauge,
  Server
} from 'lucide-react'

interface TechSpec {
  category: string
  items: {
    name: string
    description: string
    icon: React.ReactNode
    status: 'included' | 'premium' | 'enterprise'
  }[]
}

const techSpecs: TechSpec[] = [
  {
    category: 'Code Quality',
    items: [
      {
        name: 'TypeScript Strict Mode',
        description: 'Type safety and compile-time error prevention',
        icon: <Code className="w-5 h-5" />,
        status: 'included'
      },
      {
        name: 'ESLint + Prettier',
        description: 'Automated code formatting and linting rules',
        icon: <CheckCircle className="w-5 h-5" />,
        status: 'included'
      },
      {
        name: 'Comprehensive Testing',
        description: 'Unit, integration, and E2E test suites',
        icon: <Shield className="w-5 h-5" />,
        status: 'included'
      },
      {
        name: 'Code Coverage Reports',
        description: '80%+ coverage with detailed reporting',
        icon: <Gauge className="w-5 h-5" />,
        status: 'included'
      }
    ]
  },
  {
    category: 'Security & Compliance',
    items: [
      {
        name: 'OWASP Top 10 Protection',
        description: 'Built-in protection against common vulnerabilities',
        icon: <Lock className="w-5 h-5" />,
        status: 'included'
      },
      {
        name: 'Automated Security Scans',
        description: 'Continuous vulnerability assessment',
        icon: <Shield className="w-5 h-5" />,
        status: 'included'
      },
      {
        name: 'GDPR/CCPA Compliance',
        description: 'Privacy-compliant data handling',
        icon: <CheckCircle className="w-5 h-5" />,
        status: 'included'
      },
      {
        name: 'SOC2 Ready Infrastructure',
        description: 'Enterprise security compliance',
        icon: <Server className="w-5 h-5" />,
        status: 'enterprise'
      }
    ]
  },
  {
    category: 'Performance & Scale',
    items: [
      {
        name: 'Optimized Database Queries',
        description: 'Indexed queries with connection pooling',
        icon: <Database className="w-5 h-5" />,
        status: 'included'
      },
      {
        name: 'CDN & Caching Strategy',
        description: 'Global content delivery and smart caching',
        icon: <Globe className="w-5 h-5" />,
        status: 'included'
      },
      {
        name: 'Auto-scaling Infrastructure',
        description: 'Handles traffic spikes automatically',
        icon: <Zap className="w-5 h-5" />,
        status: 'included'
      },
      {
        name: 'Performance Monitoring',
        description: 'Real-time metrics and alerting',
        icon: <Gauge className="w-5 h-5" />,
        status: 'included'
      }
    ]
  }
]

const frameworks = [
  { name: 'Next.js', logo: '⚛️', category: 'Frontend' },
  { name: 'React', logo: '⚛️', category: 'Frontend' },
  { name: 'Vue.js', logo: '💚', category: 'Frontend' },
  { name: 'Angular', logo: '🅰️', category: 'Frontend' },
  { name: 'FastAPI', logo: '⚡', category: 'Backend' },
  { name: 'Django', logo: '🐍', category: 'Backend' },
  { name: 'Express.js', logo: '🟢', category: 'Backend' },
  { name: 'Go Fiber', logo: '🔵', category: 'Backend' },
  { name: 'PostgreSQL', logo: '🐘', category: 'Database' },
  { name: 'MongoDB', logo: '🍃', category: 'Database' },
  { name: 'Redis', logo: '🔴', category: 'Cache' },
  { name: 'Docker', logo: '🐳', category: 'DevOps' }
]

const deploymentTargets = [
  'Vercel', 'Netlify', 'Railway', 'Fly.io', 'Render', 'AWS', 'Google Cloud', 'Azure',
  'Supabase', 'PlanetScale', 'Neon', 'Turso'
]

export default function TechnicalProof() {
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
            Enterprise-Grade Quality, Always
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every project built with The System meets professional standards from day one.
            No shortcuts, no technical debt - just production-ready software.
          </p>
        </motion.div>

        {/* Quality Standards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {techSpecs.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
              </div>
              <div className="p-6 space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-system-50 rounded-lg flex items-center justify-center text-system-primary">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.status === 'included'
                            ? 'bg-green-100 text-green-800'
                            : item.status === 'premium'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-purple-100 text-purple-800'
                        }`}>
                          {item.status === 'included' ? '✓ Included' : item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supported Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Supports Your Favorite Technologies
            </h3>
            <p className="text-gray-600">
              The System works with modern frameworks and tools you already know and love.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-center p-4 rounded-lg border border-gray-200 hover:border-system-200 hover:shadow-md transition-all"
              >
                <div className="text-2xl mb-2">{framework.logo}</div>
                <div className="font-medium text-gray-900 text-sm">{framework.name}</div>
                <div className="text-xs text-gray-500">{framework.category}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Deployment Targets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Deploy Anywhere
            </h3>
            <p className="text-gray-600">
              One command deployment to 12+ platforms. From hobby projects to enterprise infrastructure.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {deploymentTargets.map((platform, index) => (
              <motion.span
                key={platform}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 bg-system-50 text-system-primary rounded-lg font-medium hover:bg-system-100 transition-colors cursor-default"
              >
                {platform}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Performance Benchmarks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-system-primary to-system-secondary rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Performance That Matters</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Every application built with The System meets strict performance standards
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">&lt;500ms</div>
              <div className="text-white/80">API Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">&lt;3s</div>
              <div className="text-white/80">Page Load Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-white/80">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">A+</div>
              <div className="text-white/80">Security Grade</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}