import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Work — Charlie Leversha',
  description: "What I've made, and what I'm making.",
}

export default function Work() {
  return (
    <>
      <Nav />

      <main className="wrap read">

        <header className="hero">
          <h1>Work</h1>
          <p className="lead">What I&rsquo;ve made, and what I&rsquo;m making.</p>
        </header>

        {/* ── Product, growth ── */}
        <section className="section">
          <p className="section__label">Product, growth</p>

          <article className="entry entry--exp">
            {/* Copy images/logos/ from your old repo into public/images/logos/ */}
            <img className="entry__logo" src="/images/logos/wavoto.png" alt="" />
            <div className="entry__content">
              <div className="entry__head">
                <h2 className="entry__title">Product Manager Intern</h2>
                <span className="entry__meta">May 2026 &ndash; Present</span>
              </div>
              <p className="entry__company">Wavoto &middot; Internship</p>
              <div className="entry__body prose">
                <p>Community commerce platforms team.</p>
              </div>
            </div>
          </article>

          <article className="entry entry--exp">
            <img className="entry__logo" src="/images/logos/v1.png" alt="" />
            <div className="entry__content">
              <div className="entry__head">
                <h2 className="entry__title">Marketing</h2>
                <span className="entry__meta">2025 &ndash; Present</span>
              </div>
              <p className="entry__company">V1 @ Michigan</p>
              <div className="entry__body prose">
                <p>Launched Product Spotlight, a semester-long campaign of ghostwritten LinkedIn posts profiling student builders across UMich&rsquo;s startup community, generating 80,000+ impressions.</p>
              </div>
            </div>
          </article>
        </section>

        {/* ── Film ── */}
        <section className="section">
          <p className="section__label">Film</p>

          <article className="entry">
            <div className="entry__head">
              <h2 className="entry__title">I Fall to Pieces</h2>
              <span className="entry__meta">Melbourne &middot; 2024 &middot; in post</span>
            </div>
            <div className="entry__body prose">
              <p>A French woman on the eve of her 60th birthday has to reevaluate her life after her Australian husband files for divorce.</p>
              <p className="entry__lesson">Currently in post-production.</p>
            </div>
          </article>

          <article className="entry">
            <div className="entry__head">
              <h2 className="entry__title">
                <a href="https://vimeo.com/1099638155?fl=pl&fe=sh" target="_blank" rel="noopener noreferrer">
                  Speech
                </a>
              </h2>
              <span className="entry__meta">Short &middot; 2022</span>
            </div>
            <div className="entry__body prose">
              <p>Year 6 student Lloyd receives an assignment to read a speech from a historical figure to his class. He then learns that it was written by a dictator.</p>
            </div>
          </article>
        </section>

      </main>

      <Footer />
    </>
  )
}
