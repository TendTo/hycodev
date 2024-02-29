import Image from "next/image";
import styles from "../../scss/components/researcher-box.module.scss";
import typography from "../../scss/base/_typography.module.scss";
import utilities from "../../scss/base/_utilities.module.scss";
export default function PublicationResearcherBox({ people }) {
  return (
    <div className={styles.container}>
      <h2
        className={
          typography.heading_tertiary_thick + " " + utilities.bot_margin
        }
      >
        Researchers
      </h2>
      <div className={styles.researchers}>
        {people.map((person, id) => {
          return (
            <div className={styles.researcher} key={id}>
              <div className={styles.researcher__photo}>
                <div className={styles.spin}></div>
                <Image
                  className={styles.image}
                  src={person.image}
                  alt={person.name}
                  width={428}
                  height={449}
                />
              </div>
              <div className={styles.column}>
                <h4
                  className={typography.paragraph}
                  style={{ fontWeight: "500" }}
                >
                  {person.name}
                </h4>
                <p className={typography.paragraph__small}>{person.role}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
