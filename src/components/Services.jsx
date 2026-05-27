import { motion } from 'framer-motion'
import { Users, Mic2, Briefcase, CalendarDays, Palette, TrendingUp } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const services = [
  {
    icon: Users,
    title: 'Artist Management',
    desc: 'End-to-end career management — from contract negotiation to public relations. We handle the business so artists can focus on the craft.',
    accent: 'from-gold/20 to-transparent',
  },
  {
    icon: Mic2,
    title: 'Music Production Oversight',
    desc: 'Strategic creative supervision across recording, mixing, and mastering. Connecting artists with the right producers to shape their sonic identity.',
    accent: 'from-warm/15 to-transparent',
  },
  {
    icon: Briefcase,
    title: 'Brand Development',
    desc: 'Crafting authentic, distinctive artist brands. Visual identity, digital presence, merchandise strategy, and partnership positioning.',
    accent: 'from-gold/15 to-transparent',
  },
  {
    icon: CalendarDays,
    title: 'Tour & Event Management',
    desc: 'Full-spectrum live event production — routing, logistics, venue partnerships, rider negotiation, and on-the-ground execution.',
    accent: 'from-warm/20 to-transparent',
  },
  {
    icon: Palette,
    title: 'Creative Direction',
    desc: 'Conceptual storytelling across music videos, album artwork, campaign rollouts, and press materials that cement an artist\'s visual narrative.',
    accent: 'from-gold/20 to-transparent',
  },
  {
    icon: TrendingUp,
    title: 'Talent Development',
    desc: 'Early-stage artist cultivation — performance coaching, vocal development, songwriting mentorship, and career roadmap planning.',
    accent: 'from-warm/15 to-transparent',
  },
]

function ServiceCard({ service, index }) {
  const Icon = service.icon
  return (
    <motion.div
      variants={fadeUp}
      className="card-glass group relative p-8 rounded-2xl cursor-default overflow-hidden"
      whileHover={{ y: -4, scale: 1.01 }}
    >
      {/* Hover gradient corner */}
      <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

      {/* Number */}
      <div className="absolute top-6 right-7 font-display text-5xl font-semibold text-white/[0.04] select-none group-hover:text-white/[0.07] transition-colors duration-300">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-warm/10 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.2)] transition-shadow duration-300">
          <Icon size={22} className="text-gold" />
        </div>
        <h3 className="font-display text-xl font-semibold text-white mb-3">{service.title}</h3>
        <p className="font-body text-sm text-white/50 leading-relaxed">{service.desc}</p>
        <div className="mt-6 flex items-center gap-2 text-gold/0 group-hover:text-gold/70 transition-colors duration-300">
          <span className="text-xs font-body tracking-wider uppercase">Learn More</span>
          <span className="text-xs">→</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-32 bg-ctd-black relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div className="section-wrapper">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="section-label mb-5">What We Do</motion.div>
          <motion.h2 variants={fadeUp} className="display-heading text-5xl md:text-6xl text-white mb-5">
            Full-Spectrum{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-warm">
              Creative Services
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-white/50 text-lg max-w-xl mx-auto">
            From discovery to legacy — every service we offer is built around the artist first.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
