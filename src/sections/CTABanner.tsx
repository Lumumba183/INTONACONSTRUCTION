import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-intona-gold via-amber-500 to-intona-gold section-padding py-16 lg:py-20">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               }}
          />
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white mb-4">
                Ready to Build?
              </h2>
              <p className="text-white/80 text-lg max-w-xl">
                Let's turn your vision into reality. Contact us today for a free consultation 
                and quote on your next construction project.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-intona-gold
                         font-heading font-bold px-8 py-4 rounded-xl hover:bg-intona-cream
                         transition-all duration-300 hover:shadow-lg"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+254202212454"
                className="inline-flex items-center justify-center gap-2 bg-intona-charcoal
                         text-white font-heading font-bold px-8 py-4 rounded-xl
                         hover:bg-intona-charcoal/90 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
