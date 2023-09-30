"use client";
import styles from "../../styles/components/related-publications.module.scss";
import typography from "../../scss/base/_typography.module.scss";
import utilities from "../../scss/base/_utilities.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const RelatedPublications = () => {
  return (
    <div>
      <div className={styles.container__pageTitle}>
        <h2 className={typography.heading_secondary}>Related Publications</h2>
        <div
          className={
            utilities.bot_margin__big +
            " " +
            styles.container__pageTitle__filter
          }
        >
          <p className={typography.paragraph__small}>Chronological</p>
          <p className={typography.paragraph__small}>Alphabetical</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.button_clip__left}></div>
        <div className={styles.button_clip__right}></div>
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
