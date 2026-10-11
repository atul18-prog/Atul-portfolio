import styles from "./Skills.module.css";

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        "Java",
        "JavaScript",
        "Python",
        "C",
        "SQL",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Spring Boot",
        "Spring MVC",
        "Spring Data JPA",
        "Hibernate",
        "REST APIs",
      ],
    },
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Redux",
        "Tailwind CSS",
        "Bootstrap",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        "MySQL",
        "MongoDB",
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "IntelliJ IDEA",
      ],
    },
    {
      title: "Core Concepts",
      skills: [
        "OOP",
        "DBMS",
        "Operating Systems",
        "Data Structures & Algorithms",
      ],
    },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>

        <p className={styles.subtitle}>
          What I Work With
        </p>

        <h2 className={styles.heading}>
          My <span>Skills</span>
        </h2>

        <p className={styles.description}>
          Technologies, tools, and concepts I use to build
          reliable and responsive applications.
        </p>

        <div className={styles.grid}>
          {skillCategories.map((category) => (
            <div className={styles.card} key={category.title}>

              <h3>{category.title}</h3>

              <ul className={styles.skillList}>
                {category.skills.map((skill) => (
                  <li key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;