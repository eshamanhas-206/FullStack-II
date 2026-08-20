import React from 'react'

function Home() {
  return (
    <div style={styles.page}>

      {/* Hero Banner */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <p style={styles.badge}>WELCOME TO OUR PLATFORM</p>

          <h1 style={styles.heroTitle}>
            Learn. Build. <span style={styles.highlight}>Grow.</span>
          </h1>

          <p style={styles.heroText}>
            Take your skills to the next level with practical courses,
            modern technologies, and hands-on learning.
          </p>

          <div style={styles.heroButtons}>
            <button style={styles.primaryButton}>
              Get Started
            </button>

            <button style={styles.secondaryButton}>
              Explore Courses
            </button>
          </div>
        </div>

        <div style={styles.heroCard}>
          <div style={styles.cardIcon}>🚀</div>
          <h3>Start Learning Today</h3>
          <p>Build real-world skills through practical projects.</p>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <p style={styles.sectionLabel}>WHY CHOOSE US</p>
          <h2>Everything You Need to Succeed</h2>
          <p>
            Learn from structured content and gain practical experience.
          </p>
        </div>

        <div style={styles.features}>
          <div style={styles.featureCard}>
            <div style={styles.icon}>💻</div>
            <h3>Practical Learning</h3>
            <p>
              Learn through real-world examples and hands-on projects.
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.icon}>🎯</div>
            <h3>Focused Courses</h3>
            <p>
              Structured courses designed to help you learn efficiently.
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.icon}>🏆</div>
            <h3>Build Your Career</h3>
            <p>
              Develop skills that help you become industry ready.
            </p>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section style={styles.promo}>
        <div>
          <p style={styles.promoLabel}>SPECIAL OFFER</p>

          <h2 style={styles.promoTitle}>
            Upgrade Your Skills Today
          </h2>

          <p style={styles.promoText}>
            Explore our latest courses and start building your future.
          </p>
        </div>

        <button style={styles.promoButton}>
          Explore Now →
        </button>
      </section>

      {/* Statistics */}
      <section style={styles.statsSection}>
        <div style={styles.stat}>
          <h2>1000+</h2>
          <p>Students</p>
        </div>

        <div style={styles.stat}>
          <h2>50+</h2>
          <p>Courses</p>
        </div>

        <div style={styles.stat}>
          <h2>95%</h2>
          <p>Success Rate</p>
        </div>

        <div style={styles.stat}>
          <h2>24/7</h2>
          <p>Learning Access</p>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Ready to Start Learning?</h2>

        <p>
          Join us and take the next step towards your goals.
        </p>

        <button style={styles.ctaButton}>
          Get Started
        </button>
      </section>

    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    fontFamily: 'Arial, sans-serif',
    color: '#1e293b',
  },

  // Hero
  hero: {
    minHeight: '500px',
    padding: '60px 8%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '50px',
    boxSizing: 'border-box',
    background: 'linear-gradient(135deg, #1d4ed8, #2563eb, #3b82f6)',
    color: 'white',
  },

  heroContent: {
    maxWidth: '650px',
  },

  badge: {
    display: 'inline-block',
    padding: '7px 14px',
    borderRadius: '20px',
    backgroundColor: 'rgba(255,255,255,0.15)',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },

  heroTitle: {
    fontSize: '58px',
    margin: '20px 0',
    lineHeight: '1.1',
  },

  highlight: {
    color: '#facc15',
  },

  heroText: {
    fontSize: '18px',
    lineHeight: '1.7',
    color: '#dbeafe',
    maxWidth: '580px',
  },

  heroButtons: {
    display: 'flex',
    gap: '15px',
    marginTop: '30px',
  },

  primaryButton: {
    padding: '13px 25px',
    border: 'none',
    borderRadius: '7px',
    backgroundColor: '#fff',
    color: '#1d4ed8',
    fontWeight: 'bold',
    cursor: 'pointer',
  },

  secondaryButton: {
    padding: '13px 25px',
    border: '1px solid rgba(255,255,255,0.5)',
    borderRadius: '7px',
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
  },

  heroCard: {
    width: '280px',
    padding: '35px',
    borderRadius: '15px',
    backgroundColor: 'rgba(255,255,255,0.12)',
    border: '1px solid rgba(255,255,255,0.2)',
    textAlign: 'center',
    boxSizing: 'border-box',
  },

  cardIcon: {
    fontSize: '55px',
    marginBottom: '15px',
  },

  // General section
  section: {
    padding: '80px 8%',
  },

  sectionHeader: {
    textAlign: 'center',
    maxWidth: '650px',
    margin: '0 auto 45px',
  },

  sectionLabel: {
    color: '#2563eb',
    fontSize: '13px',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },

  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '25px',
  },

  featureCard: {
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    textAlign: 'center',
    boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
  },

  icon: {
    fontSize: '40px',
    marginBottom: '10px',
  },

  // Promo banner
  promo: {
    margin: '0 8% 70px',
    padding: '45px',
    borderRadius: '15px',
    backgroundColor: '#0f172a',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '30px',
  },

  promoLabel: {
    color: '#60a5fa',
    fontWeight: 'bold',
    fontSize: '13px',
  },

  promoTitle: {
    fontSize: '32px',
    margin: '10px 0',
  },

  promoText: {
    color: '#cbd5e1',
  },

  promoButton: {
    padding: '14px 25px',
    border: 'none',
    borderRadius: '7px',
    backgroundColor: '#2563eb',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },

  // Stats
  statsSection: {
    padding: '60px 8%',
    backgroundColor: '#eff6ff',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    textAlign: 'center',
  },

  stat: {
    borderRight: '1px solid #dbeafe',
  },

  // CTA
  cta: {
    padding: '80px 20px',
    textAlign: 'center',
    backgroundColor: '#fff',
  },

  ctaButton: {
    marginTop: '20px',
    padding: '13px 30px',
    border: 'none',
    borderRadius: '7px',
    backgroundColor: '#2563eb',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
}

export default Home