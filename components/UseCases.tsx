'use client'

import { motion } from 'framer-motion'
import {
  Rocket,
  Building2,
  Palette,
  User,
  ArrowRight,
  Clock,
  DollarSign,
  Target,
  Zap
} from 'lucide-react'

interface UseCase {
  id: string
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  color: string
  benefits: string[]
  testimonial: {
    quote: string
    author: string
    role: string
    company: string
  }
  stats: {
    label: string
    value: string
  }[]
}

const useCases: UseCase[] = [
  {
    id: 'startup',
    title: 'Startup Founders',
    subtitle: 'From Idea to MVP in Hours',
    description: 'Turn your vision into a working product fast. Get to market before competitors with professional-grade software that scales.',
    icon: <Rocket className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500',
    benefits: [
      'MVP in hours, not weeks',
      'Professional quality from day one',
      'Built-in scaling considerations',
      'Investor-ready demonstrations'
    ],
    testimonial: {
      quote: "We went from idea to investor demo in 3 hours. The System built our entire SaaS platform - authentication, billing, admin dashboard. Our Series A pitch was live code, not mockups.",
      author: "Sarah Chen",
      role: "CEO & Founder",
      company: "FlowSpace"
    },
    stats: [
      { label: 'Time Saved', value: '95%' },
      { label: 'Avg. MVP Time', value: '2 Hours' },
      { label: 'Success Rate', value: '98%' }
    ]
  },
  {
    id: 'enterprise',
    title: 'Enterprise Teams',
    subtitle: 'Rapid Prototyping & Innovation',
    description: 'Break through bureaucracy with working prototypes. Validate ideas quickly and get stakeholder buy-in with real software.',
    icon: <Building2 className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    benefits: [
      'Skip months of planning phases',
      'Prototype before major investments',
      'Standard enterprise security',
      'Compliance-ready from start'
    ],
    testimonial: {
      quote: "Our 'digital transformation' project was stuck in planning for months. The System built a working prototype in 45 minutes that got board approval immediately.",
      author: "Michael Rodriguez",
      role: "VP Engineering",
      company: "TechCorp Global"
    },
    stats: [
      { label: 'Planning Reduction', value: '90%' },
      { label: 'Approval Speed', value: '10x Faster' },
      { label: 'Budget Efficiency', value: '75%' }
    ]
  },
  {
    id: 'agency',
    title: 'Agencies & Consultants',
    subtitle: 'Win More Clients, Deliver Faster',
    description: 'Present working software instead of static mockups. Close more deals and deliver projects in record time with consistent quality.',
    icon: <Palette className="w-8 h-8" />,
    color: 'from-emerald-500 to-teal-500',
    benefits: [
      'Working demos for pitches',
      'Consistent project delivery',
      'Higher profit margins',
      'Scale without hiring'
    ],
    testimonial: {
      quote: "Client presentations used to be static mockups. Now we demo actual working applications. Our close rate went from 30% to 85%, and delivery time dropped by 80%.",
      author: "Lisa Wang",
      role: "Creative Director",
      company: "DesignLab Studios"
    },
    stats: [
      { label: 'Close Rate', value: '85%' },
      { label: 'Delivery Speed', value: '5x Faster' },
      { label: 'Profit Margin', value: '+40%' }
    ]
  },
  {
    id: 'developer',
    title: 'Individual Developers',
    subtitle: 'Build Your Portfolio, Learn Fast',
    description: 'Create impressive portfolio projects instantly. Learn new technologies by seeing professional implementations in action.',
    icon: <User className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500',
    benefits: [
      'Professional portfolio projects',
      'Learn by example',
      'Multiple tech stack experience',
      'Side project acceleration'
    ],
    testimonial: {
      quote: "Built my entire portfolio over a weekend. Each project shows different tech stacks and architectural patterns. Landed my dream job in 2 weeks.",
      author: "Alex Kumar",
      role: "Full Stack Developer",
      company: "Independent"
    },
    stats: [
      { label: 'Portfolio Projects', value: '10+' },
      { label: 'Learning Speed', value: '8x Faster' },
      { label: 'Job Offers', value: '300% More' }
    ]
  }
]

export default function UseCases() {
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
            Built for Every Builder
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're launching a startup, leading enterprise innovation, running an agency,
            or building your career - The System accelerates your success.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="space-y-20">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex items-center gap-12`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                {/* Header */}
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${useCase.color} shadow-lg`}>
                    <div className="text-white">
                      {useCase.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{useCase.title}</h3>
                    <p className="text-lg text-gray-600">{useCase.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed">
                  {useCase.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {useCase.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-system-primary flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 py-6 border-t border-gray-100">
                  {useCase.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-system-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="btn-primary group">
                  Start Your {useCase.title.split(' ')[1] || useCase.title} Project
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Testimonial Card */}
              <div className="flex-1 max-w-md">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
                  {/* Quote */}
                  <div className="mb-6">
                    <div className="text-4xl text-system-primary mb-4">"</div>
                    <p className="text-gray-700 italic leading-relaxed">
                      {useCase.testimonial.quote}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-system-primary to-system-secondary flex items-center justify-center text-white font-bold">
                      {useCase.testimonial.author.split(' ').map(name => name[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {useCase.testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {useCase.testimonial.role}
                      </div>
                      <div className="text-sm text-gray-500">
                        {useCase.testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-system-50 to-system-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Thousands of Successful Builders?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              No matter what you're building or who you're building it for,
              The System gives you the speed and quality advantage you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary group">
                <Zap className="w-4 h-4 mr-2" />
                Start Building Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                Schedule a Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}