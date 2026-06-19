import { Link } from 'react-router-dom'
import { ArrowRight, HardHat, Home, Building2, Route, ClipboardList, Paintbrush } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

const services = [
  {
    icon: HardHat,
    title: 'Civil Engineering',
    description: 'Foundation works, structural engineering, concrete solutions, and large-scale infrastructure projects built to international standards.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'Luxury apartments, family homes, gated communities, and residential estates crafted with precision and care.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Building2,
    title: 'Commercial Buildings',
    description: 'Office complexes, shopping centers, hotels, and mixed-use developments that define modern African skylines.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Route,
    title: 'Road Infrastructure',
    description: 'Highway construction, bridge engineering, urban roads, and drainage systems connecting communities.',
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: ClipboardList,
    title: 'Project Management',
    description: 'End-to-end project delivery from planning to handover, ensuring on-time, on-budget excellence.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Paintbrush,
    title: 'Renovation & Fit-Out',
    description: 'Transform existing spaces with modern upgrades, interior fit-outs, and comprehensive renovations.',
    color: 'from-cyan-500 to-sky-600',
  },
]

export default function Services() {
  return (
    <section className="section-padding section-padding-y bg-intona-charcoal relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-intona-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-intona-gold rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-intona-gold font-heading font-semibold text-sm tracking-wide uppercase mb-4">
              <div className="w-8 h-0.5 bg-intona-gold" />
              Our Services
              <div className="w-8 h-0.5 bg-intona-gold" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white mb-6">
              What We <span className="text-gradient">Build</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/60 text-lg leading-relaxed">
              From concept to completion, we offer comprehensive construction services 
              tailored to meet the unique needs of every project.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8
                         hover:bg-white/10 hover:border-intona-gold/30 transition-all duration-500
                         h-full flex flex-col"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} 
                              flex items-center justify-center mb-6 group-hover:scale-110 
                              transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/50 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-intona-gold font-heading font-semibold text-sm
                           group-hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-intona-gold/5 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.6}>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-intona-gold hover:bg-amber-600
                       text-white px-8 py-4 rounded-xl font-heading font-semibold
                       transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
