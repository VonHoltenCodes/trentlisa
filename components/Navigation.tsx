'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '#our-story', label: 'Our Story' },
  { href: '#details', label: 'Details' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#photos', label: 'Photos' },
  { href: '/travel', label: 'Travel' },
  { href: '/registry', label: 'Registry' }
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Check if we're on a page that should always show the solid navigation
    const shouldAlwaysShowSolid = window.location.pathname === '/travel' || 
                                 window.location.pathname === '/registry' || 
                                 window.location.pathname === '/rsvp' ||
                                 window.location.pathname.startsWith('/admin')
    
    if (shouldAlwaysShowSolid) {
      setScrolled(true)
    } else {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <Link href="/" className={`nav-logo ${
          scrolled ? 'text-mountain-blue' : 'text-white'
        }`}>
          T & L
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-menu">
          {navItems.map((item) => (
            item.href.startsWith('http') ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`nav-link ${
                  scrolled ? 'text-deep-navy' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${
                  scrolled ? 'text-deep-navy' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 ${scrolled ? 'text-deep-navy' : 'text-white'}`}
          style={{ color: scrolled ? 'var(--deep-navy)' : 'white' }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-4 py-8 space-y-4">
              {navItems.map((item) => (
                item.href.startsWith('http') ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 nav-link text-deep-navy"
                    style={{ color: 'var(--deep-navy)' }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 nav-link text-deep-navy"
                    style={{ color: 'var(--deep-navy)' }}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}