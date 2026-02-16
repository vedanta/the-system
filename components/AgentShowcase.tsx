'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  ChevronRight,
  Sparkles,
  Brain,
  Target,
  Shield,
  Zap
} from 'lucide-react'

interface Agent {
  id: string
  name: string
  role: string
  emoji: string
  description: string
  tools: string[]
  specialties: string[]
}

interface Department {
  id: string
  name: string
  description: string
  color: string
  icon: React.ReactNode
  agents: Agent[]
  stage: string
}

const departments: Department[] = [
  {
    id: 'founder',
    name: 'Founder-Advisor',
    description: 'Strategic leadership and decision coordination',
    color: 'from-purple-500 to-pink-500',
    icon: <Target className="w-5 h-5" />,
    stage: 'Leadership',
    agents: [
      {
        id: 'founder-advisor',
        name: 'Founder-Advisor',
        role: 'Strategic Leader',
        emoji: '🎩',
        description: 'Chief of staff that routes all communication and makes strategic decisions.',
        tools: ['Strategic Planning', 'Resource Allocation', 'Quality Gates'],
        specialties: ['Leadership', 'Decision Making', 'Project Coordination']
      }
    ]
  },
  {
    id: 'architecture',
    name: 'Architecture Department',
    description: 'System design and technical architecture',
    color: 'from-blue-500 to-cyan-500',
    icon: <Brain className="w-5 h-5" />,
    stage: 'Stage 1',
    agents: [
      {
        id: 'solution-architect',
        name: 'Solution Architect',
        role: 'System Designer',
        emoji: '🏗️',
        description: 'Designs optimal technical architecture and selects technology stacks.',
        tools: ['Architecture Patterns', 'Tech Stack Selection', 'ADRs'],
        specialties: ['System Design', 'Technology Selection', 'Performance Optimization']
      },
      {
        id: 'enterprise-architect',
        name: 'Enterprise Architect',
        role: 'Integration Expert',
        emoji: '🏛️',
        description: 'Complex system design and enterprise integration patterns.',
        tools: ['Enterprise Patterns', 'Integration Design', 'Scalability'],
        specialties: ['Enterprise Systems', 'Integration', 'Scalability']
      }
    ]
  },
  {
    id: 'design',
    name: 'Design Department',
    description: 'UX design and user experience optimization',
    color: 'from-pink-500 to-rose-500',
    icon: <Sparkles className="w-5 h-5" />,
    stage: 'Stage 1.5',
    agents: [
      {
        id: 'api-discovery',
        name: 'API Discovery Specialist',
        role: 'Interface Designer',
        emoji: '🔍',
        description: 'Extracts API interfaces from designs and creates UI-API mappings.',
        tools: ['API Analysis', 'Interface Design', 'Data Mapping'],
        specialties: ['API Design', 'Data Flow', 'Interface Mapping']
      },
      {
        id: 'design-style-manager',
        name: 'Design Style Manager',
        role: 'Brand Guardian',
        emoji: '🎨',
        description: 'Manages centralized style systems and brand consistency.',
        tools: ['Style Systems', 'Brand Guidelines', 'Component Libraries'],
        specialties: ['Design Systems', 'Brand Consistency', 'Style Guidelines']
      },
      {
        id: 'wireframe-generator',
        name: 'Wireframe Generator',
        role: 'Interaction Designer',
        emoji: '🖼️',
        description: 'Creates interactive wireframes and functional prototypes.',
        tools: ['Wireframing', 'Prototyping', 'Interaction Design'],
        specialties: ['Wireframes', 'Prototypes', 'User Flows']
      },
      {
        id: 'ux-analyzer',
        name: 'UX Analyzer',
        role: 'Experience Optimizer',
        emoji: '🔍',
        description: 'User experience analysis and optimization recommendations.',
        tools: ['UX Audit', 'Usability Testing', 'Accessibility'],
        specialties: ['User Experience', 'Accessibility', 'Usability']
      },
      {
        id: 'prototype-developer',
        name: 'Prototype Developer',
        role: 'Rapid Prototyper',
        emoji: '🚀',
        description: 'Rapid prototype development and interactive validation.',
        tools: ['Rapid Prototyping', 'Interactive Demos', 'Validation'],
        specialties: ['Prototyping', 'Validation', 'Interaction']
      }
    ]
  },
  {
    id: 'product',
    name: 'Product Department',
    description: 'Product strategy and market analysis',
    color: 'from-emerald-500 to-teal-500',
    icon: <Target className="w-5 h-5" />,
    stage: 'Stage 2',
    agents: [
      {
        id: 'product-lead',
        name: 'Product Lead',
        role: 'Product Strategist',
        emoji: '👔',
        description: 'Defines MVP scope, user stories, and product requirements.',
        tools: ['MVP Planning', 'User Stories', 'Product Strategy'],
        specialties: ['Product Strategy', 'MVP Definition', 'User Research']
      },
      {
        id: 'project-planner',
        name: 'Project Planner',
        role: 'Planning Expert',
        emoji: '📅',
        description: 'Creates detailed roadmaps, sprint plans, and timeline estimates.',
        tools: ['Project Planning', 'Sprint Management', 'Timeline Estimation'],
        specialties: ['Project Management', 'Sprint Planning', 'Roadmaps']
      },
      {
        id: 'business-analyst',
        name: 'Business Analyst',
        role: 'Market Strategist',
        emoji: '💼',
        description: 'Market analysis, revenue modeling, and go-to-market strategy.',
        tools: ['Market Analysis', 'Revenue Modeling', 'GTM Strategy'],
        specialties: ['Business Analysis', 'Market Research', 'Strategy']
      }
    ]
  },
  {
    id: 'development',
    name: 'Development Department',
    description: 'Full-stack software development and quality assurance',
    color: 'from-indigo-500 to-purple-500',
    icon: <Zap className="w-5 h-5" />,
    stage: 'Stage 3',
    agents: [
      {
        id: 'principal-developer',
        name: 'Principal Developer',
        role: 'Dev Team Lead',
        emoji: '👨‍💼',
        description: 'Implementation planning, code review, and quality gate management.',
        tools: ['Code Architecture', 'Quality Gates', 'Team Leadership'],
        specialties: ['Technical Leadership', 'Code Quality', 'Architecture']
      },
      {
        id: 'qa-engineer',
        name: 'QA Engineer',
        role: 'Quality Guardian',
        emoji: '🧪',
        description: 'Test strategy, quality assurance, and integration testing.',
        tools: ['Test Strategy', 'Quality Assurance', 'Integration Testing'],
        specialties: ['Testing', 'Quality Assurance', 'Automation']
      },
      {
        id: 'database-developer',
        name: 'Database Developer',
        role: 'Data Architect',
        emoji: '🗄️',
        description: 'Database design, schema creation, and data modeling.',
        tools: ['Database Design', 'Schema Design', 'Data Modeling'],
        specialties: ['Database Design', 'Data Architecture', 'Performance']
      },
      {
        id: 'backend-developer',
        name: 'Backend Developer',
        role: 'API Builder',
        emoji: '⚙️',
        description: 'APIs, services, business logic, and server-side development.',
        tools: ['API Development', 'Business Logic', 'Server Architecture'],
        specialties: ['Backend Development', 'API Design', 'Microservices']
      },
      {
        id: 'frontend-developer',
        name: 'Frontend Developer',
        role: 'UI Builder',
        emoji: '🎨',
        description: 'UI components, user interfaces, and client-side development.',
        tools: ['UI Components', 'State Management', 'Responsive Design'],
        specialties: ['Frontend Development', 'UI/UX', 'React/Vue/Angular']
      },
      {
        id: 'integration-engineer',
        name: 'Integration Engineer',
        role: 'System Connector',
        emoji: '🔗',
        description: 'Connects all components and ensures end-to-end functionality.',
        tools: ['System Integration', 'E2E Testing', 'Component Connection'],
        specialties: ['Integration', 'System Testing', 'DevOps']
      }
    ]
  },
  {
    id: 'release',
    name: 'Release Department',
    description: 'Documentation, security, and release management',
    color: 'from-orange-500 to-red-500',
    icon: <Shield className="w-5 h-5" />,
    stage: 'Stage 4',
    agents: [
      {
        id: 'technical-writer',
        name: 'Technical Writer',
        role: 'Documentation Expert',
        emoji: '📝',
        description: 'Creates comprehensive documentation, guides, and API references.',
        tools: ['Technical Documentation', 'API Docs', 'User Guides'],
        specialties: ['Technical Writing', 'Documentation', 'Communication']
      },
      {
        id: 'security-engineer',
        name: 'Security Engineer',
        role: 'Security Guardian',
        emoji: '🔐',
        description: 'Security validation, vulnerability scanning, and compliance.',
        tools: ['Security Scanning', 'Vulnerability Assessment', 'Compliance'],
        specialties: ['Security', 'Compliance', 'Risk Assessment']
      },
      {
        id: 'release-engineer',
        name: 'Release Engineer',
        role: 'Release Manager',
        emoji: '📦',
        description: 'Version management, changelog generation, and release packaging.',
        tools: ['Version Control', 'Release Management', 'Artifact Creation'],
        specialties: ['Release Management', 'Version Control', 'CI/CD']
      },
      {
        id: 'devops-engineer',
        name: 'DevOps Engineer',
        role: 'Infrastructure Expert',
        emoji: '🚀',
        description: 'Infrastructure as Code, CI/CD pipelines, and deployment automation.',
        tools: ['Infrastructure as Code', 'CI/CD', 'Automation'],
        specialties: ['DevOps', 'Infrastructure', 'Automation']
      }
    ]
  },
  {
    id: 'operations',
    name: 'Operations Department',
    description: 'Live operations, monitoring, and reliability',
    color: 'from-green-500 to-emerald-500',
    icon: <Shield className="w-5 h-5" />,
    stage: 'Stage 5',
    agents: [
      {
        id: 'sre-deploy',
        name: 'SRE Deploy Engineer',
        role: 'Deployment Expert',
        emoji: '🚀',
        description: 'Quick deployment to managed platforms and domain configuration.',
        tools: ['Platform Deployment', 'Domain Management', 'Environment Setup'],
        specialties: ['Deployment', 'Platform Management', 'Configuration']
      },
      {
        id: 'sre-ops',
        name: 'SRE Ops Engineer',
        role: 'Reliability Expert',
        emoji: '🛡️',
        description: 'Monitoring, alerting, incident response, and SLO management.',
        tools: ['Monitoring', 'Alerting', 'Incident Response', 'SLOs'],
        specialties: ['Site Reliability', 'Monitoring', 'Incident Management']
      }
    ]
  }
]

export default function AgentShowcase() {
  const [selectedDepartment, setSelectedDepartment] = useState('architecture')

  const selected = departments.find(d => d.id === selectedDepartment) || departments[0]
  const totalAgents = departments.reduce((sum, dept) => sum + dept.agents.length, 0)

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
            Meet Your AI Development Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {totalAgents} specialized AI agents organized into departments, each with deep expertise
            in their domain. They collaborate seamlessly to build your software.
          </p>

          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold text-system-primary">{totalAgents}</div>
              <div className="text-gray-500">AI Specialists</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-system-primary">{departments.length}</div>
              <div className="text-gray-500">Departments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-system-primary">24/7</div>
              <div className="text-gray-500">Available</div>
            </div>
          </div>
        </motion.div>

        {/* Department Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-12"
        >
          {departments.map((dept, index) => (
            <motion.button
              key={dept.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedDepartment(dept.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-200 text-center ${
                selectedDepartment === dept.id
                  ? 'border-system-primary bg-white shadow-lg'
                  : 'border-gray-200 hover:border-system-200 bg-white/50 hover:bg-white'
              }`}
            >
              <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${dept.color} mb-2`}>
                <div className="text-white">
                  {dept.icon}
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                {dept.name.replace(' Department', '')}
              </h3>
              <p className="text-xs text-gray-500 mb-1">{dept.stage}</p>
              <div className="text-xs text-gray-400">
                {dept.agents.length} agent{dept.agents.length > 1 ? 's' : ''}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Selected Department Details */}
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
        >
          {/* Department Header */}
          <div className={`bg-gradient-to-r ${selected.color} p-8 text-white`}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                {selected.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{selected.name}</h3>
                <p className="text-white/90">{selected.stage}</p>
              </div>
            </div>
            <p className="text-white/90 text-lg">{selected.description}</p>
          </div>

          {/* Agents Grid */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selected.agents.map((agent, index) => (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="agent-card group"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="text-3xl">{agent.emoji}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{agent.name}</h4>
                      <p className="text-sm text-gray-500 mb-2">{agent.role}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{agent.description}</p>

                  {/* Tools */}
                  <div className="mb-4">
                    <div className="text-xs font-medium text-gray-700 mb-2">Core Tools</div>
                    <div className="flex flex-wrap gap-1">
                      {agent.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div>
                    <div className="text-xs font-medium text-gray-700 mb-2">Specialties</div>
                    <div className="space-y-1">
                      {agent.specialties.slice(0, 2).map((specialty) => (
                        <div key={specialty} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-system-primary" />
                          <span className="text-xs text-gray-600">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6">
            Ready to put this entire AI development team to work on your project?
          </p>
          <button className="btn-primary group">
            <Users className="w-4 h-4 mr-2" />
            Get Your Team Started
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}