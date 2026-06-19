import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

export default function AboutSnippet() {
  return (
    <section className="section-padding section-padding-y bg-intona-cream">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-team.jpg"
                alt="Intona Construction Team"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-intona-charcoal/40 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="absolute -bottom-6 -right-4 lg:right-6 glass-dark rounded-xl p-5
                       shadow-xl"
            >
              <div className="text-intona-gold font-heading font-black text-3xl">15+</div>
              <div className="text-white/80 text-sm font-heading">Years of Excellence</div>
            </motion.div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-intona-gold/30 rounded-xl -z-10" />
          </div>
        </ScrollReveal>

        {/* Content */}
        <div>
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-intona-gold font-heading font-semibold text-sm tracking-wide uppercase mb-4">
              <div className="w-8 h-0.5 bg-intona-gold" />
              About Intona
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-intona-charcoal mb-6 leading-tight">
              Engineering Excellence.<br />
              <span className="text-gradient">African Pride.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-intona-charcoal/70 text-lg leading-relaxed mb-6">
              Founded in 2009, Intona Construction Company has grown from a small local builder 
              to one of East Africa's most trusted construction firms. We specialize in delivering 
              world-class residential, commercial, and infrastructure projects that stand the test 
              of time.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-intona-charcoal/60 leading-relaxed mb-8">
              Our team of experienced engineers, architects, and project managers brings together 
              international expertise with deep local knowledge. We don't just build structures — 
              we create landmarks that transform communities and drive economic growth across the 
              African continent.
            </p>
          </ScrollReveal>

          {/* Feature points */}
          <ScrollReveal delay={0.4}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: Award, label: 'Award Winning' },
                { icon: Users, label: 'Expert Team' },
                { icon: Target, label: 'Precision Driven' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-intona-gold/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-intona-gold" />
                  </div>
                  <span className="font-heading font-semibold text-sm text-intona-charcoal">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-intona-gold font-heading font-semibold
                       hover:gap-4 transition-all duration-300 group"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
