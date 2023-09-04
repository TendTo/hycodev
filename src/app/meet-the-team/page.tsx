import styles from "../../../styles/meet-the-team.module.scss";
import Image from "next/image";
import InteractiveLines from "../interactive-lines/page";
import typography from "../../../scss/base/_typography.module.scss";
import utilities from "../../../scss/base/_utilities.module.scss";
import button from "../../../styles/components/button.module.scss";

export default function MeetTheTeam() {
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
            [Input description about Sadegh here] This is the Hybrid Systems:
            Control, Design and Verification Lab, where we research about Formal
            Methods for control and verification. This is the Hybrid Systems:
            Control, Design and Verification Lab, where we research about Formal
            Methods for control and verification. [Input description about
            Sadegh here] This is the Hybrid Systems: Control, Design and
            Verification Lab, where we research about Formal Methods for control
            and verification. This is the Hybrid Systems: Control, Design and
            Verification Lab, where we research about Formal Methods for control
            and verification.
          </p>
          <div className={styles.contact_wrapper}>
            <p
              className={
                typography.paragraph__small + " " + utilities.bot_margin__small
              }
            >
              <strong>Email:</strong> sadegh.soudjani@ncl.ac.uk
            </p>
            <p
              className={
                typography.paragraph__small + " " + utilities.bot_margin__small
              }
            >
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
            <button className={button.button + " " + typography.paragraph}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
