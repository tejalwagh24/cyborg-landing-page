import "./App.css";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaEye,
  FaShieldAlt,
  FaMicrochip,
} from "react-icons/fa";

function App() {
  return (
    <div className="app">

      {/* BACKGROUND EFFECTS */}

      <div className="grid-bg"></div>

      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      <div className="scanline"></div>

      {/* NAVBAR */}

      <nav className="navbar">
        <h2 className="logo">CYBORG-X</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Systems</a>
          <a href="#about">About</a>
          <a href="#contact">Access</a>
        </div>
      </nav>

      {/* HERO */}

      <section className="hero" id="home">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="status">
  <span className="status-dot"></span>
  SYSTEM ONLINE
</div>

          <h1 className="hero-title">
            CYBORG-X
          </h1>

          <h2 className="hero-tagline">
            HUMANITY REDEFINED
          </h2>

          <p className="hero-subtitle">
            The next evolution of intelligence.
            Combining neural augmentation,
            artificial intelligence and quantum
            computation into a unified future.
          </p>

          <button className="cyber-btn">
            ACCESS THE FUTURE
          </button>
        </motion.div>

        <motion.div
  className="hero-image-container"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2 }}
>
  <div className="ring ring1"></div>
  <div className="ring ring2"></div>

  <img
    src="/cyborg.jpg"
    alt="cyborg"
    className="hero-image"
  />
</motion.div>

      </section>

      {/* FEATURES */}

      <section className="features" id="features">
        <h2 className="section-title">
          CORE SYSTEMS
        </h2>

        <div className="feature-grid">
          <motion.div whileHover={{ scale: 1.08 }} className="card">
            <FaBrain size={40} color="cyan" />
            <h3>Neural Intelligence</h3>
            <p>
              Self-learning AI capable of adaptive reasoning.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.08 }} className="card">
            <FaEye size={40} color="cyan" />
            <h3>Enhanced Vision</h3>
            <p>
              Beyond-human visual recognition systems.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.08 }} className="card">
            <FaShieldAlt size={40} color="cyan" />
            <h3>Defense Protocol</h3>
            <p>
              Military-grade cyber protection architecture.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.08 }} className="card">
            <FaMicrochip size={40} color="cyan" />
            <h3>Quantum Core</h3>
            <p>
              Ultra-fast computational intelligence engine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS */}

      <section className="stats">
        <h2 className="section-title">
          FUTURE METRICS
        </h2>

        <div className="stats-grid">
          <div className="stat">
            <h1>99.97%</h1>
            <p>Neural Accuracy</p>
          </div>

          <div className="stat">
            <h1>0.02s</h1>
            <p>Response Time</p>
          </div>

          <div className="stat">
            <h1>10M+</h1>
            <p>Connected Nodes</p>
          </div>

          <div className="stat">
            <h1>24/7</h1>
            <p>Synchronization</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="about" id="about">
        <h2 className="section-title">
          THE CYBORG ERA
        </h2>

        <p>
          Cyborg-X represents the convergence of artificial
          intelligence, robotics, neural interfaces and
          advanced computing, enabling seamless integration
          between human cognition and machine intelligence.
        </p>
      </section>

      {/* CTA */}

      <section className="cta" id="contact">
        <h2 className="section-title">
          READY TO EVOLVE?
        </h2>

        <p className="hero-subtitle">
          Join the next generation of intelligence.
        </p>

        <button className="cyber-btn">
          INITIATE TRANSFORMATION
        </button>
      </section>

      <footer className="footer">
        © 2026 CYBORG-X | Humanity Redefined
      </footer>

    </div>
  );
}

export default App;