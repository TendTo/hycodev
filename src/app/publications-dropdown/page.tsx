"use client";
import styles from "../../../styles/publication-dropdown.module.scss";
import typography from "../../../scss/base/_typography.module.scss";
import utilities from "../../../scss/base/_utilities.module.scss";
import button from "../../../styles/components/button.module.scss";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  AccordionIcon,
} from "@chakra-ui/react";
export default function PublicationDropdown() {
  return (
    <div>
      <Accordion className={styles.container} allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton pl={0}>
              <Box as="span" flex="1" textAlign="left">
                <h3 className={typography.heading_tertiary}>
                  Adaptive and sequential gridding procedures for the
                  abstraction and verification of stochastic processes
                </h3>
                <div className={typography.paragraph__small}>
                  <strong>Authors:</strong> Sadegh Esmaeil Zadeh Soudjani,
                  Alessandro Abate
                  <br />
                  <strong>Date: </strong>07/07/2023
                </div>
              </Box>
              <AccordionIcon boxSize={12} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className={styles.container__content}>
            <p className={typography.paragraph}>
              You have a background in Control Engineering, Computer Science,
              Mathematics or related areas and want to work on cutting-edge
              research paving the way for designing modern autonomous systems
              that operate in safety-critical applications? Then these positions
              are for you! The topics could range from establishing theoretical
              foundations of (stochastic) dynamical systems to application of
              techniques to autonomous vehicles and energy systems. The
              positions will bridge the gap between formal methods and
              data-driven analysis while providing certification on satisfying
              the (safety) requirements. We will develop case studies in
              collaboration with Siemens on autonomous vehicles, Netherlands
              Aerospace Agency, or the Smart Grid Lab. We are looking for
              candidates with background in control theory, system
              identification, multi-agent systems, stochastic systems, formal
              methods, or related areas. For further inquiries, contact Prof
              Sadegh Soudjani with your full application materials by clicking
              the 'apply' button.
            </p>

            <button className={button.button + " " + typography.paragraph}>
              Apply
            </button>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {/*<details className={styles.container}>*/}
      {/*  <summary className={typography.heading_tertiary_thick}>*/}
      {/*    Adaptive and sequential gridding procedures for the abstraction and*/}
      {/*    verification of stochastic processes*/}
      {/*    <div*/}
      {/*      className={*/}
      {/*        typography.paragraph__small + " " + utilities.left_margin*/}
      {/*      }*/}
      {/*    >*/}
      {/*      <strong>Authors:</strong> Sadegh Esmaeil Zadeh Soudjani, Alessandro*/}
      {/*      Abate*/}
      {/*      <br />*/}
      {/*      <strong>Date: </strong>07/07/2023*/}
      {/*    </div>*/}
      {/*  </summary>*/}
      {/*  <p className={typography.paragraph + " " + styles.container__content}>*/}
      {/*    You have a background in Control Engineering, Computer Science,*/}
      {/*    Mathematics or related areas and want to work on cutting-edge research*/}
      {/*    paving the way for designing modern autonomous systems that operate in*/}
      {/*    safety-critical applications? Then these positions are for you! The*/}
      {/*    topics could range from establishing theoretical foundations of*/}
      {/*    (stochastic) dynamical systems to application of techniques to*/}
      {/*    autonomous vehicles and energy systems. The positions will bridge the*/}
      {/*    gap between formal methods and data-driven analysis while providing*/}
      {/*    certification on satisfying the (safety) requirements. We will develop*/}
      {/*    case studies in collaboration with Siemens on autonomous vehicles,*/}
      {/*    Netherlands Aerospace Agency, or the Smart Grid Lab. We are looking*/}
      {/*    for candidates with background in control theory, system*/}
      {/*    identification, multi-agent systems, stochastic systems, formal*/}
      {/*    methods, or related areas. For further inquiries, contact Prof Sadegh*/}
      {/*    Soudjani with your full application materials by clicking the 'apply'*/}
      {/*    button.*/}
      {/*  </p>*/}
      {/*</details>*/}
    </div>
  );
}
