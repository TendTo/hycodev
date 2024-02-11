import styles from "../../styles/components/footer.module.scss";
import typography from "../../scss/base/_typography.module.scss";
import Image from "next/image";
import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.container__top}>
        <div className={styles.container__site}>
          <a className={styles.container__logo + " " + styles.logo} href={"/"}>
            <Image
              src={"/../public/images/icons/hycodev.png"}
              width={66}
              height={55}
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
            <h3 className={typography.paragraph_highlighted}>
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

        <a href={"https://www.mpi-sws.org/"} target={"_blank"}>
          <Image
            src={"/../public/images/home/mpi-sws.png"}
            width={175}
            height={30}
            quality={100}
            key={"/../public/images/home/mpi-sws.png"}
            alt={"Max Planck Institute for Software Systems Logo"}
          ></Image>
        </a>
        <div className={styles.container__socialmedia}>
          <h3 className={typography.paragraph_highlighted}>Follow us</h3>
          <div className={styles.container__icons}>
            <a href={"https://twitter.com/hycodev1"} target={"_blank"}>
              <Image
                src={"/../public/images/icons/icon_twitter.png"}
                width={28}
                height={28}
                quality={100}
                alt={"Twitter Logo"}
              />
            </a>
            <a
              href={"https://www.youtube.com/@hycodevlab8736/featured"}
              target={"_blank"}
            >
              <Image
                src={"/../public/images/icons/icon_youtube.png"}
                width={28}
                height={28}
                quality={100}
                alt={"Youtube Logo"}
              />
            </a>
            <a
              href={"https://www.linkedin.com/company/96187475"}
              target={"_blank"}
            >
              <Image
                src={"/../public/images/icons/icon_linkedin.png"}
                width={28}
                height={28}
                quality={100}
                alt={"LinkedIn Logo"}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.container__bottom}>
        <p
          className={typography.paragraph__white}
          style={{ fontSize: "1.1rem !important" }}
        >
          Copyright ©2023 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
