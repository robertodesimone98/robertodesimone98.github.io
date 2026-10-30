import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AvatarLink from '../components/AvatarLink'
import ProjectsSection from '../components/ProjectsSection'
import AboutSection from '../components/AboutSection'
import ClientsSection from '../components/ClientsSection'
import ExperienceSection from '../components/ExperienceSection'
import Footer from '../components/Footer'
import rawbLogo from '../assets/rawb-logo.jpg'
import { gamingContact } from '../data/gaming/contact'

// TEMPORARY: stands in for ContactSection so the nav scroll and the active-section
// highlight can be tested now. Remove it when the real component is added.
function PlaceholderSection({ id, label }) {
  return (
    <section
      id={id}
      style={{
        minHeight: '70vh',
        display: 'grid',
        placeItems: 'center',
        borderTop: '0.5px solid var(--border-default)',
        color: 'var(--text-muted)',
        fontSize: 14,
      }}
    >
      {label} (placeholder)
    </section>
  )
}

// Zone is already validated by ZoneLayout.
function Home() {
  const { zone } = useParams()
  const instagram = gamingContact.find((c) => c.type === 'instagram')

  return (
    <>
      <Header zone={zone} />
      <main>
        <Hero key={zone} zone={zone} />
        {zone === 'gaming' && instagram && (
          <AvatarLink href={instagram.href} label={`${instagram.label} @rawb.start`} src={rawbLogo} />
        )}
        <ProjectsSection key={`projects-${zone}`} zone={zone} />
        <AboutSection key={`about-${zone}`} zone={zone} />
        <ClientsSection key={`clients-${zone}`} zone={zone} />
        <ExperienceSection key={`experience-${zone}`} />
        <PlaceholderSection id="contact" label="Contact" />
      </main>
      <Footer />
    </>
  )
}

export default Home
