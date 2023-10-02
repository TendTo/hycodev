"use client";

import styles from "../../styles/components/software-box.module.scss";
import typography from "../../scss/base/_typography.module.scss";
import utilities from "../../scss/base/_utilities.module.scss";
import button from "../../styles/components/button.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

const SoftwareBox = ({
  reverse,
  image,
  heading,
  category,
  text,
  linkPaper,
  linkDownload,
}) => {
  let flexWrapSetting;
  if (reverse) {
    flexWrapSetting = {
      flexWrap: "wrap-reverse",
    };
  } else {
    flexWrapSetting = {
      flexWrap: "wrap",
    };
  }
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  return (
    <section
      className={styles.container}
      style={width < 600 ? {} : flexWrapSetting}
    >
      <div className={styles.container__image}>
        <Image src={image} fill={true} quality={100}></Image>
      </div>
      <div className={styles.container__text}>
        <h1 className={typography.heading_primary} style={{ lineHeight: 1.1 }}>
          {heading}
        </h1>
        <p
          className={typography.paragraph__lighter + " " + utilities.bot_margin}
        >
          {category}
        </p>
        <p className={typography.paragraph + " " + utilities.bot_margin}>
          {text}
        </p>
        <div className={styles.container__buttons}>
          <a
            href={linkPaper}
            style={{ textDecoration: "none", fontWeight: 600 }}
            className={
              button.button__bordered + " " + typography.paragraph__small
            }
          >
            Read the paper
          </a>
          <a
            href={linkDownload}
            style={{ textDecoration: "none", fontWeight: 600 }}
            className={
              button.button__bordered + " " + typography.paragraph__small
            }
          >
            Download
          </a>
        </div>
      </div>
    </section>
  );
};

export default SoftwareBox;
