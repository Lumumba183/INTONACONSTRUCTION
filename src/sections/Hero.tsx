import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, Play } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Background Image with Video-Live Effect */}
      <div className="absolute inset-0">
        {/* Continuous Ken Burns - slow zoom/pan loop like video footage */}
        <motion.div
          initial={{ scale: 1, x: 0 }}
          animate={{ scale: 1.12, x: -20 }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0"
        >
          <img
            src="/images/hero-bg.jpg"
            alt="African construction site"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-intona-charcoal/90 via-intona-charcoal/70 to-intona-charcoal/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-intona-charcoal/80 via-transparent to-intona-charcoal/30" />

        {/* Floating dust particles - video-like atmosphere */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-300/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Subtle film grain overlay for video feel */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Light leak sweep - like camera lens flare in video */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(105deg, transparent 40%, rgba(212,160,23,0.08) 45%, rgba(255,200,100,0.12) 50%, rgba(212,160,23,0.08) 55%, transparent 60%)',
          }}
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 8, repeat: Infinity, repeatDelay: 7, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center section-padding">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-intona-gold/20 border border-intona-gold/30
                     rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-intona-gold rounded-full animate-pulse" />
            <span className="text-intona-gold font-heading font-semibold text-sm tracking-wide uppercase">
              Kenya's Premier Construction Company
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white
                     leading-[1.1] mb-6"
          >
            Building Africa's
            <span className="block text-gradient">Future,</span>
            <span className="block">One Structure at a Time</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed"
          >
            For over 15 years, Intona Construction has been transforming skylines across 
            East Africa. From luxury residences to commercial landmarks, we deliver 
            excellence with every brick laid.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2 text-base"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/projects"
              className="btn-outline inline-flex items-center justify-center gap-2 text-base"
            >
              <Play className="w-5 h-5" />
              View Our Projects
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10"
          >
            {[
              { value: '500+', label: 'Projects' },
              { value: '15+', label: 'Years' },
              { value: '12', label: 'Countries' },
              { value: '98%', label: 'Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-intona-gold">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm font-heading mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#stats"
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
        >
          <span className="text-xs font-heading tracking-widest uppercase">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
