import styles from "../../styles/publication-box.module.scss";
import Image from "next/image";
import typography from "../../scss/base/_typography.module.scss";
import utilities from "../../scss/base/_utilities.module.scss";
export default function PublicationBox({ image, category, title, alt, link }) {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <Image
          className={styles.image}
          src={image}
          width={706}
          height={534}
          alt={alt}
        />
        <div className={styles.image_category}>
          <h3 className={typography.heading_tertiary__white}>{category}</h3>
        </div>
      </div>
      <div>
        <a href={link}>
          <p
            className={
              typography.paragraph +
              " " +
              utilities.top_margin__small +
              " " +
              utilities.text_center
            }
          >
            {title}
          </p>
        </a>
      </div>
    </div>
  );
}
