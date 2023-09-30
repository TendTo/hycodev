"use client";

import typography from "../../../scss/base/_typography.module.scss";
import utilities from "../../../scss/base/_utilities.module.scss";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import button from "../../../styles/components/button.module.scss";
import styles from "../../../styles/page-sadegh-soudjani.module.scss";
import Image from "next/image";

export default function Sadegh() {
  return (
    <div className={styles.container}>
      <div className={utilities.bot_margin}>
        <h1 className={typography.heading_primary}>Sadegh Soudjani </h1>
        <p className={typography.paragraph__lighter}>
          Research group leader of HyCoDeV and Associate Professor at Newcastle
          University.
        </p>
      </div>

      <div
        className={styles.container_introduction + " " + utilities.bot_margin}
      >
        <div className={styles.container_sadegh}>
          <Image
            src={"/../public/images/people/sadegh_soudjani.jpg"}
            fill={true}
          />
        </div>
        <div>
          <p className={typography.paragraph + " " + utilities.bot_margin}>
            I am currently an Associate Professor in Cyber-Physical Systems at
            Newcastle University, United Kingdom. My research aim is to develop
            an integrated environment for programming, verifying, and designing
            high-performance and scalable CPSs perceiving and acting in the
            uncertain physical world. I have developed and shaped my research
            vision on formal synthesis, abstraction, and verification (over
            probabilistic temporal specifications) of complex dynamical systems
            with application in cyber-physical systems (CPSs) particularly
            involving energy networks and autonomous systems. I have a BSc in
            Pure Mathematics, a BSc in Electrical Engineering, an MSc in Control
            Engineering, and a PhD in Systems & Control, all with distinction. I
            built my background in Computer Science during my PhD studies and
            postdoctoral experiences at TU Delft, Oxford University, and the Max
            Planck Institute for Software Systems.
          </p>
          <div className={styles.container_fact_boxes}>
            <ul className={styles.fact_box}>
              <h3 className={typography.paragraph_highlighted}>
                Research interests
              </h3>

              <li className={typography.paragraph}>Formal Synthesis</li>
              <li className={typography.paragraph}>
                Abstraction and Verification (over probabilistic temporal
                specifications)
              </li>
              <li className={typography.paragraph}>Cyber-Physical Systems</li>
              <li className={typography.paragraph}>
                Stochastic Hybrid Systems
              </li>
              <li className={typography.paragraph}>Smart Grids</li>
              <li className={typography.paragraph}>
                Power and Energy Networks
              </li>
              <li className={typography.paragraph}>Transportation Systems</li>
              <li className={typography.paragraph}>Systems Biology</li>
            </ul>
            <div>
              <ul
                className={styles.fact_box + " " + utilities.bot_margin__small}
                style={{ height: " 17rem" }}
              >
                <h3 className={typography.paragraph_highlighted}>Projects</h3>
                <li className={typography.paragraph}>MoVeS (2010-2013)</li>
                <li className={typography.paragraph}>SymAware (2022-2025)</li>
                <li className={typography.paragraph}>CodeCPS (2021-2024)</li>
                <li className={typography.paragraph}>Safe-CPS (2016-2017)</li>
                <li className={typography.paragraph}>AMBI (2014-2015)</li>
              </ul>
              <div className={styles.fact_box}>
                <h3 className={typography.paragraph_highlighted}>
                  Publications
                </h3>
                <p className={typography.paragraph}>
                  70 contributions. 46 at conferences and 24 in journals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "justify" }}>
        <p
          className={
            typography.heading_secondary + " " + utilities.bot_margin__small
          }
        >
          Open Positions
        </p>
        <p className={typography.paragraph + " " + utilities.bot_margin}>
          I always look for excellent PhD students interested in model-based and
          data-driven analysis of cyber-physical systems (e.g., autonomous
          systems modeled with dynamical equations). The main focus will be on
          the formal verification and synthesis of (stochastic) hybrid systems,
          i.e., dynamical systems exhibiting mixed discrete and continuous
          behaviour under the influence of uncertainty. Depending on the
          interest and background of candidates, research will include topics
          from control theory, probabilistic methods, logic, and machine
          learning.
        </p>
        <p
          className={
            typography.paragraph_highlighted + " " + utilities.bot_margin__small
          }
        >
          Candidate profile:
        </p>
        <ul className={styles.list + " " + utilities.bot_margin}>
          <li className={typography.paragraph}>
            Strong background in Control Theory, Computer Science, Mathematics,
            or closely related fields. Should have completed, or about to
            complete, a Bachelor's or Master's degree in one of the these areas.
          </li>
          <li className={typography.paragraph}>
            Solid programming skills in Matlab/C++/Python.
          </li>
        </ul>
        <p className={typography.paragraph}>
          Please send me your full application materials (a complete CV,
          transcripts, and motivation letter).
        </p>
        <button></button>
      </div>
      <Accordion
        className={styles.accordion}
        style={{ textAlign: "justify" }}
        allowToggle
      >
        <AccordionItem>
          <h2>
            <AccordionButton pl={0}>
              <Box as="span" flex="1" textAlign="left">
                <h3 className={typography.heading_secondary}>About me</h3>
              </Box>
              <AccordionIcon boxSize={12} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className={styles.accordion__content}>
            <p className={typography.paragraph + " " + utilities.bot_margin}>
              I have attracted research funding from the European Innovation
              Council (EIC), UK’s Research Council for Engineering and Physical
              Sciences (EPSRC), and the UK’s Centre for Doctoral Training. I am
              the coordinator and PI of the recent € 4 million EIC project to
              develop a symbolic logic framework for situational awareness in
              mixed autonomy. I have successfully secured 7 PhD studentships
              (total value of €728k). I am also supervising 4 PhD students
              jointly with other institutions (Max Plank Institute and Ludwig
              Maximillian University, Germany). My prestigious EPSRC New
              Investigator Award (€570k) received the absolute full mark from
              the reviews and was ranked first in the evaluation panel.
            </p>
            <p className={typography.paragraph + " " + utilities.bot_margin}>
              I have published 70 contributions in total, 46 at conferences and
              24 in Journals, including Transactions of the Institute of
              Electrical and Electronic Engineers (IEEE) and Lecture Notes in
              Computer Science (LNCS). My publications have attracted 1400+
              citations in total with h-index of 21 and an i10-index of 45
              according to Google Scholar. My papers are all accepted in A*
              conferences (CORE ranking) and flagship venues including IEEE TAC,
              Automatica, IEEE TCST, SIAM, NAHS, European Journal of Control,
              HSCC, ICCPS, CAV, EMSOFT, TACAS, ICALP, ATVA, QEST, CONCUR, iFM,
              ACC, CDC, ECC, IFAC, and IEEE Control Systems Letters.
            </p>

            <p className={typography.paragraph + " " + utilities.bot_margin}>
              My background and track record are full of awards of certificates
              for excellence in research and education demonstrating recognition
              of my scientific activities by the related communities. Two of my
              recent papers published at TACAS 2022 and HSCC 2020 were nominated
              for the best paper award (the top three/five papers of these
              conferences). My research has been very influential and successful
              in bringing together control theory and formal methods. This is
              widely recognised by both communities. For instance, I got the
              best paper award from the flagship International Conference on
              Quantitative Evaluation of Systems in 2018. My PhD thesis won the
              DISC Best Thesis Award in the Netherlands for the best PhD thesis
              in the field of Systems & Control awarded countrywide. I also won
              multiple silver medals in Mathematics Competitions and Electrical
              Engineering Olympiads, which shows my strong background in
              pursuing fundamental research at the intersection of Mathematics
              and Engineering. I have also received the Newcastle Teaching Award
              and the DISC Certificate from the Dutch Institute of Systems and
              Control.
            </p>

            <p className={typography.paragraph + " " + utilities.bot_margin}>
              I have successfully organised multiple international workshops
              co-located with major events (V2CPS 2016 co-located with iFM, SNR
              2019 and VARS 2021 co-located with CPS-IoT Week, ARCH 2020-2021
              Stochastic Category, co-located with IFAC), and the Demo/Poster
              sessions of ICCPS 2022. Most notably, the ARCH Workshop has been
              very successful as the prime international venue for all the
              researchers working on developing tools for stochastic systems. I
              have served on Program Committees of many international events
              (e.g., HSCC2022, FORMATS 2022, HSCC2021, ADHS2021, RTEST2020, NSV
              2019, V2CPS 2016, HSCC-RE 2017, HSCC-RE 2016), all at the
              interface of control theory and computer science. I am a member of
              the IEEE Technical Committee on Hybrid Systems and a member of the
              EPSRC Peer Review College and serve regularly as a reviewer for
              prestigious journals and conferences, as well as grants (e.g.
              EPSRC, MRC, NWO).
            </p>

            <p className={typography.paragraph + " " + utilities.bot_margin}>
              Please feel free to get in touch if you are interested in my
              research activities.
            </p>

            <button className={button.button + " " + typography.paragraph}>
              Apply
            </button>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton pl={0}>
              <Box as="span" flex="1" textAlign="left">
                <h3 className={typography.heading_secondary}>Highlights</h3>
              </Box>
              <AccordionIcon boxSize={12} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className={styles.accordion__content}>
            <ul className={typography.paragraph + " " + styles.list}>
              <li
                className={
                  typography.paragraph + " " + utilities.bot_margin__small
                }
              >
                Our survey paper on Automated Verification and Synthesis of
                Stochastic Hybrid Systems has been accepted in Automatica.
              </li>
              <li
                className={
                  typography.paragraph + " " + utilities.bot_margin__small
                }
              >
                My collaborator Kaushik Mallik completed his PhD with summa cum
                laude, the highest distinction for a PhD from Max Planck
                Institute for Software Systems. I had the pleasure of working
                with Kaushik during his PhD, and two of our papers were
                nominated for the best paper award in HSCC and TACAS.
              </li>
              <li
                className={
                  typography.paragraph + " " + utilities.bot_margin__small
                }
              >
                We have a new project called SymAware, which is a € 4 million
                project awarded by the European Innovation Council (EIC) in the
                Pathfinder call to perform cutting-edge research and to achieve
                breakthroughs in the strategic area of “awareness”. This was a
                competitive call across the whole of Europe with an acceptance
                rate of 9.7%. Among 403 proposals only 39 projects were
                successful. Investigators of SymAware include Sadegh Soudjani as
                the consortium lead, and the Co-Is are from KTH, Uppsala, TU
                Eindhoven, Siemens, and the Netherlands Aerospace Centre. We
                will soon advertise multiple positions for this project.
              </li>
              <li
                className={
                  typography.paragraph + " " + utilities.bot_margin__small
                }
              >
                My paper titled ‘A Direct Symbolic Algorithm for Solving
                Stochastic Rabin Games’ was presented at TACAS 2022 and is
                nominated for the Best Paper Award of the European Association
                for Theoretical Computer Science (EATCS). The article was
                considered to be in the top five of more than 400 papers, which
                is a fantastic achievement. You can read the full research
                article online.
              </li>
              <li
                className={
                  typography.paragraph + " " + utilities.bot_margin__small
                }
              >
                Best repeatability prize from the 7th IFAC Conference on
                Analysis and Design of Hybrid Systems (ADHS'21) for the paper
                "Data-driven safety verification of stochastic systems via
                barrier certificates"
              </li>
              <li
                className={
                  typography.paragraph + " " + utilities.bot_margin__small
                }
              >
                EPSRC New Investigator Award, May 2021 (£484k to work on the
                CodeCPS project: Correct-by-design estimation and control of
                cyber-physical systems)
                <ul>
                  <li
                    className={
                      typography.paragraph + " " + utilities.bot_margin__small
                    }
                  >
                    This proposal was ranked first by the EPSRC panel (it
                    received the absolute full score, three reviews 6 out of 6),
                    comments from the reviewers:“The PI is undoubtedly a rising
                    star in the areas of formal verification and formal methods
                    for dynamical systems" and “The PI is an expert in formal
                    methods and has already, despite his career stage,
                    ground-breaking contributions and farreaching ideas.”
                  </li>
                </ul>
              </li>
              <li
                className={
                  typography.paragraph + " " + utilities.bot_margin__small
                }
              >
                Newcastle Teaching Award in June 2020
              </li>
              <li
                className={
                  typography.paragraph + " " + utilities.bot_margin__small
                }
              >
                HSCC Best Paper Nomination (top three papers) in April 2020
              </li>
              <li
                className={
                  typography.paragraph + " " + utilities.bot_margin__small
                }
              >
                HSCC Best Poster/Demo Award in April 2020
              </li>
              <li
                className={
                  typography.paragraph + " " + utilities.bot_margin__small
                }
              >
                QEST Best Paper Award in September 2018
              </li>
              <li
                className={
                  typography.paragraph + " " + utilities.bot_margin__small
                }
              >
                DISC Best PhD Thesis Award in 2015 (Assessed nationwide in the
                area of Systems and Control in the Netherlands)
              </li>
            </ul>

            <button className={button.button + " " + typography.paragraph}>
              Apply
            </button>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
