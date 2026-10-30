import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ContactLinks from '../components/ContactLinks'
import ProjectsSection from '../components/ProjectsSection'
import AboutSection from '../components/AboutSection'
import ClientsSection from '../components/ClientsSection'
import ExperienceSection from '../components/ExperienceSection'
import Footer from '../components/Footer'

// Zone is already validated by ZoneLayout.
function Home() {
  const { zone } = useParams()

  return (
    <>
      <Header zone={zone} />
      <main>
        <Hero key={zone} zone={zone} />
        <ContactLinks key={`contact-${zone}`} zone={zone} />
        <ProjectsSection key={`projects-${zone}`} zone={zone} />
        <AboutSection key={`about-${zone}`} zone={zone} />
        <ClientsSection key={`clients-${zone}`} zone={zone} />
        <ExperienceSection key={`experience-${zone}`} />
      </main>
      <Footer />
    </>
  )
}

export default Home
