"use client";

import typography from "../../../scss/base/_typography.module.scss";
import utilities from "../../../scss/base/_utilities.module.scss";
import styles from "../../../styles/page-join-us.module.scss";
import { OpenPositions } from "../../assets/open-positions";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  AccordionIcon,
  Button,
} from "@chakra-ui/react";
export default function joinUs() {
  return (
    <div className={styles.container}>
      <div className={styles.container_banner}>
        <div className={styles.container_image}>
          <Image
            src={"/../public/images/join_us_backdrop.jpg"}
            fill={true}
            objectFit={"cover"}
            quality={100}
            alt={"Picture of Members of HyCoDeV"}
          ></Image>
        </div>
        <div className={styles.container_banner__text}>
          <h1 className={typography.heading_primary}>Positions</h1>
          <p className={typography.paragraph}>
            We constantly look for excellent candidates to join the HyCoDeV
            Team. Highly-qualified and self-motivated candidates are encouraged
            to apply as soon as possible.
          </p>
        </div>
      </div>
      <div className={styles.container_calls}>
        <h2
          className={typography.heading_secondary + " " + utilities.bot_margin}
        >
          Open Calls
        </h2>
        <div className={styles.container_accordion}>
          <Accordion style={{ width: "100%" }} allowToggle>
            {OpenPositions.map((position, id) => {
              return (
                <AccordionItem key={id}>
                  <h2>
                    <AccordionButton>
                      <AccordionIcon boxSize={12} mr={8} />
                      <Box as="span" flex="2" textAlign="left">
                        <h3 className={typography.heading_tertiary}>
                          {position.title}
                        </h3>
                        <div className={typography.paragraph__small__lighter}>
                          <strong>Deadline: </strong>
                          {position.deadline}
                          <br />
                          <strong>Location: </strong>
                          {position.location}
                          <br />
                          <strong>Level: </strong>
                          {position.level}
                        </div>
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={8} pt={8} ml={20}>
                    <p className={typography.paragraph}>
                      {position.paragraph1}
                    </p>
                    <br />
                    <p className={typography.paragraph}>
                      {position.paragraph2}
                    </p>
                    <br />
                    <p className={typography.paragraph}>
                      {position.paragraph3}
                    </p>

                    <Button
                      size="lg"
                      style={{ textDecoration: "none" }}
                      className={
                        typography.paragraph + " " + utilities.top_margin
                      }
                    >
                      Apply
                    </Button>
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
        {/*<h2*/}
        {/*  className={typography.heading_secondary + " " + utilities.bot_margin}*/}
        {/*>*/}
        {/*  Closed Calls*/}
        {/*</h2>*/}
        {/*<div className={styles.container_accordion}>*/}
        {/*  <Accordion style={{ width: "100%" }} allowToggle>*/}
        {/*    {OpenPositions.map((position, id) => {*/}
        {/*      return (*/}
        {/*        <AccordionItem key={id}>*/}
        {/*          <h2>*/}
        {/*            <AccordionButton>*/}
        {/*              <AccordionIcon boxSize={12} mr={8} />*/}
        {/*              <Box as="span" flex="2" textAlign="left">*/}
        {/*                <h3 className={typography.heading_tertiary}>*/}
        {/*                  {position.title}*/}
        {/*                </h3>*/}
        {/*                <div className={typography.paragraph__small}>*/}
        {/*                  <strong>Deadline: </strong>*/}
        {/*                  {position.deadline}*/}
        {/*                  <br />*/}
        {/*                  <strong>Location: </strong>*/}
        {/*                  {position.location}*/}
        {/*                  <br />*/}
        {/*                  <strong>Level: </strong>*/}
        {/*                  {position.level}*/}
        {/*                </div>*/}
        {/*              </Box>*/}
        {/*            </AccordionButton>*/}
        {/*          </h2>*/}
        {/*          <AccordionPanel*/}
        {/*            pb={4}*/}
        {/*            className={utilities.top_margin__small}*/}
        {/*            style={{ marginLeft: "5rem" }}*/}
        {/*          >*/}
        {/*            <p className={typography.paragraph}>*/}
        {/*              {position.paragraph1}*/}
        {/*            </p>*/}
        {/*            <br />*/}
        {/*            <p className={typography.paragraph}>*/}
        {/*              {position.paragraph2}*/}
        {/*            </p>*/}
        {/*            <br />*/}
        {/*            <p className={typography.paragraph}>*/}
        {/*              {position.paragraph3}*/}
        {/*            </p>*/}

        {/*            <Button*/}
        {/*              size="lg"*/}
        {/*              style={{ textDecoration: "none" }}*/}
        {/*              className={*/}
        {/*                typography.paragraph + " " + utilities.top_margin*/}
        {/*              }*/}
        {/*            >*/}
        {/*              Apply*/}
        {/*            </Button>*/}
        {/*          </AccordionPanel>*/}
        {/*        </AccordionItem>*/}
        {/*      );*/}
        {/*    })}*/}
        {/*  </Accordion>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
