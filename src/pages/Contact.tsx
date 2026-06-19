import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    lines: [
      { label: 'Office', value: '+254 202 212 454', href: 'tel:+254202212454' },
      { label: 'Mobile', value: '+254 739 082 001', href: 'tel:+254739082001' },
    ],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: [
      { label: 'General', value: 'info@intonaconstruction.co.ke', href: 'mailto:info@intonaconstruction.co.ke' },
      { label: 'Projects', value: 'projects@intonaconstruction.co.ke', href: 'mailto:projects@intonaconstruction.co.ke' },
    ],
  },
  {
    icon: MapPin,
    title: 'Office',
    lines: [
      { label: 'Address', value: 'Intona Towers, Mombasa Road', href: '#' },
      { label: 'City', value: 'Nairobi, Kenya', href: '#' },
    ],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: [
      { label: 'Weekdays', value: 'Mon - Fri: 8:00 AM - 5:30 PM', href: '#' },
      { label: 'Weekends', value: 'Sat: 9:00 AM - 1:00 PM', href: '#' },
    ],
  },
]

const projectTypes = [
  'Residential Construction',
  'Commercial Building',
  'Road Infrastructure',
  'Renovation & Fit-Out',
  'Industrial Project',
  'Other',
]

const budgetRanges = [
  'Under $50,000',
  '$50,000 - $100,000',
  '$100,000 - $500,000',
  '$500,000 - $1,000,000',
  '$1,000,000 - $5,000,000',
  'Above $5,000,000',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
                Get In Touch
                <div className="w-8 h-0.5 bg-intona-gold" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white mb-6">
                Let's Build <span className="text-gradient">Together</span>
              </h1>
              <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                Ready to start your next project? Contact us today for a free consultation 
                and let's discuss how we can bring your vision to life.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding py-12 bg-intona-cream -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-intona-charcoal/5
                         hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-intona-gold/10 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-intona-gold" />
                </div>
                <h3 className="text-lg font-heading font-bold text-intona-charcoal mb-3">{info.title}</h3>
                <div className="space-y-2">
                  {info.lines.map((line, j) => (
                    <a
                      key={j}
                      href={line.href}
                      className="block text-sm text-intona-charcoal/60 hover:text-intona-gold transition-colors"
                    >
                      <span className="text-intona-charcoal/40">{line.label}:</span>{' '}
                      {line.value}
                    </a>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding section-padding-y bg-intona-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-intona-charcoal/5">
              <h2 className="text-2xl font-heading font-bold text-intona-charcoal mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-intona-charcoal mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-intona-charcoal/60">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-heading font-medium text-intona-charcoal mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-intona-charcoal/15 bg-intona-cream/50
                                 text-intona-charcoal font-body focus:outline-none focus:border-intona-gold
                                 focus:ring-2 focus:ring-intona-gold/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-medium text-intona-charcoal mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-intona-charcoal/15 bg-intona-cream/50
                                 text-intona-charcoal font-body focus:outline-none focus:border-intona-gold
                                 focus:ring-2 focus:ring-intona-gold/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-heading font-medium text-intona-charcoal mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-intona-charcoal/15 bg-intona-cream/50
                                 text-intona-charcoal font-body focus:outline-none focus:border-intona-gold
                                 focus:ring-2 focus:ring-intona-gold/20 transition-all"
                        placeholder="+254 700 000 000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-medium text-intona-charcoal mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-intona-charcoal/15 bg-intona-cream/50
                                 text-intona-charcoal font-body focus:outline-none focus:border-intona-gold
                                 focus:ring-2 focus:ring-intona-gold/20 transition-all"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-heading font-medium text-intona-charcoal mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-intona-charcoal/15 bg-intona-cream/50
                               text-intona-charcoal font-body focus:outline-none focus:border-intona-gold
                               focus:ring-2 focus:ring-intona-gold/20 transition-all"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-heading font-medium text-intona-charcoal mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-intona-charcoal/15 bg-intona-cream/50
                               text-intona-charcoal font-body focus:outline-none focus:border-intona-gold
                               focus:ring-2 focus:ring-intona-gold/20 transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-intona-gold hover:bg-amber-600 text-white font-heading font-bold
                             py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300
                             hover:shadow-lg hover:shadow-amber-500/25"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Map Placeholder */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-intona-charcoal/5 h-[400px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19898849707!2d36.7073080328125!3d-1.3028610999999974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Intona Construction Office Location"
                />
              </div>

              {/* Quick Contact CTA */}
              <div className="bg-intona-charcoal rounded-2xl p-8 text-center">
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  Prefer to Talk Directly?
                </h3>
                <p className="text-white/60 mb-6">
                  Our team is available on WhatsApp for quick responses.
                </p>
                <a
                  href="https://wa.me/254739082001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600
                           text-white font-heading font-bold px-8 py-4 rounded-xl
                           transition-all duration-300 hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
