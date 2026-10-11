import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>

        <p className={styles.subtitle}>
          Get In Touch
        </p>

        <h2 className={styles.heading}>
          Contact <span>Me</span>
        </h2>

        <p className={styles.description}>
          Have a project idea or an opportunity?
          Feel free to reach out. I'd love to connect
          with you!
        </p>

        <div className={styles.contactCards}>

          {/* Email */}
          <div className={styles.card}>
            <div className={styles.icon}>✉</div>

            <h3>Email</h3>

            <p>Let's connect through email.</p>

            <a
              href="mailto:atulkumar09548@gmail.com?subject=Portfolio%20Contact&body=Hello%20Atul,"
              className={styles.contactLink}
            >
              Send Email ↗
            </a>
          </div>

          {/* LinkedIn */}
          <div className={styles.card}>
            <div className={styles.icon}>in</div>

            <h3>LinkedIn</h3>

            <p>Connect with me professionally.</p>

            <a
              href="https://www.linkedin.com/in/atulkumardeveloper/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit LinkedIn ↗
            </a>
          </div>

          {/* GitHub */}
          <div className={styles.card}>
            <div className={styles.icon}>⌘</div>

            <h3>GitHub</h3>

            <p>Explore my projects and code.</p>

            <a
              href="https://github.com/atul18-prog"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              Visit GitHub ↗
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;