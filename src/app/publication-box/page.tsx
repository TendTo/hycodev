import styles from "../../../styles/publication-box.module.scss";
import Image from "next/image";
export default function PublicationBox() {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <Image
          className={styles.image}
          src={"/../public/images/article.png"}
          width={706}
          height={534}
          alt={"asda"}
        />
        <div className={styles.image_category}>
          <h4 className={styles.image_category__text}>POWER SYSTEMS</h4>
        </div>
      </div>
      <div>
        <p className={styles.description}>
          Formal Methods for Control and Verification in Power Systems
        </p>
      </div>
    </div>
  );
}
