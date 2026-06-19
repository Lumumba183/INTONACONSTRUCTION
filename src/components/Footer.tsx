import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

const services = [
  { name: 'Civil Engineering', path: '/services' },
  { name: 'Residential Construction', path: '/services' },
  { name: 'Commercial Buildings', path: '/services' },
  { name: 'Road Infrastructure', path: '/services' },
  { name: 'Project Management', path: '/services' },
  { name: 'Renovation & Fit-Out', path: '/services' },
]

export default function Footer() {
  return (
    <footer className="bg-intona-charcoal text-white">
      {/* Main Footer */}
      <div className="section-padding section-padding-y">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="h-14 w-auto">
                <img
                  src="/images/intona-logo.jpg"
                  alt="Intona Construction"
                  className="h-full w-auto rounded-lg object-contain bg-white"
                />
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Engineering Excellence. African Pride. Building Africa's future with 
              precision, innovation, and unwavering commitment to quality since 2009.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center
                           hover:bg-intona-gold transition-colors duration-300"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-intona-gold transition-colors duration-300
                             text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 
                                          group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i}>
                  <Link
                    to={service.path}
                    className="text-white/60 hover:text-intona-gold transition-colors duration-300
                             text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 
                                          group-hover:ml-0 transition-all duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+254202212454"
                  className="text-white/60 hover:text-intona-gold transition-colors duration-300
                           text-sm flex items-start gap-3"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-intona-gold" />
                  <span>+254 202 212 454</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+254739082001"
                  className="text-white/60 hover:text-intona-gold transition-colors duration-300
                           text-sm flex items-start gap-3"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-intona-gold" />
                  <span>+254 739 082 001</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@intonaconstruction.co.ke"
                  className="text-white/60 hover:text-intona-gold transition-colors duration-300
                           text-sm flex items-start gap-3"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-intona-gold" />
                  <span>info@intonaconstruction.co.ke</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-intona-gold flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  Nairobi, Kenya<br />
                  East Africa
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Intona Construction Company. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
