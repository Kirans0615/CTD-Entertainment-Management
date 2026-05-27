import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

const LOGO = 'https://raw.githubusercontent.com/Kirans0615/CTD-Entertainment-Management/main/mainlogo.jpg'

function Orb({ style, animate, duration, delay = 0 }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={style}
      animate={animate}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
    />
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ctd-black"
    >
      {/* Ambient orbs */}
      <Orb
        style={{
          width: 800,
          height: 800,
          background: 'radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 65%)',
          top: '-20%',
          left: '-20%',
          filter: 'blur(1px)',
        }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        duration={14}
      />
      <Orb
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(212,114,42,0.14) 0%, transparent 65%)',
          bottom: '-10%',
          right: '-10%',
          filter: 'blur(1px)',
        }}
        animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
        duration={11}
        delay={2}
      />
      <Orb
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)',
          top: '40%',
          left: '60%',
          filter: 'blur(2px)',
        }}
        animate={{ x: [0, 20, 0], y: [0, -50, 0], scale: [1, 1.05, 1] }}
        duration={9}
        delay={4}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#080808_100%)] pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-10"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.4) 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <img
              src={LOGO}
              alt="CTD Entertainment Management"
              className="relative h-32 w-32 md:h-40 md:w-40 rounded-full object-cover ring-2 ring-gold/50 shadow-[0_0_60px_rgba(201,168,76,0.25)]"
            />
          </div>
        </motion.div>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-center justify-center gap-3 mb-7"
        >
          <div className="h-px w-8 bg-gold/50" />
          <span className="section-label">CTD Entertainment Management</span>
          <div className="h-px w-8 bg-gold/50" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="display-heading text-5xl sm:text-7xl md:text-[5.5rem] text-white mb-6"
        >
          Amplifying{' '}
          <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-warm">
            Diverse Voices
          </em>
          <br />
          <span className="text-white/90">in Music &amp; Arts</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-lg md:text-xl text-white/55 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          A multifaceted arts and entertainment management company creating diversity among the music masses —
          managing talent and creative projects across every level of the industry.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#roster" onClick={(e) => { e.preventDefault(); document.querySelector('#roster')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn-gold">
            Explore Our Roster
          </a>
          <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn-outline">
            <Sparkles size={16} />
            Our Story
          </a>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex items-center justify-center gap-8 text-white/30"
        >
          {['50+ Artists', '15+ Years', '200+ Projects', '30+ Cities'].map((stat) => (
            <div key={stat} className="text-xs font-body tracking-wider uppercase">{stat}</div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-gold/60 transition-colors cursor-pointer"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] font-body tracking-[0.25em] uppercase">Scroll</span>
        <ChevronDown size={18} />
      </motion.button>
    </section>
  )
}
