"use client";

import styles from "../../styles/publication-article.module.scss";
import typography from "../../scss/base/_typography.module.scss";
import utilities from "../../scss/base/_utilities.module.scss";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/scrollbar";
import RelatedPublicationsList from "./related-publications";
import Divider from "./divider";

const Article = ({ text, title, articleImages, people }) => {
  return (
    <div className={styles.container}>
      <h2
        className={typography.heading_primary + " " + utilities.bot_margin}
        style={{ width: "80rem" }}
      >
        {title}
      </h2>
      <div className={styles.container_content}>
        <Swiper
          modules={[Navigation, Scrollbar]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          scrollbar={{ draggable: true }}
          style={{
            width: "40rem",
            height: "27rem",
            float: "right",
            margin: "2rem 0 1rem 4rem",
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {articleImages.map((image, id) => {
            return (
              <SwiperSlide
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexFlow: "column wrap",
                }}
                key={id}
              >
                <div className={styles.container_image + " " + "swiper-slide"}>
                  <Image
                    className={styles.image}
                    src={image.link}
                    alt={image.alt}
                    width={706}
                    height={534}
                  ></Image>
                </div>
                <p className={typography.paragraph__small}>
                  Figure {id + 1}. {image.alt}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={styles.container_text}>
          {text.map((data, i, text) => {
            if (i + 1 === text.length) {
              return (
                <div key={i}>
                  <h3 className={typography.heading_tertiary}>
                    {data.sectionHeading}
                  </h3>
                  {data.paragraphs.map((paragraph, i, data) => {
                    if (i + 1 === data.length) {
                      return (
                        <p className={typography.paragraph}>{paragraph}</p>
                      );
                    } else {
                      return (
                        <p
                          className={
                            typography.paragraph +
                            " " +
                            utilities.bot_margin__small
                          }
                        >
                          {paragraph}
                        </p>
                      );
                    }
                  })}
                </div>
              );
            } else {
              return (
                <div key={i} className={utilities.bot_margin__big}>
                  <h3 className={typography.heading_tertiary}>
                    {data.sectionHeading}
                  </h3>
                  {data.paragraphs.map((paragraph, id) => {
                    return (
                      <p
                        className={
                          typography.paragraph +
                          " " +
                          utilities.bot_margin__small
                        }
                      >
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              );
            }
          })}
        </div>
      </div>
      <Divider />
    </div>
  );
};
export default Article;
