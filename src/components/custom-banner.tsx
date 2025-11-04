import Image from "next/image";
import styles from "../../scss/components/banner.module.scss";
import typography from "../../scss/base/_typography.module.scss";
import React from "react";

const CustomBanner = ({
  title,
  subtitle = "",
  source,
  size,
  backdrop,
  alt,
}) => {
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
        alt={alt}
      />
      <div className={typography.heading_primary__white + " " + styles.heading}>
        <h1 className={typography.heading_primary__white}>{title}</h1>
        {subtitle && (
          <p className={typography.heading_secondary__white}>{subtitle}</p>
        )}
      </div>
    </div>
  );
};
export default CustomBanner;
