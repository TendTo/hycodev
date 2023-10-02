import styles from "../../styles/components/the-team-sadegh.module.scss";
import Image from "next/image";
import typography from "../../scss/base/_typography.module.scss";
import utilities from "../../scss/base/_utilities.module.scss";
import button from "../../styles/components/button.module.scss";

const TheTeamSadegh = () => {
  return (
    <div className={styles.container}>
      <h1 className={typography.heading_primary + " " + utilities.bot_margin}>
        Meet the Team
      </h1>
      <div className={styles.sadegh_box}>
        <div className={styles.image_wrapper}>
          <Image
            src="/../public/images/people/sadegh_soudjani.jpg"
            fill={true}
            objectFit={"cover"}
          />
        </div>
        <div className={styles.sadegh_box__text}>
          <h2 className={typography.heading_secondary}>Sadegh Soudjani</h2>
          <h3
            className={
              typography.paragraph__lighter + " " + utilities.bot_margin
            }
          >
            Associate Professor
          </h3>
          <p className={typography.paragraph + " " + utilities.bot_margin}>
            My research aim is to develop an integrated environment for
            programming, verifying, and designing high-performance and scalable
            CPSs perceiving and acting in the uncertain physical world. I have
            developed and shaped my research vision on formal synthesis,
            abstraction, and verification (over probabilistic temporal
            specifications) of complex dynamical systems with application in
            cyber-physical systems (CPSs) particularly involving energy networks
            and autonomous systems. I have a BSc in Pure Mathematics, a BSc in
            Electrical Engineering, an MSc in Control Engineering, and a PhD in
            Systems & Control, all with distinction.
          </p>
          <div className={styles.contact_wrapper}>
            <p className={typography.paragraph__small}>
              <strong>Email:</strong> sadegh.soudjani@ncl.ac.uk
            </p>
            <p className={typography.paragraph__small}>
              <strong>Phone:</strong> +44 191 208 7856
            </p>
            <p
              className={
                typography.paragraph__small + " " + utilities.bot_margin__small
              }
            >
              <strong>Office:</strong> 6.035, Urban Sciences Building, 1 Science
              Square, Newcastle Upon Tyne, NE4 5TG, United Kingdom
            </p>
            <a
              className={button.button + " " + typography.paragraph__small}
              href={"/sadegh-soudjani"}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TheTeamSadegh;
