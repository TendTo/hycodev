"use client";

import styles from "../../styles/publication-article.module.scss";
import typography from "../../scss/base/_typography.module.scss";
import utilities from "../../scss/base/_utilities.module.scss";
import button from "../../styles/components/button.module.scss";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/scrollbar";

import { Button, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Article = ({ text, title, articleImages, links, papers }) => {
  return (
    <div className={styles.container}>
      <h2 className={typography.heading_primary + " " + utilities.bot_margin}>
        {title}
      </h2>
      <div className={styles.container_content}>
        <Swiper
          className={styles.swiper}
          modules={[Navigation, Scrollbar]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {articleImages !== null
            ? articleImages.map((image, id) => {
                return (
                  <SwiperSlide
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexFlow: "column wrap",
                    }}
                    key={id}
                  >
                    <div
                      className={styles.container_image + " " + "swiper-slide"}
                    >
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
              })
            : null}
        </Swiper>
        <div className={styles.container_text}>
          {text.map((data, i, text) => {
            if (i + 1 === text.length) {
              return (
                <div key={i} className={utilities.bot_margin}>
                  <h3 className={typography.heading_tertiary__light}>
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
                <div key={i} className={utilities.bot_margin}>
                  <h3 className={typography.heading_tertiary__light}>
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
        <div>
          {links === undefined ? null : (
            <div>
              <h3
                className={
                  typography.heading_tertiary__light +
                  " " +
                  utilities.bot_margin__small
                }
              >
                More about the project
              </h3>
              <div className={styles.links}>
                {typeof links === "object" ? (
                  links.map((link, id) => {
                    return (
                      <Button
                        size="lg"
                        style={{ textDecoration: "none" }}
                        className={typography.paragraph}
                        variant="outline"
                      >
                        <a target="_blank" href={link.name}>
                          {link.name} <ExternalLinkIcon mx="2px" />
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
                    <a target="_blank" href={links.name}>
                      {links.name} <ExternalLinkIcon mx="2px" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
          <h3
            className={
              typography.heading_tertiary__light +
              " " +
              utilities.bot_margin__small +
              " " +
              utilities.top_margin
            }
          >
            Related Publications
          </h3>
          <div className={styles.papers}>
            {papers.map((paper, id) => {
              return (
                <button
                  style={{ textDecoration: "none" }}
                  className={typography.paragraph + " " + button.button}
                >
                  <Link
                    href={paper.link}
                    isExternal
                    className={typography.paragraph}
                  >
                    {paper.name} <ExternalLinkIcon mx="2px" />
                  </Link>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Article;
