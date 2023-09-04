"use client";

import styles from "../../../styles/publications-all.module.scss";
import { PublicationArticles } from "./publications";
import Banner from "../components/banner";
import PublicationBox from "../publication-box/page";
import typography from "../../../scss/base/_typography.module.scss";
import utilities from "../../../scss/base/_utilities.module.scss";
import PublicationCategories from "../publication-categories/page";
import { useState } from "react";
import { motion } from "framer-motion";
export default function PublicationsAll() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const arr = PublicationArticles[0];
  console.log(arr.title);
  const filteredPublications =
    selectedCategory || selectedYear
      ? PublicationArticles.filter((publicationBox) =>
          publicationBox.category.includes(selectedCategory && selectedYear)
        )
      : PublicationArticles;
  const splitYears = PublicationArticles.flatMap((box) => box.year);
  const years = Array.from(new Set(splitYears));
  return (
    <div className={styles.container}>
      <Banner
        title={"Publications"}
        source={"/../public/images/cropped.png"}
      ></Banner>
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

          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className={styles.article_boxes}
          >
            {filteredPublications.map((publicationBox, id) => (
              <PublicationBox
                key={publicationBox.id}
                link={"publications-all/" + publicationBox.id}
                title={publicationBox.title}
                image={publicationBox.img}
                category={publicationBox.category}
                alt={publicationBox.alt}
              />
            ))}
          </motion.div>
        </div>
      </div>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
}
