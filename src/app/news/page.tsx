import styles from "./page.module.scss";
import Image from "next/image";
import typography from "../../../scss/base/_typography.module.scss";
import utilities from "../../../scss/base/_utilities.module.scss";
import { News_Items } from "../../assets/news";
import NewsItem from "../../components/news-item";
import React from "react";
import CustomBanner from "../../components/custom-banner";

export default function News() {
  const size = {
    size: {
      minHeight: "18rem",
      maxHeight: "18rem",
    },
  };
  const backdrop = {
    backdrop: {},
  };
  return (
    <div className={styles.container}>
      <CustomBanner
        title={"News"}
        source={"/images/news_backdrop.jpg"}
        size={size}
        backdrop={backdrop}
        alt={"Photograph of many books"}
      ></CustomBanner>
      <div className={styles.container__news}>
        {News_Items.map((item, id) => {
          return (
            <NewsItem
              title={item.title}
              description={item.description}
              link={item.link}
              date={item.date}
            ></NewsItem>
          );
        })}
      </div>
    </div>
  );
}
