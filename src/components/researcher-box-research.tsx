import Image from "next/image";
import styles from "../../styles/components/researcher-box-research.module.scss";
import typography from "../../scss/base/_typography.module.scss";
import utilities from "../../scss/base/_utilities.module.scss";
export default function ResearcherBoxResearch({ people }) {
  return (
    <div className={styles.container}>
      <h2
        className={
          typography.heading_tertiary__white + " " + utilities.bot_margin__small
        }
      >
        Researchers
      </h2>
      <div className={styles.researchers}>
        {people.map((person, id) => {
          return (
            <div className={styles.researcher} key={id}>
              <div className={styles.researcher__photo}>
                <Image
                  className={styles.image}
                  src={person.image}
                  alt={person.name}
                  fill={true}
                />
              </div>
              <div className={styles.column}>
                <h4
                  className={typography.paragraph__white}
                  style={{ fontWeight: "400" }}
                >
                  {person.name}
                </h4>
                <p
                  className={typography.paragraph__small__white}
                  style={{ fontSize: "1.1rem !important", fontWeight: "300" }}
                >
                  {person.role}
                </p>
                <p
                  className={typography.paragraph__small__white}
                  style={{ fontSize: "1.1rem !important", fontWeight: "300" }}
                >
                  {person.contact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
