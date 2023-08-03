"use client";

import styles from "../../../styles/home.module.scss";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const homeImages = [
    "/../public/images/home/telecommunications.png",
    "/../public/images/home/energy_systems.png",
    "/../public/images/home/glassbrain.jpeg",
    "/../public/images/home/fundamental.png",
    "/../public/images/home/quantum_computing.png",
    "/../public/images/home/water.png",
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

  return (
    <div className={styles.container}>
      <div className={styles.container_down}>
        <button className={styles.container_down__button}>
          <div className={styles.container_down__arrow}></div>
        </button>
      </div>
      <div className={styles.background}>
        <Image
          src={"/../public/images/background.png"}
          alt={"ew"}
          fill={true}
        />
      </div>
      <div className={styles.container_text}>
        <h1 className={styles.heading_primary}>HyCoDeV Lab</h1>
        <p>
          Where we research about formal methods for control, design and
          verification of hybrid systems.
        </p>
        <p>Hover over the images to discover the several application areas</p>
      </div>

      {/*<div className={styles.container_graph}>*/}
      {/*    <div className={styles.graph}>*/}
      {/*        <div>*/}

      {/*        </div>*/}
      {/*    </div>*/}
      {/*</div>*/}
      <span>
        <div className={styles.wrapper_showcase}>
          {homeImages.map((item, index) => (
            <div className={styles.topic__image}>
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
                src={item}
                height={1920}
                width={1080}
                quality={100}
                alt={"energy"}
              />
            </div>
          ))}
        </div>
      </span>
    </div>
  );
}
