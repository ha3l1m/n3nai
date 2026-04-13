import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import VideoSection from './VideoSection'
import type { Translations } from '../i18n/translations'

interface Props { tr: Translations }

export default function OperationIntelligence({ tr }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <VideoSection id="operation" tint="rgba(4,8,20,0.82)">
      <div ref={ref} className="max-w-6xl mx-auto px-6 py-28 flex flex-col items-center">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 max-w-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            {tr.opint.preText}
            <br />
            <span className="animated-gradient">{tr.opint.highlight}</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg mt-4 leading-relaxed">
            {tr.opint.sub}
          </p>
        </motion.div>

        {/* Diagram */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-0 md:gap-4">
          {/* INNOWATCH side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 max-w-xs"
          >
            {/* Video grid icon */}
            <div className="grid grid-cols-3 gap-1.5 mb-6 p-4 rounded-2xl border border-blue-700/40 bg-blue-900/10 backdrop-blur-sm">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-video rounded bg-gray-800/60 border border-gray-700/50 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-transparent" />
                  <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
                </div>
              ))}
            </div>
            <div className="text-center">
              <div className="inline-block text-xs font-bold tracking-widest text-blue-400 border border-blue-700/50 rounded-full px-3 py-1 mb-3">
                INNOWATCH
              </div>
              <p className="text-white font-semibold text-base mb-2">{tr.opint.innowatch.tag}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{tr.opint.innowatch.desc}</p>
            </div>
          </motion.div>

          {/* Center hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center px-4 py-6 z-10"
          >
            {/* Connecting lines */}
            <div className="hidden md:block w-16 h-px bg-gradient-to-r from-blue-600/60 to-blue-400/80 mb-0" />

            {/* Hexagon hub */}
            <div className="relative flex items-center justify-center">
              {/* Pulse rings */}
              <div className="absolute w-28 h-28 rounded-full border border-blue-500/20 animate-ping" />
              <div className="absolute w-20 h-20 rounded-full border border-blue-500/30" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col items-center justify-center shadow-xl shadow-blue-600/30 rotate-[15deg]">
                <span className="text-white text-[10px] font-bold leading-tight text-center -rotate-[15deg] px-1">
                  N3N<br />OI
                </span>
              </div>
            </div>

            <div className="mt-3 text-center">
              <div className="text-[10px] text-blue-400 tracking-widest font-semibold">OPERATION</div>
              <div className="text-[10px] text-blue-400 tracking-widest font-semibold">INTELLIGENCE</div>
            </div>
          </motion.div>

          {/* WIZEYE side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 max-w-xs"
          >
            {/* Tree/hierarchy icon */}
            <div className="mb-6 p-4 rounded-2xl border border-cyan-700/40 bg-cyan-900/10 backdrop-blur-sm flex flex-col items-center gap-3">
              {/* Tree diagram */}
              <div className="flex flex-col items-center gap-2 py-2">
                {/* Root */}
                <div className="w-7 h-7 rounded bg-cyan-700/60 border border-cyan-500/50" />
                {/* Level 2 */}
                <div className="flex gap-6">
                  {[0,1].map(i => (
                    <div key={i} className="w-5 h-5 rounded bg-gray-700/60 border border-gray-500/50" />
                  ))}
                </div>
                {/* Level 3 */}
                <div className="flex gap-3">
                  {[0,1,2,3].map(i => (
                    <div key={i} className="w-4 h-4 rounded-full bg-gray-700/60 border border-gray-500/50" />
                  ))}
                </div>
                {/* Level 4 */}
                <div className="flex gap-2">
                  {[0,1,2,3,4,5].map(i => (
                    <div key={i} className="w-3 h-3 rounded-full bg-gray-800/60 border border-gray-600/40" />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block text-xs font-bold tracking-widest text-cyan-400 border border-cyan-700/50 rounded-full px-3 py-1 mb-3">
                WIZEYE
              </div>
              <p className="text-white font-semibold text-base mb-2">{tr.opint.wizeye.tag}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{tr.opint.wizeye.desc}</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom divider stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 w-full max-w-2xl border-t border-white/8 pt-10 flex flex-col sm:flex-row items-center justify-center gap-8 text-center"
        >
          {tr.opint.stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold animated-gradient-slow">{s.value}</div>
              <div className="text-sm text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </VideoSection>
  )
}
