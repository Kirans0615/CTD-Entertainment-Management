import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Instagram, Twitter, Youtube, Music2, Linkedin, Send } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'X / Twitter', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Music2, label: 'Spotify', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
]

const projectTypes = [
  'Artist Management',
  'Music Production Oversight',
  'Brand Development',
  'Tour & Event Management',
  'Creative Direction',
  'Talent Development',
  'General Inquiry',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 bg-ctd-black relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,114,42,0.06) 0%, transparent 70%)' }}
      />

      <div className="section-wrapper relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="lg:col-span-2"
          >
            <motion.div variants={fadeUp} className="section-label mb-5">Get In Touch</motion.div>
            <motion.h2 variants={fadeUp} className="display-heading text-5xl md:text-6xl text-white mb-6">
              Let's Build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-warm">
                Something
              </span>
            </motion.h2>
            <div className="gold-divider" />
            <motion.p variants={fadeUp} className="font-body text-white/55 text-base leading-relaxed mb-10">
              Whether you're an emerging artist seeking management, a brand looking to partner, or an industry
              professional exploring collaboration — we want to hear your story.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-5 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Mail size={16} className="text-gold" />
                </div>
                <div>
                  <div className="font-body text-xs text-white/40 uppercase tracking-wider mb-0.5">Email</div>
                  <div className="font-body text-white/80 text-sm">info@ctdentertainment.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <MapPin size={16} className="text-gold" />
                </div>
                <div>
                  <div className="font-body text-xs text-white/40 uppercase tracking-wider mb-0.5">Based In</div>
                  <div className="font-body text-white/80 text-sm">United States · Global Reach</div>
                </div>
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div variants={fadeUp}>
              <div className="font-body text-xs text-white/30 uppercase tracking-wider mb-4">Follow Us</div>
              <div className="flex items-center gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 hover:bg-gold/10 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="card-glass rounded-3xl p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-warm flex items-center justify-center mx-auto mb-6">
                    <Send size={24} className="text-ctd-black" />
                  </div>
                  <h3 className="font-display text-3xl font-semibold text-white mb-3">Message Received</h3>
                  <p className="font-body text-white/50 text-sm">We'll be in touch within 48 hours. Thanks for reaching out.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-xs text-white/40 uppercase tracking-wider block mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white font-body text-sm placeholder-white/20 focus:outline-none focus:border-gold/40 focus:bg-white/[0.07] transition-all duration-200"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs text-white/40 uppercase tracking-wider block mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white font-body text-sm placeholder-white/20 focus:outline-none focus:border-gold/40 focus:bg-white/[0.07] transition-all duration-200"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-xs text-white/40 uppercase tracking-wider block mb-2">Project Type</label>
                    <select
                      required
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white font-body text-sm focus:outline-none focus:border-gold/40 focus:bg-white/[0.07] transition-all duration-200 appearance-none cursor-pointer"
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="" disabled className="bg-ctd-card">Select a service...</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="bg-ctd-card">{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-xs text-white/40 uppercase tracking-wider block mb-2">Your Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white font-body text-sm placeholder-white/20 focus:outline-none focus:border-gold/40 focus:bg-white/[0.07] transition-all duration-200 resize-none"
                      placeholder="Tell us about yourself and what you're looking to achieve..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-gold to-warm text-ctd-black font-body font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] transition-all duration-300"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    Send Message
                    <Send size={16} />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
