import "./App.css";
import Scene from "./Scene";

function App() {
  return (
    <div className="app">

      {/* BACKGROUND LAYERS */}
      <div className="bg-glow"></div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">CYBORG-X</h1>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#features">Systems</a>
          <a href="#about">About</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">

        <div className="hero-left">
          <p className="tag">● NEURAL LINK ACTIVE</p>

          <h1 className="title">
            HUMANITY<br />
            
            REDEFINED
          </h1>

          <p className="desc">
            A cybernetic intelligence system merging human cognition with AI-driven evolution.
            Built for next-generation interaction.
          </p>

          <button className="btn">INITIALIZE SYSTEM</button>
        </div>

        <div className="hero-right">
          <div className="frame">
            <Scene />
          </div>
        </div>

      </section>

      {/* FEATURES */}
      <section id="features" className="section">
        <h2>CORE SYSTEMS</h2>

        <div className="cards">
          <div className="card">Neural AI Core</div>
          <div className="card">Vision Enhancement</div>
          <div className="card">Defense Layer</div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>ABOUT CYBORG-X</h2>
        <p>
          A futuristic prototype designed to simulate human-machine integration
          through adaptive AI systems and immersive cyber interfaces.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 CYBORG-X | TechFest Prototype
      </footer>

    </div>
  );
}

export default App;