import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

// TEMPORARY: stands in for ProjectsSection / AboutSection / ContactSection
// so the nav scroll and the active-section highlight can be tested now.
// Remove each one as the real component is added.
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

  return (
    <>
      <Header zone={zone} />
      <main>
        <Hero key={zone} zone={zone} />
        <PlaceholderSection id="projects" label="Projects" />
        <PlaceholderSection id="about" label="About + Experience" />
        <PlaceholderSection id="contact" label="Contact" />
      </main>
      <Footer />
    </>
  )
}

export default Home
