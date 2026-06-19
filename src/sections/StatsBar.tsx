import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, Calendar, Globe, ThumbsUp } from 'lucide-react'

interface StatItemProps {
  icon: React.ElementType
  value: number
  suffix: string
  label: string
  delay: number
}

function StatItem({ icon: Icon, value, suffix, label, delay }: StatItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-4"
    >
      <div className="w-14 h-14 rounded-xl bg-intona-gold/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-7 h-7 text-intona-gold" />
      </div>
      <div>
        <div className="text-3xl lg:text-4xl font-heading font-black text-intona-charcoal">
          {count}{suffix}
        </div>
        <div className="text-sm text-intona-charcoal/60 font-heading font-medium">{label}</div>
      </div>
    </motion.div>
  )
}

export default function StatsBar() {
  const stats = [
    { icon: Building2, value: 500, suffix: '+', label: 'Projects Completed' },
    { icon: Calendar, value: 15, suffix: '+', label: 'Years Experience' },
    { icon: Globe, value: 12, suffix: '', label: 'African Countries' },
    { icon: ThumbsUp, value: 98, suffix: '%', label: 'Client Satisfaction' },
  ]

  return (
    <section id="stats" className="relative bg-intona-cream border-y border-intona-charcoal/5">
      <div className="section-padding py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
