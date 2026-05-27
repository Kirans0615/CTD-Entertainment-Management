import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const LOGO = 'https://raw.githubusercontent.com/Kirans0615/CTD-Entertainment-Management/main/mainlogo.jpg'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Artists', href: '#roster' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ctd-black/95 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_0_rgba(201,168,76,0.1)]'
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLink(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gold/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={LOGO}
                alt="CTD Entertainment Management"
                className="relative h-11 w-11 rounded-full object-cover ring-2 ring-gold/30 group-hover:ring-gold/60 transition-all duration-300"
              />
            </div>
            <div className="hidden sm:block leading-none">
              <div className="font-display text-base font-semibold text-white tracking-wide">CTD Entertainment</div>
              <div className="text-[10px] text-gold/70 tracking-[0.2em] uppercase font-body mt-0.5">Management</div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLink(e, link.href)}
                className="text-sm font-body text-white/60 hover:text-gold transition-colors duration-200 tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLink(e, '#contact')}
              className="ml-2 px-5 py-2.5 text-sm font-body font-semibold bg-gradient-to-r from-gold to-warm text-ctd-black rounded-full hover:shadow-[0_0_20px_rgba(201,168,76,0.45)] transition-all duration-300 hover:scale-105"
            >
              Work With Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-white/70 hover:text-gold transition-colors rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-ctd-black/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="absolute top-20 left-0 right-0 bg-ctd-dark border-b border-white/5 shadow-2xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="px-6 py-8 flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLink(e, link.href)}
                    className="text-lg font-body text-white/70 hover:text-gold transition-colors py-3 border-b border-white/5 last:border-0"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={(e) => handleLink(e, '#contact')}
                  className="mt-4 w-full text-center py-4 bg-gradient-to-r from-gold to-warm text-ctd-black font-body font-semibold rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Work With Us
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
