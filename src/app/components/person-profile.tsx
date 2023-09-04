import styles from "../../../styles/person-profile.module.scss";
import Image from "next/image";
import typography from "../../../scss/base/_typography.module.scss";
import utilities from "../../../scss/base/_utilities.module.scss";

const PersonProfile = ({ name, role, image, link }) => {
  return (
    <div className={styles.member}>
      <div className={styles.wrapper_profile}>
        <Image
          className={styles.member_profile}
          src={image}
          alt={name}
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className={styles.wrapper_names}>
        <a href={link} style={{ textDecoration: "none" }}>
          <p className={typography.paragraph_highlighted}>{name}</p>
          <p className={typography.paragraph__small}>{role}</p>
        </a>
      </div>
    </div>
  );
};
export default PersonProfile;
