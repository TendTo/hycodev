import styles from "../../../styles/meet-the-team.module.scss";
import Image from "next/image";

export default function MeetTheTeam() {
  return (
    <div className={styles.container}>
      {/*<div className={styles.background}>*/}
      {/*  <Image*/}
      {/*    src={"/../public/images/background.png"}*/}
      {/*    alt={"ew"}*/}
      {/*    fill={true}*/}
      {/*  />*/}
      {/*</div>*/}
      <div className={styles.row}>
        <h1 className={styles.heading}>Meet the team</h1>
        <p className={styles.category}>Leader</p>
        <p className={styles.category}>Academics</p>
        <p className={styles.category}>Researchers</p>
        <p className={styles.category}>Doctoral Trainees</p>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.image_wrapper}>
            <Image
              src="/../public/images/people/sadegh_soudjani.png"
              fill={true}
              objectFit={"cover"}
            />
          </div>
        </div>
        <div className={styles.column}>
          <h2 className={styles.heading__second}>Sadegh Soudjani</h2>
          <h3 className={styles.heading__third}>Associate Professor</h3>
          <p>
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
            <p>
              <b>Email:</b> sadegh.soudjani@ncl.ac.uk
            </p>
            <p>
              <b>Phone:</b> +44 191 208 7856
            </p>
            <p>
              <b>Office:</b> 6.035, Urban Sciences Building, 1 Science Square,
              Newcastle Upon Tyne, NE4 5TG, United Kingdom
            </p>
            <button className={styles.button}>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
