import { useState } from 'react'
import { MapPin, Calendar, Banknote, ArrowRight, Filter } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

const categories = ['All', 'Residential', 'Commercial', 'Infrastructure', 'Renovation']

const projects = [
  {
    name: 'Ngong Park',
    category: 'Residential',
    location: 'Ngong, Kenya',
    year: '2023',
    value: '$12M',
    image: '/images/project-ngong-park.jpg',
    description: 'Luxury apartment complex with 120 units, swimming pool, gym, and landscaped gardens. A landmark residential development in Ngong.',
  },
  {
    name: 'Ole Moran Heights',
    category: 'Residential',
    location: 'Nairobi, Kenya',
    year: '2024',
    value: '$28M',
    image: '/images/project-ole-moran.jpg',
    description: 'Premium 25-story high-rise residential tower offering panoramic city views and world-class amenities in the heart of Nairobi.',
  },
  {
    name: "Dan & Son's Apartments",
    category: 'Commercial',
    location: 'Mombasa, Kenya',
    year: '2023',
    value: '$8M',
    image: '/images/project-dan-sons.jpg',
    description: 'Modern commercial complex featuring retail spaces on the ground floor and corporate offices above, revitalizing the Mombasa business district.',
  },
  {
    name: 'Silver Stone Estate',
    category: 'Residential',
    location: 'Kiambu, Kenya',
    year: '2022',
    value: '$15M',
    image: '/images/project-silver-stone.jpg',
    description: 'Exclusive gated community of 45 luxury townhouses with premium finishes, private gardens, and 24/7 security.',
  },
  {
    name: 'Breeze View Park',
    category: 'Residential',
    location: 'Machakos, Kenya',
    year: '2024',
    value: '$18M',
    image: '/images/project-breeze-view.jpg',
    description: 'Eco-friendly residential development featuring green spaces, solar power integration, and sustainable building practices.',
  },
  {
    name: 'Eastern Bypass Highway',
    category: 'Infrastructure',
    location: 'Nairobi, Kenya',
    year: '2023',
    value: '$45M',
    image: '/images/project-road-infra.jpg',
    description: 'Major 45km road infrastructure project improving connectivity between Nairobi and eastern satellite towns.',
  },
  {
    name: 'Coastal Business Hub',
    category: 'Commercial',
    location: 'Mombasa, Kenya',
    year: '2024',
    value: '$22M',
    image: '/images/project-mall.jpg',
    description: 'Mixed-use commercial development with retail mall, office tower, and conference facilities serving the coastal region.',
  },
  {
    name: 'Riverside Bridge',
    category: 'Infrastructure',
    location: 'Kisumu, Kenya',
    year: '2022',
    value: '$35M',
    image: '/images/project-bridge.jpg',
    description: 'Landmark bridge construction spanning Lake Victoria inlet, improving regional transportation links.',
  },
  {
    name: 'Heritage House Renovation',
    category: 'Renovation',
    location: 'Nairobi, Kenya',
    year: '2023',
    value: '$3M',
    image: '/images/project-renovation.jpg',
    description: 'Complete transformation of a historic Nairobi residence into a modern luxury home while preserving its colonial charm.',
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

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
                Our Work
                <div className="w-8 h-0.5 bg-intona-gold" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white mb-6">
                Project <span className="text-gradient">Portfolio</span>
              </h1>
              <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                Explore our diverse portfolio of completed projects spanning residential, 
                commercial, and infrastructure developments across East Africa.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section-padding section-padding-y bg-intona-cream">
        {/* Filter Tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <Filter className="w-5 h-5 text-intona-charcoal/40 mr-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl font-heading font-semibold text-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-intona-gold text-white shadow-lg shadow-amber-500/25'
                    : 'bg-white text-intona-charcoal/70 hover:bg-intona-charcoal/5 border border-intona-charcoal/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm
                           border border-intona-charcoal/5 hover:shadow-xl transition-all duration-500 h-full flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-intona-charcoal/80 via-intona-charcoal/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="bg-intona-gold text-white text-xs font-heading font-semibold px-3 py-1.5 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-intona-charcoal/80 flex items-center justify-center
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-intona-gold text-white font-heading font-semibold px-6 py-3
                                     rounded-xl flex items-center gap-2">
                        View Project
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-heading font-bold text-intona-charcoal mb-2
                                 group-hover:text-intona-gold transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-intona-charcoal/60 text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs text-intona-charcoal/50 pt-4 border-t border-intona-charcoal/5">
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  )
}
