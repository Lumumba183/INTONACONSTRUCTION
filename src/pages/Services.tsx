import { HardHat, Home, Building2, Route, ClipboardList, Paintbrush, ArrowRight, CheckCircle, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '@/components/ScrollReveal'

const services = [
  {
    icon: HardHat,
    title: 'Civil Engineering',
    shortDesc: 'Foundation to finish — structural excellence for every project.',
    fullDescription: 'Our civil engineering division handles everything from site preparation and foundation works to complex structural engineering. We specialize in concrete solutions, steel frameworks, earthworks, and large-scale infrastructure projects. Our team of certified engineers ensures every structure meets international building codes and withstands the test of time.',
    features: [
      'Foundation & Substructure Works',
      'Structural Engineering Design',
      'Concrete Supply & Placement',
      'Steel Framework Installation',
      'Earthworks & Excavation',
      'Retaining Wall Construction',
    ],
    color: 'from-amber-500 to-orange-600',
    image: '/images/service-civil.jpg',
  },
  {
    icon: Home,
    title: 'Residential Construction',
    shortDesc: 'Building dream homes and luxury living spaces across East Africa.',
    fullDescription: 'From single-family homes to luxury apartment complexes, our residential construction services deliver living spaces that combine comfort, style, and durability. We work closely with clients to bring their vision to life, ensuring every detail reflects their lifestyle and preferences.',
    features: [
      'Luxury Villas & Family Homes',
      'Apartment Complexes',
      'Gated Communities',
      'Townhouse Developments',
      'Penthouse Construction',
      'Smart Home Integration',
    ],
    color: 'from-emerald-500 to-teal-600',
    image: '/images/project-ngong-park.jpg',
  },
  {
    icon: Building2,
    title: 'Commercial Buildings',
    shortDesc: 'Landmark commercial spaces that drive business success.',
    fullDescription: 'We construct commercial properties that make a statement. From office towers and retail centers to hotels and mixed-use developments, our commercial construction services create spaces that attract tenants, impress visitors, and maximize returns for investors.',
    features: [
      'Office Buildings & Towers',
      'Shopping Centers & Malls',
      'Hotels & Hospitality',
      'Mixed-Use Developments',
      'Industrial Warehouses',
      'Medical Facilities',
    ],
    color: 'from-blue-500 to-indigo-600',
    image: '/images/project-dan-sons.jpg',
  },
  {
    icon: Route,
    title: 'Road Infrastructure',
    shortDesc: 'Connecting communities with world-class road networks.',
    fullDescription: 'Our infrastructure division specializes in highway construction, urban road networks, bridges, and drainage systems. We use modern equipment and proven methodologies to deliver road infrastructure that improves connectivity and drives economic development.',
    features: [
      'Highway & Expressway Construction',
      'Urban Road Networks',
      'Bridge & Flyover Engineering',
      'Drainage Systems',
      'Road Rehabilitation',
      'Parking Facilities',
    ],
    color: 'from-rose-500 to-pink-600',
    image: '/images/project-road-infra.jpg',
  },
  {
    icon: ClipboardList,
    title: 'Project Management',
    shortDesc: 'End-to-end expertise ensuring on-time, on-budget delivery.',
    fullDescription: 'Our project management services provide comprehensive oversight from initial planning through final handover. We coordinate all aspects of construction — scheduling, budgeting, quality control, safety management, and stakeholder communication — to ensure seamless project delivery.',
    features: [
      'Project Planning & Scheduling',
      'Budget Management',
      'Quality Assurance & Control',
      'Safety Management',
      'Stakeholder Communication',
      'Risk Assessment & Mitigation',
    ],
    color: 'from-violet-500 to-purple-600',
    image: '/images/project-ole-moran.jpg',
  },
  {
    icon: Paintbrush,
    title: 'Renovation & Fit-Out',
    shortDesc: 'Transforming spaces with modern upgrades and premium finishes.',
    fullDescription: 'Whether upgrading an existing structure or fitting out a new space, our renovation services breathe new life into buildings. We handle everything from structural modifications to interior finishes, delivering transformations that exceed expectations.',
    features: [
      'Building Renovations',
      'Interior Fit-Outs',
      'Facade Upgrades',
      'Space Optimization',
      'MEP Upgrades',
      'Landscaping & Exteriors',
    ],
    color: 'from-cyan-500 to-sky-600',
    image: '/images/project-renovation.jpg',
  },
]

const processSteps = [
  { step: '01', title: 'Consultation', description: 'We discuss your vision, requirements, and budget to understand your project goals.' },
  { step: '02', title: 'Planning', description: 'Our team develops detailed plans, timelines, and cost estimates for your approval.' },
  { step: '03', title: 'Design', description: 'Architectural and engineering designs are created and refined to match your vision.' },
  { step: '04', title: 'Construction', description: 'Expert craftsmen bring the designs to life with precision and quality materials.' },
  { step: '05', title: 'Quality Check', description: 'Rigorous inspections ensure every detail meets our high standards.' },
  { step: '06', title: 'Handover', description: 'We deliver your completed project with documentation and warranty support.' },
]

export default function ServicesPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative bg-intona-charcoal py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-intona-gold rounded-full blur-3xl" />
        </div>
        <div className="section-padding relative">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 text-intona-gold font-heading font-semibold text-sm tracking-wide uppercase mb-4">
                <div className="w-8 h-0.5 bg-intona-gold" />
                What We Do
                <div className="w-8 h-0.5 bg-intona-gold" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white mb-6">
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                Comprehensive construction solutions tailored to your needs. 
                From concept to completion, we've got you covered.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding section-padding-y bg-intona-cream">
        <div className="space-y-20">
          {services.map((service, i) => (
            <ScrollReveal key={i}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[300px] lg:h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-intona-charcoal/60 to-transparent" />
                    <div className={`absolute bottom-6 left-6 w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} 
                                  flex items-center justify-center shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-intona-charcoal mb-4">
                    {service.title}
                  </h2>
                  <p className="text-intona-charcoal/70 text-lg leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                  <p className="text-intona-charcoal/60 leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-intona-gold flex-shrink-0" />
                        <span className="text-intona-charcoal/70 text-sm font-heading">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-intona-gold hover:bg-amber-600
                             text-white font-heading font-semibold px-6 py-3 rounded-xl
                             transition-all duration-300 hover:shadow-lg"
                  >
                    <Phone className="w-4 h-4" />
                    Request a Quote
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-padding section-padding-y bg-intona-charcoal">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-intona-gold font-heading font-semibold text-sm tracking-wide uppercase mb-4">
              <div className="w-8 h-0.5 bg-intona-gold" />
              Our Process
              <div className="w-8 h-0.5 bg-intona-gold" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white">
              How We <span className="text-gradient">Work</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8
                         hover:bg-white/10 hover:border-intona-gold/30 transition-all duration-500"
              >
                <div className="text-5xl font-heading font-black text-intona-gold/20 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/50 leading-relaxed">{step.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-16 bg-intona-cream">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-intona-gold to-amber-500 rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Let's discuss how Intona Construction can bring your vision to life. 
              Contact us today for a free consultation and detailed quote.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-intona-gold font-heading font-bold
                       px-8 py-4 rounded-xl hover:bg-intona-cream transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}
