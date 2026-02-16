'use client'

import { motion } from 'framer-motion'
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowRight,
  Zap,
  BookOpen,
  MessageCircle,
  Star,
  ExternalLink
} from 'lucide-react'

interface FooterLink {
  name: string
  href: string
  external?: boolean
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

const footerSections: FooterSection[] = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Agents', href: '#agents' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Use Cases', href: '#use-cases' }
    ]
  },
  {
    title: 'Developers',
    links: [
      { name: 'Documentation', href: '/docs', external: true },
      { name: 'API Reference', href: '/docs/api', external: true },
      { name: 'Command Reference', href: '/docs/commands', external: true },
      { name: 'Examples', href: '/examples', external: true },
      { name: 'Contributing', href: '/contributing', external: true }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/blog', external: true },
      { name: 'Tutorials', href: '/tutorials', external: true },
      { name: 'Case Studies', href: '/case-studies', external: true },
      { name: 'Templates', href: '/templates', external: true },
      { name: 'Community', href: '/community', external: true }
    ]
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', href: '/help', external: true },
      { name: 'Status', href: '/status', external: true },
      { name: 'Contact', href: '/contact', external: true },
      { name: 'Issues', href: 'https://github.com/vedanta/the-system/issues', external: true },
      { name: 'Roadmap', href: '/roadmap', external: true }
    ]
  }
]

const socialLinks = [
  {
    name: 'GitHub',
    icon: <Github className="w-5 h-5" />,
    href: 'https://github.com/vedanta/the-system'
  },
  {
    name: 'Twitter',
    icon: <Twitter className="w-5 h-5" />,
    href: 'https://twitter.com/thesystemasdo'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
    href: 'https://linkedin.com/company/the-system-asdo'
  },
  {
    name: 'Email',
    icon: <Mail className="w-5 h-5" />,
    href: 'mailto:hello@the-system.ai'
  }
]

const quickActions = [
  {
    title: 'Get Started',
    description: 'Build your first project in minutes',
    icon: <Zap className="w-5 h-5" />,
    href: '#get-started',
    primary: true
  },
  {
    title: 'Documentation',
    description: 'Complete reference and guides',
    icon: <BookOpen className="w-5 h-5" />,
    href: '/docs',
    primary: false
  },
  {
    title: 'Community',
    description: 'Join the discussion and get help',
    icon: <MessageCircle className="w-5 h-5" />,
    href: '/discord',
    primary: false
  }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section - Brand and Quick Actions */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-system-primary to-system-secondary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">TS</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">The System</h3>
                    <p className="text-gray-400 text-sm">Autonomous Software Development</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  Transform ideas into production-ready software with 26 AI specialists working together.
                  From concept to deployment in one seamless workflow.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-gray-800 rounded-xl">
                <div className="text-center">
                  <div className="text-xl font-bold text-system-primary">26</div>
                  <div className="text-xs text-gray-400">AI Agents</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-system-primary">59</div>
                  <div className="text-xs text-gray-400">Commands</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-system-primary">2.1k+</div>
                  <div className="text-xs text-gray-400">GitHub Stars</div>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold mb-6">Quick Actions</h4>
              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <motion.a
                    key={action.title}
                    href={action.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                    className={`flex items-center space-x-4 p-4 rounded-xl transition-colors group ${
                      action.primary
                        ? 'bg-gradient-to-r from-system-primary to-system-secondary hover:shadow-lg'
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${
                      action.primary
                        ? 'bg-white/20'
                        : 'bg-system-primary/20'
                    }`}>
                      <div className={action.primary ? 'text-white' : 'text-system-primary'}>
                        {action.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className={`font-semibold ${action.primary ? 'text-white' : 'text-white'}`}>
                        {action.title}
                      </div>
                      <div className={`text-sm ${action.primary ? 'text-white/80' : 'text-gray-400'}`}>
                        {action.description}
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${
                      action.primary ? 'text-white' : 'text-gray-400'
                    }`} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              >
                <h5 className="font-semibold text-white mb-4">{section.title}</h5>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-system-primary transition-colors text-sm flex items-center group"
                        {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                      >
                        <span>{link.name}</span>
                        {link.external && (
                          <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-system-primary/10 to-system-secondary/10 rounded-2xl p-8 mb-12"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-xl font-bold mb-2">Stay in the Loop</h4>
              <p className="text-gray-400 mb-6">
                Get updates on new features, agents, and deployment targets. No spam, just valuable insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-system-primary focus:border-transparent"
                />
                <button className="px-6 py-3 bg-system-primary hover:bg-system-primary-dark rounded-lg font-medium transition-colors flex items-center justify-center whitespace-nowrap">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 The System. All rights reserved. Built with ❤️ by AI specialists.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-system-primary rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* GitHub Stars */}
            <motion.a
              href="https://github.com/vedanta/the-system"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors group"
            >
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Star on GitHub</span>
              <span className="text-xs bg-system-primary px-2 py-1 rounded-full">2.1k</span>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}