import { motion } from 'framer-motion'
import { CheckCircle2, Globe, Music, Users } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const pillars = [
  { icon: Users, text: 'Building diverse artist communities across genres and cultures' },
  { icon: Music, text: 'Curating careers that resonate beyond traditional boundaries' },
  { icon: Globe, text: 'Connecting talent to global markets and audiences' },
  { icon: CheckCircle2, text: 'Delivering results rooted in integrity and creative vision' },
]

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-ctd-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-96 bg-gradient-to-l from-gold/[0.03] to-transparent pointer-events-none" />

      <div className="section-wrapper relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeUp} className="section-label mb-5">Our Mission</motion.div>
            <motion.h2 variants={fadeUp} className="display-heading text-5xl md:text-6xl text-white mb-6">
              Where Art Meets{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-warm">
                Opportunity
              </span>
            </motion.h2>
            <div className="gold-divider" />
            <motion.p variants={fadeUp} className="font-body text-white/60 text-base leading-relaxed mb-4">
              CTD Entertainment Management was founded on a singular belief: that the richness of human
              expression deserves an equally rich platform. We exist to create diversity among the music
              masses — championing artists whose voices might otherwise go unheard.
            </motion.p>
            <motion.p variants={fadeUp} className="font-body text-white/60 text-base leading-relaxed mb-10">
              From emerging songwriters to established acts, we manage talent and creative projects across
              every level of arts and entertainment. Our approach is hands-on, holistic, and driven by
              genuine passion for the culture we serve.
            </motion.p>

            {/* Pillars */}
            <motion.ul variants={stagger} className="space-y-4">
              {pillars.map(({ icon: Icon, text }) => (
                <motion.li key={text} variants={fadeUp} className="flex items-start gap-4">
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-gold" />
                  </div>
                  <span className="font-body text-white/70 text-sm leading-relaxed">{text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: Visual block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-ctd-card p-10">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/20 to-transparent rounded-bl-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-warm/10 to-transparent rounded-tr-3xl" />

              <div className="relative z-10">
                <div className="font-display text-7xl font-semibold text-white/[0.06] leading-none mb-6 select-none">
                  CTD
                </div>
                <blockquote className="font-display text-2xl italic text-white/80 leading-relaxed mb-8">
                  "We don't just manage careers — we architect legacies."
                </blockquote>
                <div className="h-px bg-gradient-to-r from-gold/30 to-transparent mb-8" />

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { num: '50+', label: 'Artists Managed' },
                    { num: '15+', label: 'Years Experience' },
                    { num: '200+', label: 'Projects Delivered' },
                    { num: '30+', label: 'Cities Reached' },
                  ].map(({ num, label }) => (
                    <div key={label}>
                      <div className="font-display text-3xl font-semibold text-gold">{num}</div>
                      <div className="font-body text-xs text-white/40 mt-1 tracking-wide uppercase">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-gold to-warm rounded-2xl p-5 shadow-[0_20px_60px_rgba(201,168,76,0.3)]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="font-display text-3xl font-semibold text-ctd-black leading-none">15+</div>
              <div className="font-body text-[10px] uppercase tracking-wider text-ctd-black/70 mt-1">Years in the Game</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
