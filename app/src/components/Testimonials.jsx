import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'CTD completely transformed my career trajectory. Their strategic vision and industry connections opened doors I never knew existed. They don\'t just manage — they invest in your future as deeply as you do.',
    name: 'Marcus T.',
    role: 'R&B Artist',
    initials: 'MT',
    gradient: 'from-gold/30 to-warm/20',
  },
  {
    quote:
      'Working with CTD feels like having a world-class team in your corner that genuinely cares about your art. They understood my vision instantly and helped me execute it at a level I couldn\'t have reached alone.',
    name: 'Lyra Chen',
    role: 'Pop & Electronic Artist',
    initials: 'LC',
    gradient: 'from-purple-500/30 to-gold/20',
  },
  {
    quote:
      'CTD doesn\'t just manage talent — they architect legacies. I\'ve been in the industry a long time and no team has ever matched their combination of passion, professionalism, and pure music knowledge.',
    name: 'DJ Pharoah',
    role: 'Producer & Recording Artist',
    initials: 'DP',
    gradient: 'from-warm/30 to-gold/20',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-ctd-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)' }}
      />

      <div className="section-wrapper relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="section-label mb-5">Testimonials</motion.div>
          <motion.h2 variants={fadeUp} className="display-heading text-5xl md:text-6xl text-white">
            Voices That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-warm">
              Say It Best
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="card-glass group p-8 rounded-2xl flex flex-col"
              whileHover={{ y: -4 }}
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-transparent flex items-center justify-center mb-6">
                <Quote size={18} className="text-gold" />
              </div>

              <blockquote className="font-body text-white/65 text-sm leading-relaxed flex-1 mb-8 italic">
                "{t.quote}"
              </blockquote>

              <div className="h-px bg-gradient-to-r from-gold/20 to-transparent mb-6" />

              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center shrink-0`}>
                  <span className="font-display text-sm font-semibold text-white">{t.initials}</span>
                </div>
                <div>
                  <div className="font-body font-medium text-white text-sm">{t.name}</div>
                  <div className="font-body text-xs text-gold/60 tracking-wide mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
