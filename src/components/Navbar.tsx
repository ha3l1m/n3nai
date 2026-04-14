import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
  const location = useLocation()

  const isDraft2 = location.pathname === '/draft2'

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
        <a href="#" className="flex items-center group">
          <img
            src="/logo-n3n.png"
            alt="N3N"
            className={`h-7 transition-all ${scrolled ? 'dark:invert' : 'invert'}`}
          />
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
          <Link
            to={isDraft2 ? '/' : '/draft2'}
            className={`text-sm font-semibold px-3 py-1 rounded-full border transition-colors ${
              isDraft2
                ? 'border-blue-500 text-blue-500 bg-blue-500/10 hover:bg-blue-500/20'
                : scrolled
                  ? 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-blue-400 hover:text-blue-500'
                  : 'border-white/30 text-gray-200 hover:border-white/60 hover:text-white'
            }`}
          >
            {isDraft2 ? (lang === 'ko' ? '시안 1' : 'Draft 1') : (lang === 'ko' ? '시안 2' : 'Draft 2')}
          </Link>
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
              <Link
                to={isDraft2 ? '/' : '/draft2'}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                {isDraft2 ? (lang === 'ko' ? '시안 1' : 'Draft 1') : (lang === 'ko' ? '시안 2' : 'Draft 2')}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
