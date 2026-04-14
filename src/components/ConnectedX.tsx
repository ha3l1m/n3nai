import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Camera, Brain, Wifi } from 'lucide-react'
import type { Lang } from '../i18n/translations'

interface Props { lang: Lang }

const domains = {
  ko: ['드론', '선박', 'UAM', '로지스틱스'],
  en: ['Drone', 'Ship', 'UAM', 'Logistics'],
}

const steps = {
  ko: [
    { icon: Camera, label: '데이터 수집', desc: '탑재된 카메라의 영상 데이터를 AI 학습을 위해 수집합니다.' },
    { icon: Brain, label: '모델 학습', desc: '수집된 데이터를 정교하게 선별하고 AI 모델을 반복적으로 개선합니다.' },
    { icon: Wifi, label: '배포', desc: '업데이트된 AI 모델을 최적의 네트워크를 통해 각 차량으로 배포합니다.' },
  ],
  en: [
    { icon: Camera, label: 'Data Collection', desc: 'Collect video data from onboard cameras for AI training.' },
    { icon: Brain, label: 'Model Training', desc: 'Selectively curate data and iteratively improve AI models.' },
    { icon: Wifi, label: 'Deployment', desc: 'Deploy updated AI models to each vehicle via optimal networks.' },
  ],
}

export default function ConnectedX({ lang }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const domainItems = domains[lang]
  const stepItems = steps[lang]

  return (
    <section className="py-28 bg-gray-50 dark:bg-[#0a0f1a] overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6"
        >
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-cyan-600 dark:text-cyan-400 mb-2 block">
            Future Mobility
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-2">
            Connected X
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            {lang === 'ko'
              ? '탑재된 카메라의 영상을 AI 학습에 활용해 모델을 지속적으로 개선합니다. 개선된 AI를 최적의 네트워크를 통해 각 차량으로 빠르게 배포해, 주행 환경에 즉시 반영합니다.'
              : 'Continuously improve AI models using onboard camera footage. Deploy enhanced AI to each vehicle via optimal networks for immediate real-world application.'}
          </p>
        </motion.div>

        {/* Image + Steps container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
        >
          {/* Steps bar */}
          <div className="grid grid-cols-3 border-b border-gray-200 dark:border-gray-800">
            {stepItems.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.label} className={`px-5 py-4 flex items-center gap-3 ${i < stepItems.length - 1 ? 'border-r border-gray-200 dark:border-gray-800' : ''}`}>
                  <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-gray-500 dark:text-gray-400" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 font-semibold">0{i + 1}</span>
                    <h3 className="text-xs font-bold text-gray-900 dark:text-white leading-tight">{step.label}</h3>
                  </div>
                </div>
              )
            })}
          </div>
          {/* Image */}
          <img
            src={`${import.meta.env.BASE_URL}connected-x.jpg`}
            alt="Connected X Active Learning Cycle"
            className="w-full h-auto"
          />
          {/* Domain chips inside container */}
          <div className="border-t border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between">
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 flex-shrink-0">
              {lang === 'ko' ? '적용 영역' : 'Application Areas'}
            </span>
            <div className="flex items-center gap-2 flex-wrap justify-end">
              {domainItems.map((item) => (
                <span
                  key={item}
                  className="px-4 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
