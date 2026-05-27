import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Roster from './components/Roster'
import Stats from './components/Stats'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-ctd-black min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Roster />
      <Stats />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
