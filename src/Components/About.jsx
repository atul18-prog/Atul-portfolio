
import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>

        <p className={styles.subtitle}>Get To Know Me</p>

        <h2 className={styles.heading}>
          About <span>Me</span>
        </h2>

        <div className={styles.content}>

          {/* Left Side */}
          <div className={styles.imageBox}>
              <img
              src="/Images/atul-about.png"
              alt="Atul Kumar"
              className={styles.profileImage}
            />
          </div>

          {/* Right Side */}
          <div className={styles.textBox}>
            <h3>
              Aspiring Java Full Stack Developer
            </h3>

            <p>
              Hi, I'm Atul Kumar, a passionate developer
              interested in building modern and responsive
              web applications.
            </p>

            <p>
              I work with Java, Spring Boot, React, and
              MySQL. I enjoy solving problems using Data
              Structures and Algorithms and learning
              technologies that help me build real-world
              applications.
            </p>

            <p>
              My goal is to become a skilled software
              developer and create useful applications
              that solve real-world problems.
            </p>

            <div className={styles.details}>
              <div>
                <span>Name:</span>
                <p>Atul Kumar</p>
              </div>

              <div>
                <span>Education:</span>
                <p>MCA (2025–2027)</p>
              </div>

              <div>
                <span>Focus:</span>
                <p>Java & Web Development</p>
              </div>
            </div>

            <a
              href="#contact"
              className={styles.button}
            >
              Let's Connect
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;