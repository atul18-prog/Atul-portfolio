
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        {/* Left Side: Introduction */}
        <div className={styles.content}>
          <span className={styles.badge}>
            <span className={styles.statusDot}></span>
            JAVA FULL STACK DEVELOPER
          </span>

          <h1 className={styles.heading}>
            Hi, I'm <span>Atul Kumar</span>
          </h1>

          <h2 className={styles.subheading}>
            Turning Ideas Into Real-World Applications
          </h2>

          <p className={styles.description}>
            I'm a passionate Java Full Stack Developer and MCA
            student who enjoys building modern, responsive, and
            user-friendly web applications. I work with Java,
            Spring Boot, React.js, MySQL, and REST APIs to develop
            reliable solutions that combine clean design with
            efficient backend functionality.
          </p>

          <p className={styles.description}>
            I believe in continuous learning, writing clean and
            maintainable code, and solving problems through logical
            thinking and practical development. I'm continuously
            improving my full-stack development and Data Structures
            & Algorithms skills while building projects that
            strengthen my understanding of real-world software
            development.
          </p>

          <div className={styles.buttons}>
            <a href="#projects" className={styles.primaryBtn}>
              Explore My Projects <span>→</span>
            </a>

            <a href="#contact" className={styles.secondaryBtn}>
              Let's Connect
            </a>
          </div>

          <div className={styles.socials}>
            <a
              href="https://github.com/atul18-prog"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/in/atulkumardeveloper/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              in
            </a>

            <a
              href="mailto:atulkumar09548@gmail.com"
              aria-label="Email"
              title="Email"
            >
              @
            </a>
          </div>
        </div>

        {/* Right Side: Profile and Technology Orbit */}
        <div className={styles.visual}>
          <div className={styles.orbit}>
            {/* Eight rotating technology icons */}
            <div className={styles.iconOrbit}>
              <div className={`${styles.tech} ${styles.java}`}>
                <strong>☕</strong>
                <small>Java</small>
              </div>

              <div className={`${styles.tech} ${styles.spring}`}>
                <strong>🌱</strong>
                <small>Spring Boot</small>
              </div>

              <div className={`${styles.tech} ${styles.react}`}>
                <strong>⚛</strong>
                <small>React</small>
              </div>

              <div className={`${styles.tech} ${styles.mysql}`}>
                <strong>▤</strong>
                <small>MySQL</small>
              </div>

              <div className={`${styles.tech} ${styles.js}`}>
                <strong>JS</strong>
                <small>JavaScript</small>
              </div>

              <div className={`${styles.tech} ${styles.api}`}>
                <strong>API</strong>
                <small>REST API</small>
              </div>

              <div className={`${styles.tech} ${styles.html}`}>
                <strong>5</strong>
                <small>HTML5</small>
              </div>

              <div className={`${styles.tech} ${styles.css}`}>
                <strong>3</strong>
                <small>CSS3</small>
              </div>
            </div>

            {/* Stationary Profile Photo */}
            <div className={styles.photoRing}>
              <img
                src="/Images/atul.png"
                alt="Atul Kumar - Java Full Stack Developer"
                className={styles.profileImage}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className={styles.glowOne}></div>
      <div className={styles.glowTwo}></div>
    </section>
  );
}

export default Hero;
