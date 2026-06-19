import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

const testimonials = [
  {
    name: 'James Mwangi',
    role: 'CEO, Azure Holdings',
    image: '/images/team-ceo.jpg',
    text: 'Intona Construction delivered our commercial complex ahead of schedule and under budget. Their attention to detail and commitment to quality is unmatched in the industry. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Sarah Ochieng',
    role: 'Director, Summit Properties',
    image: '/images/team-engineer.jpg',
    text: 'Working with Intona on our residential estate was a seamless experience. Their team handled everything from design to completion with professionalism. The quality of work exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'David Kimani',
    role: 'Chairman, Metro Investments',
    image: '/images/team-architect.jpg',
    text: 'We have partnered with Intona on multiple projects over the years. Their reliability, transparency, and exceptional craftsmanship make them our go-to construction partner in East Africa.',
    rating: 5,
  },
  {
    name: 'Grace Wanjiku',
    role: 'Founder, GreenSpace Developments',
    image: '/images/team-pm.jpg',
    text: 'The Intona team brought our vision of sustainable housing to life. Their innovative approach to eco-friendly construction set a new standard in the region. Truly world-class service.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="section-padding section-padding-y bg-intona-charcoal relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] 
                      bg-intona-gold rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-intona-gold font-heading font-semibold text-sm tracking-wide uppercase mb-4">
              <div className="w-8 h-0.5 bg-intona-gold" />
              Testimonials
              <div className="w-8 h-0.5 bg-intona-gold" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Testimonial Carousel */}
        <ScrollReveal delay={0.2}>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12"
              >
                <Quote className="w-12 h-12 text-intona-gold/30 mb-6" />
                
                <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 font-body">
                  "{testimonials[current].text}"
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-intona-gold"
                    />
                    <div>
                      <div className="text-white font-heading font-bold">
                        {testimonials[current].name}
                      </div>
                      <div className="text-white/50 text-sm">
                        {testimonials[current].role}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-intona-gold fill-intona-gold" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center
                         text-white hover:bg-white/10 hover:border-intona-gold transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === current
                        ? 'bg-intona-gold w-8'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center
                         text-white hover:bg-white/10 hover:border-intona-gold transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
