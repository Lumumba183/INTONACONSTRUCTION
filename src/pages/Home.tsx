import Hero from '@/sections/Hero'
import StatsBar from '@/sections/StatsBar'
import AboutSnippet from '@/sections/AboutSnippet'
import Services from '@/sections/Services'
import WhyChooseUs from '@/sections/WhyChooseUs'
import FeaturedProjects from '@/sections/FeaturedProjects'
import Testimonials from '@/sections/Testimonials'
import Partners from '@/sections/Partners'
import CTABanner from '@/sections/CTABanner'

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <AboutSnippet />
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <Partners />
      <CTABanner />
    </main>
  )
}
