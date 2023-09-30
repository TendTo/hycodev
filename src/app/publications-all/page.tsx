"use client";

import styles from "../../../styles/publications-all.module.scss";
import { PublicationArticles } from "../../assets/publications";
import CustomBanner from "../../components/custom-banner";
import PublicationBox from "../publication-box/page";
import typography from "../../../scss/base/_typography.module.scss";
import utilities from "../../../scss/base/_utilities.module.scss";
import PublicationCategories from "../publication-categories/page";
import { useState } from "react";

export default function PublicationsAll() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const size = {
    size: {
      minHeight: "18rem",
      maxHeight: "18rem",
    },
  };
  const backdrop = {
    backdrop: {},
  };
  const filteredPublications = selectedCategory
    ? PublicationArticles.filter((publicationBox) =>
        publicationBox.category.includes(selectedCategory)
      )
    : PublicationArticles;
  const splitYears = PublicationArticles.flatMap((box) => box.year);
  const years = Array.from(new Set(splitYears));

  return (
    <div className={styles.container}>
      <CustomBanner
        title={"Publications"}
        source={"/../public/images/cropped.png"}
        size={size}
        backdrop={backdrop}
      ></CustomBanner>
      <div className={styles.content}>
        <PublicationCategories
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <div className={styles.article_wrapper}>
          <h2
            className={
              typography.heading_secondary + " " + utilities.bot_margin__small
            }
          >
            All Publications
          </h2>
          <div className={styles.container_years}>
            {years.map((year, id) => {
              return (
                <p
                  className={
                    typography.paragraph + " " + utilities.bot_margin__big
                  }
                >
                  {year}
                </p>
              );
            })}
          </div>
          <div className={styles.article_boxes}>
            {filteredPublications.map((publicationBox, id) => (
              <PublicationBox
                key={id}
                link={"publications-all/" + publicationBox.id}
                title={publicationBox.title}
                image={publicationBox.image[0].link}
                category={publicationBox.category}
                alt={"/../public/images/publications/syscore_1.png"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
