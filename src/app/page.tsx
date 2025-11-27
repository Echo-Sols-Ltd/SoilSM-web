import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import ProblemStatement from '@/components/ProblemStatement'
import Objectives from '@/components/Objectives'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <ProblemStatement />
      <Objectives />
      <Features />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </main>
  )
}

