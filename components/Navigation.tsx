'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Menu,
  X,
  Github,
  ArrowRight,
  Star,
  Download,
  BookOpen,
  Users,
  Terminal,
  Zap,
  ExternalLink
} from 'lucide-react'

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Agents', href: '#agents' },
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'Documentation', href: 'https://github.com/vedanta/the-system/blob/main/README.md', external: true },
]

const resources = [
  { name: 'Documentation', href: 'https://github.com/vedanta/the-system/blob/main/README.md', icon: <BookOpen className="w-4 h-4" />, external: true },
  { name: 'GitHub', href: 'https://github.com/vedanta/the-system', icon: <Github className="w-4 h-4" />, external: true },
  { name: 'User Guide', href: 'https://github.com/vedanta/the-system/blob/main/USER-GUIDE.md', icon: <Users className="w-4 h-4" />, external: true },
  { name: 'Quick Start', href: 'https://github.com/vedanta/the-system/blob/main/QUICKSTART.md', icon: <Terminal className="w-4 h-4" />, external: true },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-gray-950/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <span className="text-white font-bold text-lg">TS</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-950 animate-pulse-slow"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient-primary">The System</h1>
              <p className="text-xs text-gray-400 -mt-1">ASDO Framework</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link text-gray-300 hover:text-white"
                {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {item.name}
                {item.external && <ExternalLink className="w-3 h-3 ml-1 inline" />}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="https://github.com/vedanta/the-system"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-sm border border-gray-700 hover:border-gray-600 rounded-lg transition-all duration-200"
            >
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Star</span>
              <span className="text-xs bg-gray-700 px-2 py-0.5 rounded-full">★</span>
            </motion.a>

            <motion.a
              href="https://github.com/vedanta/the-system"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-800/80 backdrop-blur-sm border border-gray-700"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-300" />
            ) : (
              <Menu className="w-5 h-5 text-gray-300" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="lg:hidden overflow-hidden bg-gray-950/98 backdrop-blur-lg border-t border-gray-800/50"
      >
        <div className="container py-6 space-y-6">
          {/* Mobile Navigation Links */}
          <div className="space-y-4">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-between py-3 px-4 rounded-lg bg-gray-900/50 hover:bg-gray-900/80 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                <span className="text-gray-100 font-medium">{item.name}</span>
                {item.external ? (
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                )}
              </motion.a>
            ))}
          </div>

          {/* Mobile Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-3 px-4">Resources</h3>
            <div className="grid grid-cols-2 gap-3">
              {resources.map((resource, index) => (
                <motion.a
                  key={resource.name}
                  href={resource.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3 py-3 px-4 rounded-lg bg-gray-900/50 hover:bg-gray-900/80 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  {...(resource.external && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  {resource.icon}
                  <span className="text-sm text-gray-100">{resource.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="space-y-3 pt-4 border-t border-gray-800">
            <motion.a
              href="https://github.com/vedanta/the-system"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="flex items-center justify-between py-3 px-4 rounded-lg bg-gray-800/80 hover:bg-gray-700/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-100 font-medium">Star on GitHub</span>
              </div>
              <span className="text-xs bg-gray-700 px-3 py-1 rounded-full text-gray-300">★</span>
            </motion.a>

            <motion.a
              href="https://github.com/vedanta/the-system"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="flex items-center justify-center py-4 px-6 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Zap className="w-5 h-5 mr-3" />
              <span className="font-semibold text-white">Get Started</span>
              <ArrowRight className="w-5 h-5 ml-3" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </nav>
  )
}