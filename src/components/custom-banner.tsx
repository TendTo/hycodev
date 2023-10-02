import Image from "next/image";
import styles from "../../styles/components/banner.module.scss";
import typography from "../../scss/base/_typography.module.scss";
import React from "react";

const CustomBanner = ({ title, source, size, backdrop }) => {
  return (
    <div className={styles.container} style={size.size}>
      <div
        className={styles.backdrop}
        style={{ ...size.size, ...backdrop.backdrop }}
      ></div>
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
export default CustomBanner;
