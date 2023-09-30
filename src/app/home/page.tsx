"use client";

import styles from "../../../styles/page-home.module.scss";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import typography from "../../../scss/base/_typography.module.scss";
import utilities from "../../../scss/base/_utilities.module.scss";
import { homeImages } from "../../assets/home-slides";
import { motion, useMotionValue } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import SplashScreen from "../../components/splash-screen";

export default function Home() {
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  const slideRef = useRef(null);
  const [hover, setHover] = useState(-1);

  const blurSlide = (i) => {
    setHover(i);
  };

  const unblurSlide = () => {
    setHover(-1);
  };

  useEffect(() => {
    const slide = slideRef.current;
  }, []);

  let setting = [];

  for (let i = 18; i > 0; i--) {
    setting[i] = 0 + 0.05 * i;
  }
  return (
    <div className={styles.container}>
      <SplashScreen />
      <div className={styles.container_text}>
        <div className={styles.mobile_text}>
          <h1 className={styles.heading_primary + " " + utilities.bot_margin}>
            HyCoDeV Lab
          </h1>
          <Image
            src={"/../public/images/icons/hycodev.png"}
            width={132 * 1}
            height={110 * 1}
            quality={100}
            className={styles.mobile_logo + " " + utilities.bot_margin__small}
          ></Image>
          {/*<motion.svg*/}
          {/*  id="Layer_1"*/}
          {/*  data-name="Layer 1"*/}
          {/*  xmlns="http://www.w3.org/2000/svg"*/}
          {/*  viewBox="0 0 50.32 42.28"*/}
          {/*>*/}
          {/*  <motion.path*/}
          {/*    d="M33.78,43H22.34L17,32.42H28.54Z"*/}
          {/*    transform="translate(-0.12 -0.72)"*/}
          {/*    fill="#74befd"*/}
          {/*    animate={{*/}
          {/*      y: [0, -10, -15, -10, 0],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 6,*/}
          {/*      ease: "easeInOut",*/}
          {/*      times: [0, 0.2, 0.5, 0.8, 1],*/}
          {/*      repeat: Infinity,*/}
          {/*      repeatDelay: 15,*/}
          {/*      delay: setting[0],*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <motion.path*/}
          {/*    d="M33.78,21.83H22.34L17,32.42H28.54Z"*/}
          {/*    transform="translate(-0.12 -0.72)"*/}
          {/*    fill="#0f92cf"*/}
          {/*    animate={{*/}
          {/*      y: [0, -10, -15, -10, 0],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 6,*/}
          {/*      ease: "easeInOut",*/}
          {/*      times: [0, 0.2, 0.5, 0.8, 1],*/}
          {/*      repeat: Infinity,*/}
          {/*      repeatDelay: 15,*/}
          {/*      delay: setting[1],*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <motion.path*/}
          {/*    d="M33.53,42.67h11.4l5.51-10.42L44.58,21.5Z"*/}
          {/*    transform="translate(-0.12 -0.72)"*/}
          {/*    fill="#7dc8b0"*/}
          {/*    animate={{*/}
          {/*      y: [0, -10, -15, -10, 0],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 6,*/}
          {/*      ease: "easeInOut",*/}
          {/*      times: [0, 0.2, 0.5, 0.8, 1],*/}
          {/*      repeat: Infinity,*/}
          {/*      repeatDelay: 15,*/}
          {/*      delay: setting[2],*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <motion.path*/}
          {/*    d="M39.29,32.42,33.74,43,28.31,32.42Z"*/}
          {/*    transform="translate(-0.12 -0.72)"*/}
          {/*    fill="#44adbe"*/}
          {/*    animate={{*/}
          {/*      y: [0, -10, -15, -10, 0],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 6,*/}
          {/*      ease: "easeInOut",*/}
          {/*      times: [0, 0.2, 0.5, 0.8, 1],*/}
          {/*      repeat: Infinity,*/}
          {/*      repeatDelay: 15,*/}
          {/*      delay: setting[3],*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <motion.path*/}
          {/*    d="M16.57,32.38,5.4,32.4.12,21.82l11.32,0Z"*/}
          {/*    transform="translate(-0.12 -0.72)"*/}
          {/*    fill="#0189ff"*/}
          {/*    animate={{*/}
          {/*      y: [0, -10, -15, -10, 0],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 6,*/}
          {/*      ease: "easeInOut",*/}
          {/*      times: [0, 0.2, 0.5, 0.8, 1],*/}
          {/*      repeat: Infinity,*/}
          {/*      repeatDelay: 15,*/}
          {/*      delay: setting[4],*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <motion.path*/}
          {/*    d="M22.16,21.81,16.61,32.39,11.18,21.81Z"*/}
          {/*    transform="translate(-0.12 -0.72)"*/}
          {/*    fill="#0189ff"*/}
          {/*    animate={{*/}
          {/*      y: [0, -10, -15, -10, 0],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 6,*/}
          {/*      ease: "easeInOut",*/}
          {/*      times: [0, 0.2, 0.5, 0.8, 1],*/}
          {/*      repeat: Infinity,*/}
          {/*      repeatDelay: 15,*/}
          {/*      delay: setting[5],*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <motion.path*/}
          {/*    d="M39.07,32.42,33.53,21.83,28.1,32.42Z"*/}
          {/*    transform="translate(-0.12 -0.72)"*/}
          {/*    fill="#1898a4"*/}
          {/*    animate={{*/}
          {/*      y: [0, -10, -15, -10, 0],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 6,*/}
          {/*      ease: "easeInOut",*/}
          {/*      times: [0, 0.2, 0.5, 0.8, 1],*/}
          {/*      repeat: Infinity,*/}
          {/*      repeatDelay: 15,*/}
          {/*      delay: setting[6],*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <motion.path*/}
          {/*    d="M22.34,21.83l5.82-10.54,5.43,10.54Z"*/}
          {/*    transform="translate(-0.12 -0.72)"*/}
          {/*    fill="#1c9e74"*/}
          {/*    animate={{*/}
          {/*      y: [0, -10, -15, -10, 0],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 6,*/}
          {/*      ease: "easeInOut",*/}
          {/*      times: [0, 0.2, 0.5, 0.8, 1],*/}
          {/*      repeat: Infinity,*/}
          {/*      repeatDelay: 15,*/}
          {/*      delay: setting[7],*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <motion.path*/}
          {/*    d="M28.06,11.29,33.6,21.83l5.55-10.54Z"*/}
          {/*    transform="translate(-0.12 -0.72)"*/}
          {/*    fill="#1c9e74"*/}
          {/*    animate={{*/}
          {/*      y: [0, -10, -15, -10, 0],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 6,*/}
          {/*      ease: "easeInOut",*/}
          {/*      times: [0, 0.2, 0.5, 0.8, 1],*/}
          {/*      repeat: Infinity,*/}
          {/*      repeatDelay: 15,*/}
          {/*      delay: setting[8],*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <motion.path*/}
          {/*    d="M33.53,21.85l5.54,10.79,5.55-10.79Z"*/}
          {/*    transform="translate(-0.12 -0.72)"*/}
          {/*    fill="#1c9e74"*/}
          {/*    animate={{*/}
          {/*      y: [0, -10, -15, -10, 0],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 6,*/}
          {/*      ease: "easeInOut",*/}
          {/*      times: [0, 0.2, 0.5, 0.8, 1],*/}
          {/*      repeat: Infinity,*/}
          {/*      repeatDelay: 15,*/}
          {/*      delay: setting[9],*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <motion.path*/}
          {/*    d="M44.7,21.83,39.15,11.29,33.6,21.83Z"*/}
          {/*    transform="translate(-0.12 -0.72)"*/}
          {/*    fill="#1c9e74"*/}
          {/*    animate={{*/}
          {/*      y: [0, -10, -15, -10, 0],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 6,*/}
          {/*      ease: "easeInOut",*/}
          {/*      times: [0, 0.2, 0.5, 0.8, 1],*/}
          {/*      repeat: Infinity,*/}
          {/*      repeatDelay: 15,*/}
          {/*      delay: setting[10],*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <motion.path*/}
          {/*    d="M27.72,11.29,22.18.74,16.67,11.28Z"*/}
          {/*    transform="translate(-0.12 -0.72)"*/}
          {/*    fill="#97d07e"*/}
          {/*    animate={{*/}
          {/*      y: [0, -10, -15, -10, 0],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 6,*/}
          {/*      ease: "easeInOut",*/}
          {/*      times: [0, 0.2, 0.5, 0.8, 1],*/}
          {/*      repeat: Infinity,*/}
          {/*      repeatDelay: 15,*/}
          {/*      delay: setting[11],*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <motion.path*/}
          {/*    d="M11.12.73l5.55,10.55L22.18.73Z"*/}
          {/*    transform="translate(-0.12 -0.72)"*/}
          {/*    fill="#97d07e"*/}
          {/*    animate={{*/}
          {/*      y: [0, -10, -15, -10, 0],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 6,*/}
          {/*      ease: "easeInOut",*/}
          {/*      times: [0, 0.2, 0.5, 0.8, 1],*/}
          {/*      repeat: Infinity,*/}
          {/*      repeatDelay: 15,*/}
          {/*      delay: setting[12],*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <motion.path*/}
          {/*    d="M16.67,11.27,11.12.72,5.61,11.26Z"*/}
          {/*    transform="translate(-0.12 -0.72)"*/}
          {/*    fill="#97d07e"*/}
          {/*    animate={{*/}
          {/*      y: [0, -10, -15, -10, 0],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 6,*/}
          {/*      ease: "easeInOut",*/}
          {/*      times: [0, 0.2, 0.5, 0.8, 1],*/}
          {/*      repeat: Infinity,*/}
          {/*      repeatDelay: 15,*/}
          {/*      delay: setting[13],*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <motion.path*/}
          {/*    d="M5.61,11.27l5.55,10.54,5.51-10.54Z"*/}
          {/*    transform="translate(-0.12 -0.72)"*/}
          {/*    fill="#4da9a5"*/}
          {/*    animate={{*/}
          {/*      y: [0, -10, -15, -10, 0],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 6,*/}
          {/*      ease: "easeInOut",*/}
          {/*      times: [0, 0.2, 0.5, 0.8, 1],*/}
          {/*      repeat: Infinity,*/}
          {/*      repeatDelay: 15,*/}
          {/*      delay: setting[14],*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <motion.path*/}
          {/*    d="M11.18,21.83,5.63,11.29.13,21.83Z"*/}
          {/*    transform="translate(-0.12 -0.72)"*/}
          {/*    fill="#0189ff"*/}
          {/*    animate={{*/}
          {/*      y: [0, -10, -15, -10, 0],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 6,*/}
          {/*      ease: "easeInOut",*/}
          {/*      times: [0, 0.2, 0.5, 0.8, 1],*/}
          {/*      repeat: Infinity,*/}
          {/*      repeatDelay: 15,*/}
          {/*      delay: setting[15],*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <motion.path*/}
          {/*    d="M22.2,21.83,16.65,11.29,11.14,21.83Z"*/}
          {/*    transform="translate(-0.12 -0.72)"*/}
          {/*    fill="#4da9a5"*/}
          {/*    animate={{*/}
          {/*      y: [0, -10, -15, -10, 0],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 6,*/}
          {/*      ease: "easeInOut",*/}
          {/*      times: [0, 0.2, 0.5, 0.8, 1],*/}
          {/*      repeat: Infinity,*/}
          {/*      repeatDelay: 15,*/}
          {/*      delay: setting[16],*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <motion.path*/}
          {/*    d="M16.56,11.27l5.55,10.54,5.51-10.54Z"*/}
          {/*    transform="translate(-0.12 -0.72)"*/}
          {/*    fill="#52af30"*/}
          {/*    animate={{*/}
          {/*      y: [0, -10, -15, -10, 0],*/}
          {/*      rotate: [0, 0, 90, 135, 0],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 6,*/}
          {/*      ease: "easeInOut",*/}
          {/*      times: [0, 0.2, 0.5, 0.8, 1],*/}
          {/*      repeat: Infinity,*/}
          {/*      repeatDelay: 15,*/}
          {/*      delay: setting[17],*/}
          {/*    }}*/}
          {/*  />*/}
          {/*</motion.svg>*/}
          <h1 className={styles.mobile_heading + " " + utilities.bot_margin}>
            Hybrid Systems: Control, Design and Verification Lab
          </h1>
          <p className={typography.paragraph + " " + utilities.bot_margin}>
            Where we research about formal methods for control, design and
            verification of hybrid systems.
          </p>
        </div>
        <div style={width < 600 ? { display: "none" } : { display: "block" }}>
          <p
            className={
              typography.paragraph__lighter + " " + utilities.bot_margin__small
            }
          >
            Sadegh Soudjani is associated with
          </p>
          <div
            className={styles.container_text_logos + " " + utilities.bot_margin}
          >
            <Image
              src={"/../public/images/home/ncl_logo.png"}
              width={200 / 1.75}
              height={60 / 1.75}
              quality={100}
              key={"/../public/images/home/ncl_logo.png"}
            />
            <Image
              src={"/../public/images/home/mpi-sws.png"}
              width={350 / 1.75}
              height={60 / 1.75}
              quality={100}
              key={"/../public/images/home/mpi-sws.png"}
            />
          </div>
        </div>
      </div>
      <div
        className={styles.wrapper_showcase}
        style={
          hover > -1
            ? { backgroundColor: "#1f1f1f", transition: "1.5s ease-in" }
            : { backgroundColor: "transparent", transitionDuration: "0.1s" }
        }
      >
        {homeImages.map((item, index) => (
          <div
            className={styles.topic__image}
            key={item.id}
            ref={slideRef}
            onMouseEnter={() => {
              blurSlide(index);
            }}
            onMouseLeave={() => {
              unblurSlide();
            }}
            style={
              hover === -1
                ? { filter: "blur(0px)" }
                : { filter: "blur(0.15rem)" } && hover === index
                ? { filter: "blur(0px)" }
                : { filter: "blur(0.15rem)" }
            }
          >
            <div className={styles.topic__backdrop}></div>
            <div className={styles.topic__text}>
              <h1 className={styles.heading_slide + " " + utilities.bot_margin}>
                {item.title}
              </h1>
              <p
                className={
                  styles.paragraph_slide + " " + utilities.bot_margin__small
                }
              >
                {item.text}
              </p>
              <p
                className={
                  styles.paragraph_slide + " " + utilities.bot_margin__small
                }
              ></p>
              <a
                href={item.link}
                className={styles.topic__link + " " + typography.paragraph}
              >
                Lean more
              </a>
            </div>
            <Image
              className={styles.slide}
              src={item.image}
              style={item.style}
              fill={true}
              quality={100}
              alt={"energy"}
            />
          </div>
        ))}
      </div>
      <a
        href={"/publications-all"}
        className={styles.button + " " + typography.paragraph_highlighted}
        style={
          hover === -1
            ? { opacity: 1, transitionDuration: "0.25s" }
            : { opacity: 0, transitionDuration: "0.25s", pointerEvents: "none" }
        }
      >
        Explore our research areas
        <Image
          src={"/../public/images/icons/arrow.png"}
          width={40}
          height={10}
          style={{ aspectRatio: "2.15/1", scale: "0.75" }}
          quality={100}
        ></Image>
      </a>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className={"mySwiper" + " " + styles.slider_mobile}
        style={width < 600 ? { paddingBottom: "4rem" } : { display: "none" }}
      >
        {homeImages.map((slide, index) => {
          return (
            <SwiperSlide className={styles.slider_mobile__slide} key={index}>
              <div className={styles.slider_mobile__backdrop}></div>
              <div className={styles.slider_mobile__text}>
                <h1
                  className={styles.heading_slide + " " + utilities.bot_margin}
                >
                  {slide.title}
                </h1>
                <p
                  className={
                    styles.paragraph_slide + " " + utilities.bot_margin__small
                  }
                >
                  {slide.text}
                </p>
                <p
                  className={
                    styles.paragraph_slide + " " + utilities.bot_margin__small
                  }
                ></p>
                <a
                  href={slide.link}
                  className={styles.topic__link + " " + typography.paragraph}
                >
                  Lean more
                </a>
              </div>
              <Image
                className={styles.slide}
                src={slide.image}
                // style={slide.style}
                fill={true}
                quality={100}
                alt={"energy"}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
