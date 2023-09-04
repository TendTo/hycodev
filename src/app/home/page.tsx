"use client";

import styles from "../../../styles/home.module.scss";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import InteractiveLines from "../interactive-lines/page";
import typography from "../../../scss/base/_typography.module.scss";
import utilities from "../../../scss/base/_utilities.module.scss";
import button from "../../../styles/components/button.module.scss";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

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
        <h1 className={styles.heading_primary + " " + utilities.bot_margin}>
          HyCoDeV Lab
        </h1>
        <p className={typography.paragraph + " " + utilities.bot_margin}>
          Where we research about formal methods for control, design and
          verification of hybrid systems.
        </p>
        <div
          className={styles.container_text_logos + " " + utilities.bot_margin}
        >
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
        <button className={button.button + " " + typography.paragraph}>
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

function three() {
  // import "./style.css";

  const gltfLoader = new GLTFLoader();
  // Canvas
  const canvas = document.querySelector("canvas.webgl");

  // Scene
  const scene = new THREE.Scene();

  //Hycodev Logo

  gltfLoader.load("../../../public/hycodev.gltf", (gltf) => {
    scene.add(gltf.scene);
  });

  // Objects
  const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);

  // Materials

  const material = new THREE.MeshBasicMaterial();
  material.color = new THREE.Color(0xff0000);

  // Mesh
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  // Lights

  const pointLight = new THREE.PointLight(0xffffff, 0.1);
  pointLight.position.x = 2;
  pointLight.position.y = 3;
  pointLight.position.z = 4;
  scene.add(pointLight);

  /**
   * Sizes
   */
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  /**
   * Camera
   */
  // Base camera
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 2;
  scene.add(camera);

  // Controls
  // const controls = new OrbitControls(camera, canvas)
  // controls.enableDamping = true

  /**
   * Renderer
   */
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  /**
   * Animate
   */

  const clock = new THREE.Clock();

  const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Update objects
    sphere.rotation.y = 0.5 * elapsedTime;

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };

  tick();
}
