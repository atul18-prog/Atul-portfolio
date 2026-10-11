import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
          Atul<span>.dev</span>
        </a>

        <p className={styles.role}>
          Java Full Stack Developer
        </p>

        <nav className={styles.links}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={styles.divider}></div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} Atul Kumar.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;