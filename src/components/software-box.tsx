"use client";

import styles from "../../styles/components/software-box.module.scss";
import typography from "../../scss/base/_typography.module.scss";
import utilities from "../../scss/base/_utilities.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
const SoftwareBox = ({
  reverse,
  image,
  heading,
  category,
  text,
  linkPaper,
  linkDownload,
  alt,
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
        <Image src={image} fill={true} quality={100} alt={alt}></Image>
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
          <Button
            size="lg"
            style={{ textDecoration: "none" }}
            className={typography.paragraph}
          >
            <a target="_blank" href={linkPaper}>
              Read the paper
            </a>
          </Button>
          {typeof linkDownload === "object" && linkDownload !== null ? (
            linkDownload.map((link, id) => {
              return (
                <Button
                  size="lg"
                  style={{ textDecoration: "none" }}
                  className={typography.paragraph}
                  variant="outline"
                >
                  <a target="_blank" href={link}>
                    Download {id}
                  </a>
                </Button>
              );
            })
          ) : (
            <Button
              size="lg"
              style={{ textDecoration: "none" }}
              className={typography.paragraph}
              variant="outline"
            >
              <a target="_blank" href={linkDownload}>
                Download
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default SoftwareBox;
