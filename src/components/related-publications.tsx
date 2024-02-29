"use client";
import styles from "../../scss/components/related-publications.module.scss";
import typography from "../../scss/base/_typography.module.scss";
import utilities from "../../scss/base/_utilities.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useState } from "react";

const RelatedPublications = () => {
  const [alphabetical, setAlphabetical] = useState(false);
  const [chronological, setChronological] = useState(true);

  const setA = () => {
    setAlphabetical(true);
    setChronological(false);
  };
  const setC = () => {
    setChronological(true);
    setAlphabetical(false);
  };

  return (
    <div className={styles.container__page}>
      <div className={styles.container__pageTitle}>
        <h2 className={typography.heading_secondary}>Related Publications</h2>
        <div
          className={
            utilities.bot_margin__big +
            " " +
            styles.container__pageTitle__filter
          }
        >
          <button
            className={typography.paragraph__small + " " + styles.button}
            style={chronological ? { color: "#0189FF" } : { color: "#636761" }}
            onClick={setC}
          >
            Chronological
          </button>
          <button
            className={typography.paragraph__small + " " + styles.button}
            style={alphabetical ? { color: "#0189FF" } : { color: "#636761" }}
            onClick={setA}
          >
            Alphabetical
          </button>
        </div>
      </div>

      <div className={styles.container}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide
            style={{ width: "40rem", height: "45", padding: "4rem 2rem" }}
          >
            <div className={styles.container__article}>
              <h3 className={styles.text__heading}>
                Adaptive and sequential gridding procedures for the abstraction
                and verification of stochastic processes
              </h3>
              <div>
                <p className={typography.paragraph + " " + styles.text__body}>
                  This is the abstract of this paper. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Morbi aliquam ex sit amet
                  velit blandit maximus. Sed vulputate vitae mi nec placerat.
                  Integer ut venenatis nisl. Sed consectetur nisi diam, id
                  sollicitudin mauris tristique ut. Donec porttitor velit nec
                  pretium egestas. Pellentesque maximus tempus metus in
                  blablabla blabalbalbabl...
                </p>
                <a className={typography.paragraph + " " + styles.text__link}>
                  Read More
                </a>
              </div>
              <p className={typography.paragraph}>
                <strong>Authors: </strong>Sadegh Esmaeil Zadeh Soudjani,
                Alessandro Abate
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{ width: "40rem", height: "45", padding: "4rem 2rem" }}
          >
            <div className={styles.container__article}>
              <h3 className={styles.text__heading}>
                Adaptive and sequential gridding procedures for the abstraction
                and verification of stochastic processes
              </h3>
              <div>
                <p className={typography.paragraph + " " + styles.text__body}>
                  This is the abstract of this paper. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Morbi aliquam ex sit amet
                  velit blandit maximus. Sed vulputate vitae mi nec placerat.
                  Integer ut venenatis nisl. Sed consectetur nisi diam, id
                  sollicitudin mauris tristique ut. Donec porttitor velit nec
                  pretium egestas. Pellentesque maximus tempus metus in
                  blablabla blabalbalbabl...
                </p>
                <a className={typography.paragraph + " " + styles.text__link}>
                  Read More
                </a>
              </div>
              <p className={typography.paragraph}>
                <strong>Authors: </strong>Sadegh Esmaeil Zadeh Soudjani,
                Alessandro Abate
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{ width: "40rem", height: "45", padding: "4rem 2rem" }}
          >
            <div className={styles.container__article}>
              <h3 className={styles.text__heading}>
                Adaptive and sequential gridding procedures for the abstraction
                and verification of stochastic processes
              </h3>
              <div>
                <p className={typography.paragraph + " " + styles.text__body}>
                  This is the abstract of this paper. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Morbi aliquam ex sit amet
                  velit blandit maximus. Sed vulputate vitae mi nec placerat.
                  Integer ut venenatis nisl. Sed consectetur nisi diam, id
                  sollicitudin mauris tristique ut. Donec porttitor velit nec
                  pretium egestas. Pellentesque maximus tempus metus in
                  blablabla blabalbalbabl...
                </p>
                <a className={typography.paragraph + " " + styles.text__link}>
                  Read More
                </a>
              </div>
              <p className={typography.paragraph}>
                <strong>Authors: </strong>Sadegh Esmaeil Zadeh Soudjani,
                Alessandro Abate
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{ width: "40rem", height: "45", padding: "4rem 2rem" }}
          >
            <div className={styles.container__article}>
              <h3 className={styles.text__heading}>
                Adaptive and sequential gridding procedures for the abstraction
                and verification of stochastic processes
              </h3>
              <div>
                <p className={typography.paragraph + " " + styles.text__body}>
                  This is the abstract of this paper. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Morbi aliquam ex sit amet
                  velit blandit maximus. Sed vulputate vitae mi nec placerat.
                  Integer ut venenatis nisl. Sed consectetur nisi diam, id
                  sollicitudin mauris tristique ut. Donec porttitor velit nec
                  pretium egestas. Pellentesque maximus tempus metus in
                  blablabla blabalbalbabl...
                </p>
                <a className={typography.paragraph + " " + styles.text__link}>
                  Read More
                </a>
              </div>
              <p className={typography.paragraph}>
                <strong>Authors: </strong>Sadegh Esmaeil Zadeh Soudjani,
                Alessandro Abate
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{ width: "40rem", height: "45", padding: "4rem 2rem" }}
          >
            <div className={styles.container__article}>
              <h3 className={styles.text__heading}>
                Adaptive and sequential gridding procedures for the abstraction
                and verification of stochastic processes
              </h3>
              <div>
                <p className={typography.paragraph + " " + styles.text__body}>
                  This is the abstract of this paper. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Morbi aliquam ex sit amet
                  velit blandit maximus. Sed vulputate vitae mi nec placerat.
                  Integer ut venenatis nisl. Sed consectetur nisi diam, id
                  sollicitudin mauris tristique ut. Donec porttitor velit nec
                  pretium egestas. Pellentesque maximus tempus metus in
                  blablabla blabalbalbabl...
                </p>
                <a className={typography.paragraph + " " + styles.text__link}>
                  Read More
                </a>
              </div>
              <p className={typography.paragraph}>
                <strong>Authors: </strong>Sadegh Esmaeil Zadeh Soudjani,
                Alessandro Abate
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default RelatedPublications;
