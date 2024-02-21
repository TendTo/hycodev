"use client";

import styles from "../../styles/components/news.module.scss";
import typography from "../../scss/base/_typography.module.scss";
const NewsItem = ({ title, description, link, date }) => {
  return (
    <div className={styles.news_box}>
      <div className={styles.news_box__side}></div>
      <div className={styles.news_box__text}>
        <h2 className={typography.heading_tertiary}>{title}</h2>
        <p className={typography.paragraph__lighter}>{description}</p>
        <div className={styles.news_box__footer}>
          {link ? (
            <p className={typography.paragraph__small__lighter}>
              <a href={link} target={"_blank"}>
                <u>View Paper</u>
              </a>
            </p>
          ) : null}

          <p className={typography.paragraph__small__lighter}>
            <strong>{date}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
