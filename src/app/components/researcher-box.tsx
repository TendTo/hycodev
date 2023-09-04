import Image from "next/image";
import styles from "../../../styles/researcher-box.module.scss";
import typography from "../../../scss/base/_typography.module.scss";
import utilities from "../../../scss/base/_utilities.module.scss";
export default function ResearcherBox() {
  return (
    <div className={styles.container}>
      <h2
        className={
          typography.heading_tertiary + " " + utilities.bot_margin__big
        }
      >
        Researchers
      </h2>
      <div className={styles.researchers}>
        <div className={styles.researcher}>
          <div className={styles.researcher__photo}>
            <div className={styles.spin}></div>
            <Image
              className={styles.image}
              src={"/../public/images/people/ben-wooding.png"}
              alt={"ben"}
              width={428}
              height={449}
            />
          </div>
          <div className={styles.column}>
            <h4 className={typography.paragraph_highlighted}>Ben Wooding</h4>
            <p className={typography.paragraph__small}>Phd Student</p>
          </div>
        </div>
        <div className={styles.researcher}>
          <div className={styles.researcher__photo}>
            <div className={styles.spin}></div>
            <Image
              className={styles.image}
              src={"/../public/images/people/ben-wooding.png"}
              alt={"ben"}
              width={428}
              height={449}
            />
          </div>
          <div className={styles.column}>
            <h4 className={typography.paragraph_highlighted}>Ben Wooding</h4>
            <p className={typography.paragraph__small}>Phd Student</p>
          </div>
        </div>
      </div>
    </div>
  );
}
