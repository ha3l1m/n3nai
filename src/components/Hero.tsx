import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import type { Translations } from '../i18n/translations'

interface Props { tr: Translations }

export default function Hero({ tr }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay muted loop playsInline
          className="w-full h-full object-cover scale-105"
          poster="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Layer 1: Heavy base darken */}
        <div className="absolute inset-0 bg-[#030812]/80" />
        {/* Layer 2: Center vignette — darkest behind text */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(3,8,18,0.9) 0%, rgba(3,8,18,0.5) 70%, rgba(3,8,18,0.95) 100%)',
          }}
        />
        {/* Layer 3: Top/bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030812]/70 via-transparent to-[#030812]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,102,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.6) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Parallax content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20 pb-32"
      >
        {/* 1. Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-semibold tracking-[0.15em] uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          {tr.hero.badge}
        </motion.div>

        {/* 2. Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] tracking-tight mb-6 whitespace-pre-line drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
        >
          {tr.hero.h1}
        </motion.h1>

        {/* 3. Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {tr.hero.subhead}
        </motion.p>

        {/* 4. CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-xl shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 text-sm"
          >
            {tr.hero.cta1}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#operation"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/8 hover:bg-white/12 text-white font-medium rounded-xl transition-all duration-200 backdrop-blur-sm border border-white/15 text-sm"
          >
            <Play size={14} className="fill-white" />
            {tr.hero.cta2}
          </a>
        </motion.div>

        {/* 5. Stats — secondary, below CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-8 border-t border-white/10"
        >
          {[
            { value: '99.9%', label: tr.hero.stat1 },
            { value: '<10ms', label: tr.hero.stat2 },
            { value: '200+', label: tr.hero.stat3 },
            { value: '24/7', label: tr.hero.stat4 },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl font-bold text-white/90 tabular-nums">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-gray-500 tracking-[0.3em] uppercase">{tr.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent"
        />
      </motion.div>
    </section>
  )
}
