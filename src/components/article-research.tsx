"use client";

import styles from "../../styles/components/article-research.module.scss";
import typography from "../../scss/base/_typography.module.scss";
import utilities from "../../scss/base/_utilities.module.scss";
import Image from "next/image";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/scrollbar";

import ResearcherBoxResearch from "./researcher-box-research";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ArticleResearch = ({ text, title, articleImages, people }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_image}>
        <Swiper
          modules={[Navigation, Scrollbar]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          scrollbar={{ draggable: true }}
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
      </div>
      <div className={styles.container_text}>
        {text.map((data, i, text) => {
          if (i + 1 === text.length) {
            return (
              <div key={i}>
                {data.paragraphs.map((paragraph, i, data) => {
                  if (i + 1 === data.length) {
                    return (
                      <p
                        className={typography.paragraph__white}
                        style={{ fontWeight: "300" }}
                      >
                        {paragraph}
                      </p>
                    );
                  } else {
                    return (
                      <p
                        className={
                          typography.paragraph__white +
                          " " +
                          utilities.bot_margin__small
                        }
                        style={{ fontWeight: "300" }}
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
                {data.paragraphs.map((paragraph, id) => {
                  return (
                    <p
                      className={
                        typography.paragraph__white +
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
      <div className={styles.divider}></div>
      <ResearcherBoxResearch people={people}></ResearcherBoxResearch>
    </div>
  );
};
export default ArticleResearch;
