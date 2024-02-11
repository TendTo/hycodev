import styles from "../../styles/components/the-team-sadegh.module.scss";
import Image from "next/image";
import typography from "../../scss/base/_typography.module.scss";
import utilities from "../../scss/base/_utilities.module.scss";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Button,
} from "@chakra-ui/react";

import { PhoneIcon, EmailIcon, InfoOutlineIcon } from "@chakra-ui/icons";
const TheTeamSadegh = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sadegh_box}>
        <div className={styles.image_wrapper}>
          <Image
            src="/../public/images/people/sadegh_soudjani.jpg"
            fill={true}
            objectFit={"cover"}
            alt={"Picture of Sadegh Soudjani"}
          />
        </div>
        <div className={styles.sadegh_box__text}>
          <div>
            <h2 className={typography.heading_secondary}>Sadegh Soudjani</h2>
            <h3
              className={
                typography.paragraph__lighter + " " + utilities.bot_margin
              }
            >
              Associate Professor
            </h3>
          </div>

          <p className={typography.paragraph + " " + utilities.bot_margin}>
            My research aim is to develop an integrated environment for
            programming, verifying, and designing high-performance and scalable
            CPSs perceiving and acting in the uncertain physical world. I have
            developed and shaped my research vision on formal synthesis,
            abstraction, and verification (over probabilistic temporal
            specifications) of complex dynamical systems with application in
            cyber-physical systems (CPSs) particularly involving energy networks
            and autonomous systems. I have a BSc in Pure Mathematics, a BSc in
            Electrical Engineering, an MSc in Control Engineering, and a PhD in
            Systems & Control, all with distinction.
          </p>
          <div className={styles.contact_wrapper}>
            <div className={styles.contact_wrapper}>
              <Popover>
                <PopoverTrigger>
                  <Button
                    className={typography.paragraph}
                    leftIcon={<EmailIcon />}
                  >
                    Email
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverBody
                    className={
                      typography.paragraph + " " + utilities.padding_all
                    }
                  >
                    sadegh@mpi-sws.org
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger>
                  <Button
                    className={typography.paragraph}
                    leftIcon={<PhoneIcon />}
                  >
                    Phone
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />

                  <PopoverBody className={typography.paragraph}>
                    +44 191 208 7856
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger>
                  <Button
                    className={typography.paragraph}
                    leftIcon={<InfoOutlineIcon />}
                  >
                    Office
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverBody className={typography.paragraph}>
                    6.035, Urban Sciences Building, 1 Science Square, Newcastle
                    Upon Tyne, NE4 5TG, United Kingdom
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </div>
            <Button
              className={typography.paragraph__small__white}
              colorScheme="green"
              variant="solid"
            >
              <a href={"/ssoudjani"}>Learn More</a>
            </Button>
          </div>
        </div>
        {/*<div className={styles.sadegh_box__text__small}>*/}
        {/*  <div>*/}
        {/*    <h2 className={typography.heading_secondary}>Research Interests</h2>*/}
        {/*  </div>*/}
        {/*  <ul className={typography.paragraph + " " + utilities.bot_margin}>*/}
        {/*    <li>Formal Synthesis</li>*/}
        {/*    <li>*/}
        {/*      Abstraction and Verification (over probabilistic temporal*/}
        {/*      specifications)*/}
        {/*    </li>*/}
        {/*    <li>Cyber-Physical Systems</li>*/}
        {/*    <li>Stochastic Hybrid Systems</li>*/}
        {/*    <li>Smart Grids</li>*/}
        {/*    <li>Power and Energy Networks</li>*/}
        {/*    <li>Transportation Systems</li>*/}
        {/*    <li>Systems Biology</li>*/}
        {/*  </ul>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};
export default TheTeamSadegh;
