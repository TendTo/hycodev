"use client";
import styles from "./page.module.scss";
import typography from "../../../scss/base/_typography.module.scss";
import Image from "next/image";
import CustomBanner from "../../components/custom-banner";
import { ProjectArticles } from "../../assets/projects";

import { Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Projects() {
  const backdrop = {
    backdrop: {},
  };
  const size = {
    size: {
      minHeight: "18rem",
      maxHeight: "18rem",
    },
  };
  return (
    <div className={styles.container}>
      <CustomBanner
        title={"Projects"}
        source={"/images/banners/software_new.jpg"}
        size={size}
        backdrop={backdrop}
      ></CustomBanner>
      <div className={styles.container__text}>
        <h2 className={typography.heading_secondary}>All Projects</h2>
        <p className={typography.paragraph__lighter}>
          Take a look at the variety of projects that the HyCoDeV team has taken
          part in
        </p>
      </div>

      <div className={styles.container__cards}>
        {ProjectArticles.map((article, id) => {
          return (
            <div className={styles.container__projects}>
              <div className={styles.card}>
                <a
                  href={
                    article.external === "true"
                      ? article.link
                      : "projects/" + article.id
                  }
                  target={article.external === "true" ? "_blank" : "_self"}
                >
                  <Image
                    fill={true}
                    src={article.image[0].link}
                    style={{ objectFit: "cover" }}
                    alt={"project image"}
                  ></Image>
                  <div className={styles.card__header}>
                    {article.external === "true" ? (
                      <Button size="sm">
                        <ExternalLinkIcon w={7} h={7} />
                      </Button>
                    ) : null}
                  </div>
                  <div className={styles.card__footer}>
                    <div>
                      <p className={typography.paragraph_highlighted__white}>
                        {article.title}
                      </p>
                      <p
                        className={typography.paragraph__small}
                        style={{ color: "#D5D5D5" }}
                      >
                        {article.category}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// IntroductionArticles.projects.map((project) => (
//     <ProjectBox project={project} />
// ))
