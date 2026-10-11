
import styles from "./Projects.module.css";

function Projects() {
const projects = [
  {
    title: "Loan Management System",
    description:
      "A full-stack loan management application for handling loan applications, customer information, loan status, and installment tracking. Built with a Java Spring Boot backend and database integration.",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST API",
      "HTML",
      "CSS",
    ],
    github:
      "https://github.com/itsdhruvrpandey01/Loan-Mananement-system",
    demo: "#",
  },

  {
    title: "EduNexus Learning Hub",
    description:
      "A responsive learning platform that organizes video lectures, study materials, interactive MCQs, and practice resources for students. Built using reusable React components and subject-based resource discovery.",
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
    github: "#",
    demo: "#",
  },
];
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>

        <p className={styles.subtitle}>
          What I've Built
        </p>

        <h2 className={styles.heading}>
          My <span>Projects</span>
        </h2>

        <p className={styles.description}>
          Some of the projects I've worked on using
          modern web technologies.
        </p>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div className={styles.card} key={index}>

              <div className={styles.cardContent}>
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.buttons}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.githubBtn}
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.demoBtn}
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;