import { Building2, Landmark, Hotel, Factory, Home, TreePine } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const partners = [
  { name: 'Azure Holdings', icon: Building2 },
  { name: 'Kenya National Highway', icon: Landmark },
  { name: 'Serena Hotels', icon: Hotel },
  { name: 'Bata Kenya', icon: Factory },
  { name: 'Summit Properties', icon: Home },
  { name: 'GreenSpace Dev', icon: TreePine },
  { name: 'Metro Investments', icon: Building2 },
  { name: 'Safaricom', icon: Landmark },
  { name: 'KCB Bank', icon: Landmark },
  { name: 'Equity Group', icon: Building2 },
  { name: 'Cytonn Investments', icon: Home },
  { name: 'Centum Real Estate', icon: Factory },
]

export default function Partners() {
  const doubledPartners = [...partners, ...partners]

  return (
    <section className="py-16 bg-intona-cream overflow-hidden">
      <div className="section-padding mb-10">
        <ScrollReveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-intona-gold font-heading font-semibold text-sm tracking-wide uppercase mb-4">
              <div className="w-8 h-0.5 bg-intona-gold" />
              Trusted By Industry Leaders
              <div className="w-8 h-0.5 bg-intona-gold" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-intona-charcoal">
              Our Partners & Clients
            </h2>
          </div>
        </ScrollReveal>
      </div>

      {/* Scrolling Logo Bar */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-intona-cream to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-intona-cream to-transparent z-10" />
        
        <div className="flex animate-scroll-left">
          {doubledPartners.map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-3 mx-8 py-4"
            >
              <div className="w-12 h-12 rounded-xl bg-intona-charcoal/5 flex items-center justify-center">
                <partner.icon className="w-6 h-6 text-intona-charcoal/40" />
              </div>
              <span className="text-intona-charcoal/50 font-heading font-semibold text-sm whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
