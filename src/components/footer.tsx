import styles from "../../styles/components/footer.module.scss";
import typography from "../../scss/base/_typography.module.scss";
import Image from "next/image";
import React from "react";
import Link from "next/link";
const Footer = () => {
  const date = new Date();
  const current_year = date.getFullYear();

  return (
    <footer className={styles.container}>
      <div className={styles.container__top}>
        <div className={styles.container__site}>
          <a
            className={styles.container__logo + " " + styles.hycodev_logo}
            href={"/"}
          >
            <Image
              src={"/images/icons/hycodev.png"}
              fill={true}
              quality={100}
              alt={"HyCoDeV Logo"}
            ></Image>
          </a>
          <div
            style={{
              display: "flex",
              flexFlow: "column wrap",
              justifyContent: "space-around",
            }}
          >
            <h3
              className={typography.paragraph_highlighted}
              style={{
                textAlign: "center",
              }}
            >
              Hybrid Systems: Control, Design and Verification Lab
            </h3>
            <div className={styles.container__links}>
              <Link
                href={"/the-team"}
                className={styles.paragraph + " " + styles.link}
              >
                THE TEAM
              </Link>
              <Link
                href={"/publications-all"}
                className={styles.paragraph + " " + styles.link}
              >
                PUBLICATIONS
              </Link>
              <Link
                href={"/software"}
                className={styles.paragraph + " " + styles.link}
              >
                SOFTWARE
              </Link>
              <Link
                href={"/join-us"}
                className={styles.paragraph + " " + styles.link}
              >
                JOIN US
              </Link>
            </div>
          </div>
        </div>

        <a
          href={"https://www.mpi-sws.org/"}
          target={"_blank"}
          className={styles.mpi_logo}
        >
          <Image
            src={"/images/home/mpi-sws.png"}
            fill={true}
            quality={100}
            key={"/images/home/mpi-sws.png"}
            alt={"Max Planck Institute for Software Systems Logo"}
          ></Image>
        </a>
        <div className={styles.container__socialmedia}>
          <h3 className={typography.paragraph_highlighted}>Follow us</h3>
          <div className={styles.container__icons}>
            <a
              href={"https://twitter.com/hycodev1"}
              target={"_blank"}
              className={styles.image_social}
            >
              <Image
                src={"/images/icons/icon_twitter.png"}
                fill={true}
                quality={100}
                alt={"Twitter Logo"}
              />
            </a>
            <a
              href={"https://www.youtube.com/@hycodevlab8736/featured"}
              target={"_blank"}
              className={styles.image_social}
            >
              <Image
                src={"/images/icons/icon_youtube.png"}
                fill={true}
                quality={100}
                alt={"Youtube Logo"}
              />
            </a>
            <a
              href={"https://www.linkedin.com/company/96187475"}
              target={"_blank"}
              className={styles.image_social}
            >
              <Image
                src={"/images/icons/icon_linkedin.png"}
                fill={true}
                quality={100}
                alt={"LinkedIn Logo"}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.container__bottom}>
        <p className={typography.paragraph__small__white}>
          Copyright ©{current_year} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
