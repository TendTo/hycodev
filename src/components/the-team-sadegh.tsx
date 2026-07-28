import styles from "../../scss/components/the-team-sadegh.module.scss";
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
            src="/images/people/sadegh_soudjani.jpg"
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
              Full Professor and Chair in Cyber-Physical Systems, University of Birmingham, UK
            </h3>
          </div>
          <p className={typography.paragraph + " " + utilities.bot_margin}>
            Sadegh Soudjani is Full Professor and Chair in Cyber-Physical Systems, and Director of Global Engagement at the University of Birmingham, United Kingdom. He is also a Senior Research Group Leader at the Max Planck Institute for Software Systems, Germany. Previously, he was the Director of the Advanced Model-Based Engineering & Reasoning (AMBER) Group at Newcastle University (40+ members), United Kingdom. Prior to being a faculty member, Sadegh was a postdoctoral researcher at Oxford University (UK) and the Max Planck Institute (Germany). He got his Ph.D. degree from the Delft Centre for Systems and Control, TU Delft, the Netherlands. Sadegh's research addresses Safe Autonomy and AI challenges using symbolic and formal techniques with the goal of developing an integrated environment for programming, verifying, and designing high-performance cyber-physical systems perceiving and acting in the uncertain physical world. He is the recipient of the ERC Consolidator Grant (Auto-CyPheR), and is the coordinator and principal investigator of the SymAware Project funded by the European Innovation Council. He has also received the EPSRC New Investigator Award, Newcastle Teaching Award, the Best Paper Award from QEST, and the DISC Best PhD Thesis Award.
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
                      typography.paragraph +
                      " " +
                      utilities.padding_all +
                      " " +
                      styles.container__email
                    }
                  >
                    <Image
                      src="/images/sadegh/sadegh_email.jpg"
                      fill={true}
                      alt="Sadegh Soudjani Email"
                    />
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              {/*<Popover>*/}
              {/*  <PopoverTrigger>*/}
              {/*    <Button*/}
              {/*      className={typography.paragraph}*/}
              {/*      leftIcon={<PhoneIcon />}*/}
              {/*    >*/}
              {/*      Phone*/}
              {/*    </Button>*/}
              {/*  </PopoverTrigger>*/}
              {/*  <PopoverContent>*/}
              {/*    <PopoverArrow />*/}

              {/*    <PopoverBody className={typography.paragraph}>*/}
              {/*      +44 191 208 7856*/}
              {/*    </PopoverBody>*/}
              {/*  </PopoverContent>*/}
              {/*</Popover>*/}
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
                    Room 213, Building G 26, Paul-Ehrlich-Strasse,D-67663
                    Kaiserslautern, Germany
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
        {/*<div className={scss.sadegh_box__text__small}>*/}
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
