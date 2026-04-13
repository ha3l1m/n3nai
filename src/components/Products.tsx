import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Monitor, Network, Eye, Brain, Globe } from 'lucide-react'
import VideoSection from './VideoSection'
import type { Translations } from '../i18n/translations'

interface Props { tr: Translations }

const innowatchIcons = [MapPin, Monitor, Network]
const wizeyeIcons = [Eye, Brain, Globe]

export default function Products({ tr }: Props) {
  const refA = useRef<HTMLDivElement>(null)
  const refB = useRef<HTMLDivElement>(null)
  const inViewA = useInView(refA, { once: true, margin: '-80px' })
  const inViewB = useInView(refB, { once: true, margin: '-80px' })

  return (
    <div id="products">
      {/* ── INNOWATCH ── */}
      <VideoSection tint="rgba(4,8,20,0.80)" fullHeight>
        <div ref={refA} className="max-w-7xl mx-auto px-6 py-28 flex flex-col justify-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inViewA ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/15 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest mb-6">
                INNOWATCH
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                {tr.products.innowatch.headline}
                <br />
                <span className="animated-gradient">{tr.products.innowatch.headlineSub}</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-3 text-base">
                <span className="text-blue-400 font-semibold">{tr.products.innowatch.tag}</span>
              </p>
              <p className="text-gray-400 leading-relaxed mb-10 text-base">{tr.products.innowatch.desc}</p>

              {/* Feature list */}
              <div className="flex flex-col gap-5">
                {tr.products.innowatch.features.map((f, i) => {
                  const Icon = innowatchIcons[i]
                  return (
                    <motion.div
                      key={f.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inViewA ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center mt-0.5">
                        <Icon size={18} className="text-blue-400" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-base mb-1">{f.title}</div>
                        <div className="text-gray-400 text-sm leading-relaxed">{f.desc}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Right: mock UI */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inViewA ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="rounded-2xl border border-blue-800/40 bg-gray-900/60 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/40">
                {/* Mock header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800/60 bg-gray-900/80">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-gray-400 text-xs ml-2">INNOWATCH — Live Video on Map</span>
                </div>
                {/* Mock map + feeds */}
                <div className="p-4 relative bg-[#0A1628]" style={{ minHeight: 280 }}>
                  {/* Fake map grid */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(0,102,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.3) 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                  />
                  {/* Fake camera feeds */}
                  <div className="relative grid grid-cols-3 gap-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-video rounded-lg bg-gray-800/70 border border-gray-700/50 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-transparent" />
                        <div className="absolute top-1.5 left-1.5 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          <span className="text-[8px] text-gray-400 font-mono">CAM-{String(i + 1).padStart(3,'0')}</span>
                        </div>
                        {/* Fake video noise */}
                        <div className="absolute inset-0 opacity-10" style={{ background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 4px)' }} />
                      </div>
                    ))}
                  </div>
                  {/* Fake map pin */}
                  <div className="absolute bottom-6 right-6 flex flex-col gap-2">
                    {[0,1,2].map(i => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <div className="h-px w-12 bg-blue-500/40" />
                        <div className="w-1.5 h-1.5 rounded bg-blue-600/60" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 px-3 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-xl shadow-blue-600/30">
                LIVE · {tr.products.innowatch.liveCount}
              </div>
            </motion.div>
          </div>
        </div>
      </VideoSection>

      {/* ── WIZEYE ── */}
      <VideoSection tint="rgba(2,12,24,0.83)" fullHeight>
        <div ref={refB} className="max-w-7xl mx-auto px-6 py-28 flex flex-col justify-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: mock UI */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inViewB ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative order-2 lg:order-1"
            >
              <div className="rounded-2xl border border-cyan-800/40 bg-gray-900/60 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/40">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800/60 bg-gray-900/80">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-gray-400 text-xs ml-2">WIZEYE — AI Vision Analytics</span>
                </div>
                <div className="p-5 bg-[#040C18]">
                  {/* Fake AI detection view */}
                  <div className="relative aspect-video rounded-lg bg-gray-900 overflow-hidden mb-4 border border-gray-800/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-transparent" />
                    {/* Detection boxes */}
                    {[
                      { top: '20%', left: '15%', w: '20%', h: '40%', color: 'border-cyan-400', label: 'PERSON' },
                      { top: '30%', left: '50%', w: '25%', h: '35%', color: 'border-yellow-400', label: 'VEHICLE' },
                      { top: '60%', left: '25%', w: '15%', h: '25%', color: 'border-green-400', label: 'OBJECT' },
                    ].map((box) => (
                      <div
                        key={box.label}
                        className={`absolute border-2 ${box.color} rounded`}
                        style={{ top: box.top, left: box.left, width: box.w, height: box.h }}
                      >
                        <span className={`text-[8px] font-bold px-1 py-px ${box.color.replace('border-', 'text-')}`}>
                          {box.label}
                        </span>
                      </div>
                    ))}
                    {/* Scan line animation */}
                    <motion.div
                      className="absolute left-0 right-0 h-px bg-cyan-400/40"
                      animate={{ top: ['10%', '90%', '10%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Objects', value: '1,247' },
                      { label: 'Accuracy', value: '99.3%' },
                      { label: 'FPS', value: '30' },
                    ].map((s) => (
                      <div key={s.label} className="rounded-lg bg-gray-800/60 p-3 text-center border border-gray-700/40">
                        <div className="text-cyan-400 font-bold text-sm">{s.value}</div>
                        <div className="text-gray-400 text-[10px] mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl bg-cyan-600/90 text-white text-xs font-bold shadow-xl shadow-cyan-600/30">
                AI DETECTING · LIVE
              </div>
            </motion.div>

            {/* Right text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inViewB ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-600/15 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest mb-6">
                WIZEYE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                {tr.products.wizeye.headline}
                <br />
                <span className="animated-gradient">{tr.products.wizeye.headlineSub}</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-3 text-base">
                <span className="text-cyan-400 font-semibold">{tr.products.wizeye.tag}</span>
              </p>
              <p className="text-gray-400 leading-relaxed mb-10 text-base">{tr.products.wizeye.desc}</p>

              <div className="flex flex-col gap-5">
                {tr.products.wizeye.features.map((f, i) => {
                  const Icon = wizeyeIcons[i]
                  return (
                    <motion.div
                      key={f.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inViewB ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cyan-600/15 border border-cyan-500/25 flex items-center justify-center mt-0.5">
                        <Icon size={18} className="text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-base mb-1">{f.title}</div>
                        <div className="text-gray-400 text-sm leading-relaxed">{f.desc}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </VideoSection>
    </div>
  )
}
