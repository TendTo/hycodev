import Image from "next/image";
import styles from "../../../styles/banner.module.scss";
import typography from "../../../scss/base/_typography.module.scss";

const Banner = ({ title, source }) => {
  return (
    <div className={styles.container}>
      <div className={styles.backdrop}></div>
      <Image
        style={{ objectFit: "cover" }}
        src={source}
        fill={true}
        quality={100}
      />
      <h1 className={typography.heading_primary__white + " " + styles.heading}>
        {title}
      </h1>
    </div>
  );
};
export default Banner;
