import { Award, Target, Eye, Heart, CheckCircle, Calendar, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

const values = [
  { icon: Heart, title: 'Integrity', description: 'We operate with complete honesty and transparency in all our dealings.' },
  { icon: Target, title: 'Excellence', description: 'We pursue the highest standards in every aspect of our work.' },
  { icon: Users, title: 'Collaboration', description: 'We believe in the power of teamwork and partnership.' },
  { icon: Award, title: 'Innovation', description: 'We embrace new technologies and methods to deliver better results.' },
]

const milestones = [
  { year: '2009', title: 'Company Founded', description: 'Intona Construction was established in Nairobi, Kenya.' },
  { year: '2012', title: 'First Major Project', description: 'Completed our first large-scale commercial building project.' },
  { year: '2015', title: 'Regional Expansion', description: 'Expanded operations to Uganda and Tanzania.' },
  { year: '2018', title: 'ISO Certification', description: 'Achieved ISO 9001 certification for quality management.' },
  { year: '2020', title: '100th Project', description: 'Celebrated the completion of our 100th construction project.' },
  { year: '2023', title: 'Industry Leader', description: 'Recognized as a top 10 construction company in East Africa.' },
]

const team = [
  { name: 'Michael Oduor', role: 'Chief Executive Officer', image: '/images/team-ceo.jpg' },
  { name: 'Amina Hassan', role: 'Head of Engineering', image: '/images/team-engineer.jpg' },
  { name: 'Robert Mwangi', role: 'Lead Architect', image: '/images/team-architect.jpg' },
  { name: 'Joyce Wambui', role: 'Project Director', image: '/images/team-pm.jpg' },
]

const certifications = [
  'ISO 9001:2015 Quality Management',
  'ISO 14001:2015 Environmental Management',
  'OSHA Certified Safety Standards',
  'NCA Registered Contractor',
  'KEBS Quality Certification',
  'Best Construction Company 2023 - EA Awards',
]

export default function About() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-intona-charcoal py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-intona-gold rounded-full blur-3xl" />
        </div>
        <div className="section-padding relative">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 text-intona-gold font-heading font-semibold text-sm tracking-wide uppercase mb-4">
                <div className="w-8 h-0.5 bg-intona-gold" />
                About Us
                <div className="w-8 h-0.5 bg-intona-gold" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white mb-6">
                Our <span className="text-gradient">Story</span>
              </h1>
              <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                From humble beginnings to becoming one of East Africa's most trusted 
                construction firms — discover the journey that defines Intona Construction.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding section-padding-y bg-intona-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <img
                src="/images/about-team.jpg"
                alt="Intona Team"
                className="rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-intona-gold rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-heading font-black text-white">15+</div>
                <div className="text-white/80 text-sm font-heading">Years Experience</div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-intona-charcoal mb-8">
                Mission & <span className="text-gradient">Vision</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-intona-charcoal/5 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-intona-gold/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-intona-gold" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-intona-charcoal">Our Mission</h3>
                </div>
                <p className="text-intona-charcoal/70 leading-relaxed">
                  To deliver world-class construction solutions that transform communities, 
                  drive economic growth, and set new standards of excellence across Africa 
                  through innovation, integrity, and unwavering commitment to quality.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-intona-charcoal/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-intona-gold/10 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-intona-gold" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-intona-charcoal">Our Vision</h3>
                </div>
                <p className="text-intona-charcoal/70 leading-relaxed">
                  To be Africa's most trusted and innovative construction partner, 
                  recognized for transforming skylines, empowering communities, and 
                  building a sustainable future for generations to come.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding section-padding-y bg-intona-charcoal">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-intona-gold font-heading font-semibold text-sm tracking-wide uppercase mb-4">
              <div className="w-8 h-0.5 bg-intona-gold" />
              What Drives Us
              <div className="w-8 h-0.5 bg-intona-gold" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white">
              Our Core <span className="text-gradient">Values</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8
                         hover:bg-white/10 hover:border-intona-gold/30 transition-all duration-500 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-intona-gold/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-intona-gold" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/50 leading-relaxed">{value.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding section-padding-y bg-intona-cream">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-intona-gold font-heading font-semibold text-sm tracking-wide uppercase mb-4">
              <div className="w-8 h-0.5 bg-intona-gold" />
              Our Journey
              <div className="w-8 h-0.5 bg-intona-gold" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-intona-charcoal">
              Company <span className="text-gradient">Timeline</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-intona-gold flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-intona-gold/20 mt-2" />
                  )}
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-intona-charcoal/5 flex-grow">
                  <div className="text-intona-gold font-heading font-bold text-lg mb-1">
                    {milestone.year}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-intona-charcoal mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-intona-charcoal/60">{milestone.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding section-padding-y bg-white">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-intona-gold font-heading font-semibold text-sm tracking-wide uppercase mb-4">
              <div className="w-8 h-0.5 bg-intona-gold" />
              Our People
              <div className="w-8 h-0.5 bg-intona-gold" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-intona-charcoal">
              Leadership <span className="text-gradient">Team</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group text-center"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-intona-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-heading font-bold text-intona-charcoal">{member.name}</h3>
                <p className="text-intona-gold font-heading font-medium text-sm">{member.role}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding section-padding-y bg-intona-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <div className="inline-flex items-center gap-2 text-intona-gold font-heading font-semibold text-sm tracking-wide uppercase mb-4">
                <div className="w-8 h-0.5 bg-intona-gold" />
                Recognition
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-white mb-6">
                Certifications & <span className="text-gradient">Awards</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Our commitment to excellence has been recognized by industry bodies 
                across East Africa. These certifications reflect our dedication to 
                quality, safety, and environmental responsibility.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4
                              hover:bg-white/10 hover:border-intona-gold/30 transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-intona-gold flex-shrink-0" />
                  <span className="text-white/80 font-heading font-medium text-sm">{cert}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
