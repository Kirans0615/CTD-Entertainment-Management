import { useEffect, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

const LOGO = 'https://raw.githubusercontent.com/Kirans0615/CTD-Entertainment-Management/main/mainlogo.jpg'

const VIDEO = `${import.meta.env.BASE_URL}media/hero-concert.mp4`
const POSTER = `${import.meta.env.BASE_URL}media/hero-concert-poster.jpg`

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2])
  const videoRef = useRef(null)
  const reduceMotion = useReducedMotion()

  // Respect reduced-motion: hold on the first frame instead of playing.
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (reduceMotion) {
      v.pause()
    } else {
      v.playbackRate = 0.85 // slightly slowed for a more cinematic feel
      v.play().catch(() => {})
    }
  }, [reduceMotion])

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ctd-black"
    >
      {/* Background video — autoplays muted + looped; poster shows until it can play */}
      <motion.div style={{ scale: videoScale }} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={POSTER}
          disablePictureInPicture
          disableRemotePlayback
          className="h-full w-full object-cover transform-gpu"
        >
          <source src={VIDEO} type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlay: dark wash for legibility, gold/warm stage-light tint, then vignette + fade into the next section */}
      <div className="absolute inset-0 bg-ctd-black/85 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none mix-blend-soft-light"
        style={{
          background:
            'radial-gradient(ellipse at 20% 0%, rgba(201,168,76,0.55) 0%, transparent 55%), radial-gradient(ellipse at 85% 100%, rgba(212,114,42,0.45) 0%, transparent 55%)',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(8,8,8,0.85)_100%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ctd-black pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ctd-black/70 to-transparent pointer-events-none" />

      {/* Soft warm bloom behind the headline — lifts the centre without brightening the video */}
      <div
        className="absolute left-1/2 top-[46%] h-[70vh] w-[90vw] max-w-[1100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.13) 0%, transparent 65%)' }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

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
        <h1 className="display-heading text-5xl sm:text-7xl md:text-[5.5rem] text-white mb-6 [text-shadow:0_4px_40px_rgba(0,0,0,0.6)]">
          {[
            { words: ['Amplifying'], cls: '' },
            { words: ['Diverse', 'Voices'], cls: 'text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-warm' },
            { words: ['in', 'Music', '&', 'Arts'], cls: 'text-white/90', br: true },
          ].map((group, gi) => (
            <span key={gi}>
              {group.br && <br />}
              {group.words.map((w, wi) => (
                <motion.span
                  key={w}
                  className={`inline-block ${group.cls}`}
                  initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.9, delay: 0.4 + (gi * 3 + wi) * 0.09, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                  {(wi < group.words.length - 1 || gi === 0) && '\u00A0'}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-lg md:text-xl text-white/75 max-w-2xl [text-shadow:0_2px_20px_rgba(0,0,0,0.7)] mx-auto mb-12 leading-relaxed"
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
          className="mt-16 flex flex-wrap items-center justify-center gap-y-3 text-white/60"
        >
          {['50+ Artists', '15+ Years', '200+ Projects', '30+ Cities'].map((stat, i) => (
            <div key={stat} className="flex items-center">
              {i > 0 && <span className="mx-5 sm:mx-7 h-3 w-px bg-gold/40" />}
              <span className="text-[11px] font-body tracking-[0.22em] uppercase">{stat}</span>
            </div>
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
