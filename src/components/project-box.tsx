import styles from "../../styles/components/project-box.module.scss";
import typography from "../../scss/base/_typography.module.scss";
import utilities from "../../scss/base/_utilities.module.scss";
import Image from "next/image";
const projectBox = (project) => {
  console.log("Projectaaa:", project);
  return (
    <div className={styles.container}>
      <div className={styles.container__projectBox}>
        <div className={styles.container__image}>
          <Image src={project.project.image} fill={true} />
        </div>

        <div className={styles.container__content}>
          <div className={styles.container__summary}>
            <h3
              className={
                typography.heading_tertiary + " " + utilities.bot_margin
              }
              style={{ fontWeight: 700 }}
            >
              {project.project.title}
            </h3>

            <p
              className={
                typography.paragraph__lighter + " " + utilities.bot_margin
              }
            >
              {project.project.paragraph}
            </p>
            <p className={typography.paragraph} style={{ color: "#0189FF" }}>
              {project.project.researchers}
            </p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.container__list}>
            {project.project.papers.map((paper) => (
              <div
                className={
                  styles.container__list__item +
                  " " +
                  typography.paragraph__small__white
                }
              >
                <a href={paper.link} target="_blank">
                  {" "}
                  {paper.title}
                </a>
                <div className={styles.arrow}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default projectBox;
