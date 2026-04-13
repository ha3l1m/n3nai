import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import type { Lang, Translations } from '../i18n/translations'

interface Props {
  isDark: boolean
  onToggleTheme: () => void
  lang: Lang
  onToggleLang: () => void
  tr: Translations
}

export default function Navbar({ isDark, onToggleTheme, lang, onToggleLang, tr }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: tr.nav.about, href: '#about' },
    { label: tr.nav.products, href: '#products' },
    { label: tr.nav.technology, href: '#technology' },
    { label: tr.nav.vision, href: '#vision' },
    { label: tr.nav.contact, href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/92 dark:bg-gray-950/92 backdrop-blur-md border-b border-gray-200/70 dark:border-white/8 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className={`font-bold text-lg tracking-tight transition-colors ${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
            n3n<span className="text-blue-400">.ai</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                scrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-200'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Lang */}
          <button
            onClick={onToggleLang}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold tracking-wide border transition-colors ${
              scrolled
                ? 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-blue-400 hover:text-blue-500'
                : 'border-white/20 text-gray-200 hover:border-white/50 hover:text-white'
            }`}
            aria-label="Toggle language"
          >
            {lang === 'ko' ? 'EN' : '한'}
          </button>

          {/* Theme */}
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-lg transition-colors ${
              scrolled
                ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                : 'text-gray-200 hover:bg-white/10'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
          >
            {tr.nav.cta}
          </a>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-white/8 transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#050A18]/95 backdrop-blur-md border-t border-white/8 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
              >
                {tr.nav.cta}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
