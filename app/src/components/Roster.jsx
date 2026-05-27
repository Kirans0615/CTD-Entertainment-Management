import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const artists = [
  {
    initials: 'MT',
    name: 'Marcus T.',
    genre: 'R&B · Soul',
    gradient: 'from-[#C9A84C] via-[#9B3A2A] to-[#1a0a00]',
    accent: '#C9A84C',
    description: 'Soulful storyteller redefining contemporary R&B for a new generation.',
  },
  {
    initials: 'LC',
    name: 'Lyra Chen',
    genre: 'Pop · Electronic',
    gradient: 'from-[#6B4DE6] via-[#C9A84C] to-[#0D0D0D]',
    accent: '#9B7BE0',
    description: 'Boundary-pushing pop artist fusing electronic textures with emotional depth.',
  },
  {
    initials: 'DP',
    name: 'DJ Pharoah',
    genre: 'Hip-Hop · Production',
    gradient: 'from-[#D4722A] via-[#5A1A00] to-[#0D0D0D]',
    accent: '#D4722A',
    description: 'Producer and DJ whose beats have fueled some of the decade\'s biggest records.',
  },
  {
    initials: 'SR',
    name: 'Selena Rivers',
    genre: 'Jazz · Neo-Soul',
    gradient: 'from-[#2A6B4C] via-[#C9A84C] to-[#0D0D0D]',
    accent: '#5AC9A0',
    description: 'Jazz-trained vocalist weaving neo-soul warmth into every breath she takes.',
  },
  {
    initials: 'TV',
    name: 'The Vanguard',
    genre: 'Alt · Indie Rock',
    gradient: 'from-[#4C2A6B] via-[#C9A84C] to-[#0D0D0D]',
    accent: '#A07AE0',
    description: 'A genre-bending collective challenging conventions of what a band can be.',
  },
  {
    initials: 'KS',
    name: 'Kai Santos',
    genre: 'Afrobeats · World',
    gradient: 'from-[#C9A84C] via-[#2A4B6B] to-[#0D0D0D]',
    accent: '#C9A84C',
    description: 'Global sound architect bridging Afrobeats with jazz and electronic fusion.',
  },
]

function ArtistCard({ artist }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Gradient background */}
      <div className={`aspect-[3/4] bg-gradient-to-b ${artist.gradient} relative`}>
        {/* Inner grain */}
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '150px' }}
        />

        {/* Initials */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-display text-7xl font-semibold leading-none select-none opacity-90"
            style={{ color: artist.accent }}
          >
            {artist.initials}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-ctd-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center p-6">
          <div className="text-center">
            <p className="font-body text-sm text-white/80 leading-relaxed mb-4">{artist.description}</p>
            <div className="inline-flex items-center gap-2 text-xs font-body font-medium text-gold border border-gold/40 rounded-full px-4 py-2">
              View Profile <ArrowUpRight size={12} />
            </div>
          </div>
        </div>

        {/* Bottom info (always visible) */}
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-ctd-black/90 to-transparent">
          <div className="font-display text-lg font-semibold text-white">{artist.name}</div>
          <div className="font-body text-xs tracking-wider uppercase mt-1" style={{ color: artist.accent + 'CC' }}>
            {artist.genre}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Roster() {
  return (
    <section id="roster" className="py-32 bg-ctd-dark relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div className="section-wrapper">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <motion.div variants={fadeUp} className="section-label mb-5">Our Roster</motion.div>
            <motion.h2 variants={fadeUp} className="display-heading text-5xl md:text-6xl text-white">
              The Artists We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-warm">
                Champion
              </span>
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="font-body text-white/50 text-base max-w-sm leading-relaxed">
            A curated roster of boundary-pushing talent representing the full spectrum of the human experience.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {artists.map((artist) => (
            <ArtistCard key={artist.name} artist={artist} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="font-body text-white/30 text-sm">
            + More artists represented across genres and disciplines
          </p>
        </motion.div>
      </div>
    </section>
  )
}
