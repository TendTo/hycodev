"use client";

import styles from "../../styles/components/navigation.module.scss";
import typography from "../../scss/base/_typography.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Navigation = () => {
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
  const [isOpen, setIsOpen] = useState(false);
  const imageSizeDesktop = {
    width: (392 / 3) * 1.25,
    height: (100 / 3) * 1.25,
  };
  const imageSizeMobile = {
    width: 392 / 2.5,
    height: 100 / 2.5,
  };
  const checkHandler = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };
  const variantsList = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const variantsItem = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: -50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <nav className={styles.container}>
      <a href={"/home"} className={styles.navbar_image}>
        <Image
          src="/images/logo-hycodev.png"
          alt={"hycodev logo"}
          fill={true}
        />
      </a>
      <div
        style={
          width < 800
            ? {
                display: "flex",
                width: "4rem",
                height: "4rem",
                marginRight: "2rem",
                justifyContent: "center",
                alignItems: "center",
              }
            : { display: "none" }
        }
      >
        <input
          type="checkbox"
          className={styles.nav_toggle}
          id="nav-toggle"
          checked={!isOpen}
          onChange={checkHandler}
        />
        <label className={styles.navicon} htmlFor="nav-toggle">
          <span className={styles.navicon_bar}></span>
          <span className={styles.navicon_bar}></span>
          <span className={styles.navicon_bar}></span>
        </label>
      </div>
      <div
        className={styles.links}
        style={width >= 800 ? { display: "block" } : { display: "none" }}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <Link href="/home" className={styles.navbar_item + " " + typography}>
          Home
        </Link>
        <Link href="/the-team" className={styles.navbar_item}>
          The Team
        </Link>
        <Link href="/publications-all" className={styles.navbar_item}>
          Publications
        </Link>
        <Link href="/projects" className={styles.navbar_item}>
          Projects
        </Link>
        <Link href="/software" className={styles.navbar_item}>
          Software
        </Link>
        <Link href="/join-us" className={styles.navbar_item}>
          Join Us
        </Link>
      </div>
      <motion.nav
        className={styles.links}
        style={
          isOpen && width < 800 ? { display: "block" } : { display: "none" }
        }
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <motion.ul variants={variantsList}>
          <motion.li
            variants={variantsItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/home"
              className={
                styles.navbar_item + " " + typography.heading_secondary
              }
            >
              Home
            </Link>
          </motion.li>
          <motion.li
            variants={variantsItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/the-team"
              className={
                styles.navbar_item + " " + typography.heading_secondary
              }
            >
              The Team
            </Link>
          </motion.li>
          <motion.li
            variants={variantsItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/publications-all"
              className={
                styles.navbar_item + " " + typography.heading_secondary
              }
            >
              Publications
            </Link>
          </motion.li>
          <motion.li
            variants={variantsItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/projects"
              className={
                styles.navbar_item + " " + typography.heading_secondary
              }
            >
              Projects
            </Link>
          </motion.li>
          <motion.li
            variants={variantsItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/software"
              className={
                styles.navbar_item + " " + typography.heading_secondary
              }
            >
              Software
            </Link>
          </motion.li>
          <motion.li
            variants={variantsItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/join-us"
              className={
                styles.navbar_item + " " + typography.heading_secondary
              }
            >
              Join Us
            </Link>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </nav>
  );
};
export default Navigation;
