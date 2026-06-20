import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import IdeasAccordion from '@/components/IdeasAccordion'

export const metadata = {
  title: 'Ideas — Charlie Leversha',
  description: 'A collection of anecdotes and lessons that guide my thoughts, feelings, and pivotal decisions.',
}

export default function Ideas() {
  return (
    <>
      <Nav />

      <main className="wrap read">

        <header className="ideas-intro">
          <h1 style={{ fontSize: 'clamp(2.4rem, 7vw, 4rem)', marginBottom: '24px' }}>Ideas</h1>
          <p className="lead">Collected wisdom that has guided my thoughts, feelings, and pivotal decisions.</p>
        </header>

        <IdeasAccordion />

      </main>

      <Footer />
    </>
  )
}
