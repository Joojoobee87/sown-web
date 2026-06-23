import './App.css'
import logoDark from './assets/brand/logo-dark.png'
import iconDark from './assets/brand/icon-dark.png'
import iconLight from './assets/brand/icon-light.png'

function Nav() {
  return (
    <nav className="nav">
      <img src={iconDark} alt="Sown" className="nav-icon" />
      <a href="mailto:hello@sowngarden.co.uk" className="nav-link">hello@sowngarden.co.uk</a>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <img src={logoDark} alt="Sown Garden and Home" className="hero-logo" />
        <p className="hero-tagline">Your knowledgeable friend in the garden.</p>
      </div>
    </section>
  )
}

const icons = {
  leaf: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22C12 22 3 17 3 9a9 9 0 0 1 18 0c0 8-9 13-9 13z"/>
      <path d="M12 9v13"/>
    </svg>
  ),
  library: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="9" rx="1"/>
      <rect x="14" y="3" width="7" height="5" rx="1"/>
      <rect x="14" y="12" width="7" height="9" rx="1"/>
      <rect x="3" y="16" width="7" height="5" rx="1"/>
    </svg>
  ),
  calendar: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <path d="M16 2v4M8 2v4M3 10h18"/>
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
    </svg>
  ),
  frost: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v20M2 12h20"/>
      <path d="m4.93 4.93 14.14 14.14M19.07 4.93 4.93 19.07"/>
      <path d="M12 6 9 3M12 6l3-3M12 18l-3 3M12 18l3 3M6 12l-3-3M6 12l-3 3M18 12l3-3M18 12l3 3"/>
    </svg>
  ),
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-label-row">
          <span className="section-label-line" />
          <span className="section-label">About</span>
          <span className="section-label-line" />
        </div>
        <div className="about-grid">
          <div className="about-text">
            <h2>A companion for people who love growing things</h2>
            <p>
              It started with a sketchpad. I bought it specifically to keep track of my plants —
              to stick in the labels, write down the care notes, build a record of everything
              I was growing. I got as far as page one. Life got in the way, and the idea sat waiting.
            </p>
            <p>
              So eventually I stopped waiting and built the app instead.
            </p>
            <p>
              Sown is designed to be the knowledgeable friend by your side in the garden —
              helping you identify what you've got, remember what you've planted, and know
              what to do and when. No botanical Latin required. Just plain, honest guidance
              for real gardeners.
            </p>
          </div>
          <div className="about-features">
            <h3>What Sown does</h3>
            <ul className="feature-list">
              <li>
                <span className="feature-icon">{icons.leaf}</span>
                Scan and identify plants from a photo or tag
              </li>
              <li>
                <span className="feature-icon">{icons.library}</span>
                Build a personal library of everything growing in your garden
              </li>
              <li>
                <span className="feature-icon">{icons.calendar}</span>
                Get seasonal reminders so you never miss a planting window
              </li>
              <li>
                <span className="feature-icon">{icons.frost}</span>
                Receive frost alerts before the temperature drops overnight
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Products() {
  return (
    <section className="section products" id="shop">
      <div className="container">
        <div className="section-label-row">
          <span className="section-label-line" />
          <span className="section-label">Shop</span>
          <span className="section-label-line" />
        </div>
        <div className="products-inner">
          <h2>Sown Garden & Home</h2>
          <p className="products-sub">
            Thoughtfully made things for gardeners — seeds, tools, and home goods
            chosen with care.
          </p>
          <div className="coming-soon-badge">Coming soon</div>
          <p className="products-etsy">
            In the meantime, find us on{' '}
            <a href="https://etsy.com" target="_blank" rel="noopener noreferrer" className="link">
              Etsy
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

function AppSection() {
  return (
    <section className="section app-section" id="app">
      <div className="container">
        <div className="app-inner">
          <div className="app-icon-wrap">
            <img src={iconLight} alt="" className="app-icon" />
          </div>
          <div className="app-text">
            <div className="section-label-row">
              <span className="section-label-line light" />
              <span className="section-label light">The App</span>
              <span className="section-label-line light" />
            </div>
            <h2>The app is coming.</h2>
            <p>
              Sown is a garden companion for iOS — it identifies plants, tracks what
              you're growing, and tells you exactly what to do and when. No jargon.
              No faff. Just the garden knowledge you need, when you need it.
            </p>
            <p>
              We're building it now. If you'd like to be one of our first testers,
              drop your email below and we'll be in touch when we're ready.
            </p>
            <p className="app-cta-label">Get early access</p>
            <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="signup-input"
                aria-label="Email address"
              />
              <button type="submit" className="signup-btn">Join the list</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <img src={iconDark} alt="Sown" className="footer-icon" />
        <div className="footer-links">
          <a href="mailto:hello@sowngarden.co.uk" className="footer-link">hello@sowngarden.co.uk</a>
          <a href="https://instagram.com/sowngarden" target="_blank" rel="noopener noreferrer" className="footer-link">@sowngarden</a>
        </div>
        <p className="footer-perennial">
          We commit 1% of every Sown sale to{' '}
          <a href="https://perennial.org.uk" target="_blank" rel="noopener noreferrer" className="footer-link">
            Perennial
          </a>
          {' '}— supporting people who work in horticulture.
        </p>
        <p className="footer-copy">© {new Date().getFullYear()} Sown Garden & Home</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Products />
        <AppSection />
      </main>
      <Footer />
    </>
  )
}
