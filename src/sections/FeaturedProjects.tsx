import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Calendar, Banknote } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

const projects = [
  {
    name: 'Ngong Park',
    category: 'Residential',
    location: 'Ngong, Kenya',
    year: '2023',
    value: '$12M',
    image: '/images/project-ngong-park.jpg',
    description: 'Luxury apartment complex with 120 units, swimming pool, and modern amenities.',
  },
  {
    name: 'Ole Moran Heights',
    category: 'Residential',
    location: 'Nairobi, Kenya',
    year: '2024',
    value: '$28M',
    image: '/images/project-ole-moran.jpg',
    description: 'Premium high-rise residential tower redefining urban living in Nairobi.',
  },
  {
    name: "Dan & Son's Apartments",
    category: 'Commercial',
    location: 'Mombasa, Kenya',
    year: '2023',
    value: '$8M',
    image: '/images/project-dan-sons.jpg',
    description: 'Modern commercial complex with retail spaces and corporate offices.',
  },
  {
    name: 'Silver Stone Estate',
    category: 'Residential',
    location: 'Kiambu, Kenya',
    year: '2022',
    value: '$15M',
    image: '/images/project-silver-stone.jpg',
    description: 'Gated community of 45 luxury townhouses with premium finishes.',
  },
  {
    name: 'Breeze View Park',
    category: 'Residential',
    location: 'Machakos, Kenya',
    year: '2024',
    value: '$18M',
    image: '/images/project-breeze-view.jpg',
    description: 'Eco-friendly residential development with green spaces and solar power.',
  },
  {
    name: 'Eastern Bypass Highway',
    category: 'Infrastructure',
    location: 'Nairobi, Kenya',
    year: '2023',
    value: '$45M',
    image: '/images/project-road-infra.jpg',
    description: 'Major road infrastructure project improving connectivity across the region.',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="section-padding section-padding-y bg-intona-cream">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <div>
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-intona-gold font-heading font-semibold text-sm tracking-wide uppercase mb-4">
              <div className="w-8 h-0.5 bg-intona-gold" />
              Our Portfolio
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-intona-charcoal leading-tight">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.2}>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-intona-gold font-heading font-semibold
                     hover:gap-4 transition-all duration-300 group"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm
                       border border-intona-charcoal/5 hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-intona-charcoal/80 via-intona-charcoal/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-intona-gold text-white text-xs font-heading font-semibold 
                                 px-3 py-1.5 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-intona-charcoal/80 flex items-center justify-center
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to="/projects"
                    className="bg-intona-gold text-white font-heading font-semibold px-6 py-3
                             rounded-xl flex items-center gap-2 hover:bg-amber-600 transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-intona-charcoal mb-2
                             group-hover:text-intona-gold transition-colors">
                  {project.name}
                </h3>
                <p className="text-intona-charcoal/60 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-intona-charcoal/50">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <Banknote className="w-3 h-3" />
                    {project.value}
                  </span>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
