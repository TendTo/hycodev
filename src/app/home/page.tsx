"use client";

import styles from "../../../styles/home.module.scss";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import InteractiveLines from "../interactive-lines/page";

function drawLines(canvas, slide, opacity) {
  const centerX = window.innerWidth / 4;
  const centerY = window.innerHeight / 2;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const rect = slide.getBoundingClientRect();
  const context = canvas.getContext("2d");
  const slideW = rect.right - rect.left;

  //Sets Up The Settings
  const gradient = context.createLinearGradient(
    centerX,
    centerY + 125,
    rect.right - slideW / 2,
    centerY + 125
  );
  gradient.addColorStop(0, "#3C97E7");
  gradient.addColorStop(0.3, "#3C97E7");
  gradient.addColorStop(0.4, "white");
  gradient.addColorStop(1, "white");
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  context.globalAlpha = opacity;
  context.lineWidth = 25;
  context.lineCap = "round";
  context.fillStyle = gradient;

  //So, the bottom line is... (Draws Bottom Line)
  context.arc(centerX, centerY + 125, 5, 50, 0, 1);
  context.fill();
  context.beginPath(); // Start a new path
  context.moveTo(centerX, centerY + 125); // Move the pen to (30, 50)
  context.lineTo(rect.right - slideW / 2, centerY + 125);
  context.fill(); // Render the path
  //Draws vertical lines for each slide with a circle on top
  let kof = 1;
  for (let i = 0; i < 6; i++) {
    context.beginPath(); // Start a new path
    context.moveTo(rect.right - (slideW / 2) * kof, centerY + 125); // Move the pen to (30, 50)
    context.lineTo(rect.right - (slideW / 2) * kof, centerY + 75);
    context.fill(); // Render the path

    context.beginPath();
    context.arc(rect.right - (slideW / 2) * kof, centerY + 75, 5, 50, 0, 1);
    context.fill();
    kof = kof + 1.33;
  }
}
export default function Home() {
  const homeImages = [
    {
      id: 0,
      image: "/../public/images/home/telecommunications.png",
    },
    {
      id: "1",
      image: "/../public/images/home/solar.png",
    },
    {
      id: "2",
      image: "/../public/images/home/glassbrain.jpeg",
    },
    {
      id: "3",
      image: "/../public/images/home/quantum_computing.png",
    },
    {
      id: "4",
      image: "/../public/images/home/fundamental.png",
    },
    {
      id: "5",
      image: "/../public/images/home/water.png",
    },
  ];
  // const [hover, setHover] = useState<boolean | null>(null);
  //
  // const handleMouseEnter = () => {
  //     setHover(true);
  // };
  //
  // const handleMouseLeave = () => {
  //     setHover(false);
  // };
  const canvasRef = useRef(null);
  const slideRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const slide = slideRef.current;
    drawLines(canvas, slide, true);
  }, []);
  return (
    <div className={styles.container}>
      <InteractiveLines />
      <div className={styles.container_down}>
        <button className={styles.container_down__button}>
          <div className={styles.container_down__arrow}></div>
        </button>
      </div>
      {/*<div className={styles.background}>*/}
      {/*  <Image*/}
      {/*    src={"/../public/images/background.png"}*/}
      {/*    alt={"ew"}*/}
      {/*    fill={true}*/}
      {/*  />*/}
      {/*</div>*/}

      {/*<div className={styles.container_graph}>*/}
      {/*    <div className={styles.graph}>*/}
      {/*        <div>*/}

      {/*        </div>*/}
      {/*    </div>*/}
      {/*</div>*/}
      <canvas className={styles.lines} ref={canvasRef}></canvas>
      <div className={styles.container_text}>
        <h1 className={styles.heading_primary}>HyCoDeV Lab</h1>
        <p>
          Where we research about formal methods for control, design and
          verification of hybrid systems.
        </p>
        <div className={styles.container_text_logos}>
          <Image
            src={"/../public/images/home/mpi-sws.png"}
            width={200}
            height={35}
            quality={100}
            key={"/../public/images/home/mpi-sws.png"}
          ></Image>
          <Image
            src={"/../public/images/home/ncl_logo.png"}
            width={200}
            height={60}
            quality={100}
            key={"/../public/images/home/ncl_logo.png"}
          ></Image>
        </div>
        <button className={styles.container_text_button}>
          Explore our research areas
        </button>
      </div>
      <div className={styles.wrapper_showcase}>
        {homeImages.map((item, index) => (
          <div
            className={styles.topic__image}
            key={item.id}
            ref={slideRef}
            onMouseEnter={() => setOpacityNone(canvasRef, slideRef)}
            onMouseLeave={() => setOpacityNormal(canvasRef, slideRef)}
          >
            <div className={styles.topic__backdrop}></div>
            {/*<div className={styles.backdrop}></div>*/}
            <div className={styles.topic__text}>
              <h1 className={styles.heading_slide}>
                Brain Modelling and Control
              </h1>
              <p className={styles.paragraph_slide}>
                Epileptic seizures put a stark burden on affected individuals.
                In an attempt to alleviate this, we reformulate the task of
                avoiding ‘states’ of seizure using control theory and formal
                methods.
              </p>
              <a className={styles.topic__link}>Lean more</a>
            </div>
            <Image
              className={styles.slide}
              src={item.image}
              height={1920}
              width={1080}
              quality={100}
              alt={"energy"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
function setOpacityNone(canvasRef, slideRef) {
  for (let i = 10; i >= 0; i--) {
    const canvas = canvasRef.current;
    const slide = slideRef.current;

    setTimeout(() => {
      console.log("waiting!");
    }, 100);
    drawLines(canvas, slide, i / 10);
  }

  console.log("entered");
}

function setOpacityNormal(canvasRef, slideRef) {
  for (let i = 0; i < 5; i++) {
    const canvas = canvasRef.current;
    const slide = slideRef.current;
    drawLines(canvas, slide, true);
  }
  console.log("entered");
}
