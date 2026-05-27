import { motion } from 'framer-motion'
import { Search, Map, Zap, Rocket, BarChart3 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Vision',
    desc: 'We start by understanding who you are — not just your music, but your story, your goals, and what makes you unmistakably you. Deep listening before anything else.',
  },
  {
    number: '02',
    icon: Map,
    title: 'Strategic Planning',
    desc: 'With a clear vision in hand, we build your career roadmap. Release timelines, target markets, team assembly, and milestone targets — a blueprint designed to last.',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Creative Development',
    desc: 'Here\'s where vision becomes reality. We oversee production, connect you with the right creative collaborators, and ensure every output reflects your authentic voice.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Promotion',
    desc: 'Strategic rollouts, media campaigns, playlist pitching, live performance booking, and press — we take your work to the world with the full force of our network.',
  },
  {
    number: '05',
    icon: BarChart3,
    title: 'Growth & Evolution',
    desc: 'The work doesn\'t stop at launch. We continuously analyze, adapt, and evolve your strategy to keep momentum building and your career thriving for the long haul.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-32 bg-ctd-black relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      {/* Vertical center line (desktop) */}
      <div className="hidden md:block absolute left-1/2 top-44 bottom-20 w-px bg-gradient-to-b from-gold/30 via-gold/10 to-transparent -translate-x-1/2" />

      <div className="section-wrapper">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-20"
        >
          {['section-label', 'display-heading'].map((_, i) =>
            i === 0 ? (
              <motion.div
                key="label"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="section-label mb-5"
              >
                How We Work
              </motion.div>
            ) : (
              <motion.h2
                key="heading"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
                className="display-heading text-5xl md:text-6xl text-white"
              >
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-warm">
                  Proven Process
                </span>
              </motion.h2>
            )
          )}
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto space-y-0">
          {steps.map((step, i) => {
            const Icon = step.icon
            const isEven = i % 2 === 0
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-start gap-6 pb-12 last:pb-0"
              >
                {/* Left: number + connector */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-warm/10 border border-gold/20 flex items-center justify-center shadow-[0_0_20px_rgba(201,168,76,0.1)] z-10">
                    <Icon size={20} className="text-gold" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-gold/20 to-transparent mt-3" style={{ minHeight: '3rem' }} />
                  )}
                </div>

                {/* Right: content */}
                <div className="flex-1 pt-3 pb-8">
                  <div className="font-body text-[10px] tracking-[0.25em] uppercase text-gold/50 mb-2">
                    Step {step.number}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
