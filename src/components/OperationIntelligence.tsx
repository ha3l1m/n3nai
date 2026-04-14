import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import VideoSection from './VideoSection'
import type { Translations } from '../i18n/translations'

interface Props { tr: Translations }

export default function OperationIntelligence({ tr }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <VideoSection id="operation" tint="rgba(4,8,20,0.85)">
      <div ref={ref} className="max-w-4xl mx-auto px-8 md:px-16 lg:px-24 pt-24 pb-14 text-center">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            {tr.opint.preText}
            <br />
            <span className="animated-gradient">{tr.opint.highlight}</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {tr.opint.sub}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-10"
        >
          {tr.opint.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold animated-gradient-slow">{s.value}</div>
              <div className="text-sm text-gray-500 mt-2">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </VideoSection>
  )
}
