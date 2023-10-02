import styles from "../../styles/components/project-box.module.scss";
import typography from "../../scss/base/_typography.module.scss";
import utilities from "../../scss/base/_utilities.module.scss";
import Image from "next/Image";
const projectBox = () => {
  return (
    <div className={styles.container}>
      <h3 className={typography.heading_primary}>Projects</h3>
      <div className={styles.container__projectBox}>
        <div className={styles.container__image}>
          <Image src={"/../public/models/oliver.gif"} fill={true} />
        </div>

        <div className={styles.container__content}>
          <div className={styles.container__summary}>
            <h3
              className={
                typography.heading_tertiary + " " + utilities.bot_margin
              }
              style={{ fontWeight: 700 }}
            >
              SySCoRe: Synthesis via Stochastic Coupling Relations
            </h3>

            <p
              className={
                typography.paragraph__lighter + " " + utilities.bot_margin
              }
            >
              In this project we do ... Donec porttitor velit nec pretium
              egestas. ellentesque maximus tempus metus in dignissim. Donec
              porttitor velit nec pretium egestas. ellentesque maximus tempus
              metus in dignissim. Donec porttitor velit nec pretium egestas.
              ellentesque maximus tempus metus in dignissim.{" "}
            </p>
            <p className={typography.paragraph} style={{ color: "#0189FF" }}>
              Oliver Schön, Birgit van Huijgevoort, Sofie Haesaert, Sadegh
              Soudjani
            </p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.container__list}>
            <div
              className={
                styles.container__list__item +
                " " +
                typography.paragraph__small__white
              }
            >
              <p>Robust Dynamic Programming</p>
              <div className={styles.arrow}></div>
            </div>
            <div
              className={
                styles.container__list__item +
                " " +
                typography.paragraph__small__white
              }
            >
              <p>Robust Dynamic Programming</p>
              <div className={styles.arrow}></div>
            </div>
            <div
              className={
                styles.container__list__item +
                " " +
                typography.paragraph__small__white
              }
            >
              <p>Robust Dynamic Programming</p>
              <div className={styles.arrow}></div>
            </div>
            <div
              className={
                styles.container__list__item +
                " " +
                typography.paragraph__small__white
              }
            >
              <p>Robust Dynamic Programming</p>
              <div className={styles.arrow}></div>
            </div>
            <div
              className={
                styles.container__list__item +
                " " +
                typography.paragraph__small__white
              }
            >
              <p>Robust Dynamic Programming</p>
              <div className={styles.arrow}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default projectBox;
