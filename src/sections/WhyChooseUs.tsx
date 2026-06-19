import { Shield, Zap, Clock, Lightbulb, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

const pillars = [
  {
    icon: Shield,
    title: 'Uncompromising Quality',
    description: 'Every project meets international construction standards. We use premium materials and rigorous quality control processes.',
    features: ['ISO Certified Processes', 'Premium Materials', 'Quality Inspections'],
  },
  {
    icon: Zap,
    title: 'Speed & Efficiency',
    description: 'Our streamlined project management ensures timely delivery without compromising on quality or safety.',
    features: ['On-Time Delivery', 'Efficient Workflows', 'Modern Equipment'],
  },
  {
    icon: Clock,
    title: 'Safety First',
    description: 'Zero-compromise safety protocols protect our workers, clients, and communities on every job site.',
    features: ['Zero Incident Goal', 'Regular Training', 'Full Compliance'],
  },
  {
    icon: Lightbulb,
    title: 'Innovation Driven',
    description: 'We embrace cutting-edge construction technologies and sustainable building practices for the future.',
    features: ['Green Building', 'Smart Technology', 'Sustainable Design'],
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding section-padding-y bg-intona-cream relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div>
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-intona-gold font-heading font-semibold text-sm tracking-wide uppercase mb-4">
              <div className="w-8 h-0.5 bg-intona-gold" />
              Why Choose Us
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-intona-charcoal mb-6 leading-tight">
              The Intona<br />
              <span className="text-gradient">Difference</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-intona-charcoal/70 text-lg leading-relaxed mb-8">
              We don't just construct buildings — we create lasting partnerships built on trust, 
              transparency, and exceptional results. Here's what sets us apart from the competition.
            </p>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={0.3}>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '100%', label: 'Project Completion Rate' },
                { value: '50+', label: 'Expert Engineers' },
                { value: '24/7', label: 'Site Monitoring' },
                { value: '5-Star', label: 'Average Rating' },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-intona-charcoal/5">
                  <div className="text-2xl font-heading font-black text-intona-gold">{stat.value}</div>
                  <div className="text-sm text-intona-charcoal/60 font-heading mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right - Pillars */}
        <div className="space-y-5">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={i} delay={i * 0.15} direction="right">
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-intona-charcoal/5
                         hover:shadow-lg hover:border-intona-gold/20 transition-all duration-500"
              >
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-xl bg-intona-gold/10 flex items-center justify-center
                                flex-shrink-0 group-hover:bg-intona-gold group-hover:scale-110
                                transition-all duration-300">
                    <pillar.icon className="w-7 h-7 text-intona-gold group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-heading font-bold text-intona-charcoal mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-intona-charcoal/60 text-sm leading-relaxed mb-3">
                      {pillar.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pillar.features.map((feature, j) => (
                        <span key={j} className="inline-flex items-center gap-1 text-xs font-heading
                                                 text-intona-gold bg-intona-gold/10 rounded-full px-3 py-1">
                          <CheckCircle className="w-3 h-3" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
