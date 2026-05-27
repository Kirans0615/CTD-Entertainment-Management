import { motion } from 'framer-motion'
import { Instagram, Twitter, Youtube, Music2, Linkedin } from 'lucide-react'

const LOGO = 'https://raw.githubusercontent.com/Kirans0615/CTD-Entertainment-Management/main/mainlogo.jpg'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Artists', href: '#roster' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'X / Twitter', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Music2, label: 'Spotify', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
]

const handleLink = (e, href) => {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-ctd-dark border-t border-white/5 relative">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="section-wrapper py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <a href="#hero" onClick={(e) => handleLink(e, '#hero')} className="flex items-center gap-3 mb-5 group w-fit">
              <img
                src={LOGO}
                alt="CTD Entertainment Management"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/25 group-hover:ring-gold/50 transition-all duration-300"
              />
              <div className="leading-none">
                <div className="font-display text-base font-semibold text-white">CTD Entertainment</div>
                <div className="text-[10px] text-gold/60 tracking-[0.2em] uppercase font-body mt-0.5">Management</div>
              </div>
            </a>
            <p className="font-body text-white/40 text-sm leading-relaxed max-w-xs">
              Creating diversity among the music masses. Managing talent and creative projects across every level of arts and entertainment.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="font-body text-xs text-white/30 uppercase tracking-[0.2em] mb-5">Navigation</div>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLink(e, link.href)}
                    className="font-body text-sm text-white/50 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="font-body text-xs text-white/30 uppercase tracking-[0.2em] mb-5">Connect</div>
            <div className="flex gap-3 mb-8">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 hover:bg-gold/10 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={(e) => handleLink(e, '#contact')}
              className="inline-block px-6 py-3 bg-gradient-to-r from-gold to-warm text-ctd-black font-body text-sm font-semibold rounded-full hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all duration-300 hover:scale-105"
            >
              Work With Us
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/25 text-xs">
            © {new Date().getFullYear()} CTD Entertainment Management. All rights reserved.
          </p>
          <p className="font-body text-white/20 text-xs italic">
            Creating diversity among the music masses.
          </p>
        </div>
      </div>
    </footer>
  )
}
