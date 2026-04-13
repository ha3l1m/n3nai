import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react'
import type { Translations } from '../i18n/translations'

interface Props { tr: Translations }

export default function Contact({ tr }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #0066FF 0%, transparent 70%)' }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400 mb-4 block">
              {tr.contact.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              {tr.contact.h2a}
              <span className="animated-gradient">{tr.contact.h2b}</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-10">{tr.contact.sub}</p>

            <div className="flex flex-col gap-5">
              {[
                { icon: Mail, label: 'hello@n3n.ai' },
                { icon: Phone, label: '+82 2-1234-5678' },
                { icon: MapPin, label: '서울특별시, 대한민국' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center">
                    <c.icon size={16} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm">{c.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-800/50 p-8 shadow-sm"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-64 text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50 flex items-center justify-center">
                  <ArrowRight size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{tr.contact.successTitle}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{tr.contact.successSub}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  {([
                    { id: 'name' as const, label: tr.contact.name, ph: tr.contact.namePh },
                    { id: 'company' as const, label: tr.contact.company, ph: tr.contact.companyPh },
                  ]).map((f) => (
                    <div key={f.id} className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-gray-600 dark:text-gray-400">{f.label}</label>
                      <input
                        type="text"
                        placeholder={f.ph}
                        value={form[f.id]}
                        onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                        className="px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600/60 bg-white dark:bg-gray-700/50 text-gray-900 dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-600 dark:text-gray-400">{tr.contact.email}</label>
                  <input
                    type="email"
                    placeholder={tr.contact.emailPh}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600/60 bg-white dark:bg-gray-700/50 text-gray-900 dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-600 dark:text-gray-400">{tr.contact.message}</label>
                  <textarea
                    rows={4}
                    placeholder={tr.contact.messagePh}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600/60 bg-white dark:bg-gray-700/50 text-gray-900 dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors shadow-md shadow-blue-600/20"
                >
                  {tr.contact.submit}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
