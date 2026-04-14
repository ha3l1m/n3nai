import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Translations } from '../i18n/translations'

interface Props { tr: Translations }

const badgeColors: Record<string, string> = {
  '물류': 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  '도시 운영': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  '데이터센터': 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  '생산공정': 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  '서비스 운영': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
  '스마트시티': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  'IT 인프라': 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  '산업현장': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  '공공인프라': 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  'Logistics': 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  'Urban Ops': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  'Data Centers': 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  'Production': 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  'Service Ops': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
  'Smart City': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  'IT Infra': 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  'Industrial': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  'Public Infra': 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
}

function Card({ item, cta }: { item: { client: string; category: string; desc: string; image: string }; cta: string }) {
  const badgeColor = badgeColors[item.category] || 'bg-gray-600'
  return (
    <article className="group flex-shrink-0 w-[300px] rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 p-6 flex flex-col">
      <span className={`self-start px-2.5 py-0.5 rounded-md text-[11px] font-semibold tracking-wider uppercase mb-4 ${badgeColor}`}>
        {item.category}
      </span>
      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug">
        {item.client}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">
        {item.desc}
      </p>
      <a
        href="#contact"
        className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-sm font-semibold group-hover:gap-2.5 transition-all"
      >
        {cta}
        <ArrowRight size={14} />
      </a>
    </article>
  )
}

function MarqueeRow({ items, cta, direction = 'left', duration = 40 }: {
  items: { client: string; category: string; desc: string; image: string }[]
  cta: string
  direction?: 'left' | 'right'
  duration?: number
}) {
  const doubled = [...items, ...items]
  const x = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x }}
        transition={{ x: { repeat: Infinity, repeatType: 'loop', duration, ease: 'linear' } }}
      >
        {doubled.map((item, i) => (
          <Card key={`${item.client}-${i}`} item={item} cta={cta} />
        ))}
      </motion.div>
    </div>
  )
}

export default function UseCasesMarquee({ tr }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const cases = tr.usecases.cases

  const mid = Math.ceil(cases.length / 2)
  const row1 = cases.slice(0, mid)
  const row2 = cases.slice(mid)

  return (
    <section className="py-28 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400 mb-2 block">
            {tr.usecases.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-2">
            {tr.usecases.h2}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            {tr.usecases.sub}
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-6">
        <MarqueeRow items={row1} cta={tr.usecases.cta} direction="left" duration={45} />
        {row2.length > 0 && (
          <MarqueeRow items={row2} cta={tr.usecases.cta} direction="right" duration={50} />
        )}
      </div>
    </section>
  )
}
