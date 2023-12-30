export const PublicationArticles = [
  // {
  //   id: "",
  //   title: "",
  //   category: "",
  //   year: "",
  //   image: [
  //     {
  //       link: "",
  //       alt: "",
  //     },
  //   ],
  //   relatedArticles: "",
  //   researchers: [
  //     {
  //       name: "",
  //       role: "",
  //       image: "",
  //     },
  //   ],
  //   sections: [
  //     {
  //       sectionHeading: "",
  //       paragraphs: [
  //         "",
  //       ],
  //     },
  //   ],
  // },
  {
    id: "0",
    title: "SySCoRe: Synthesis via Stochastic Coupling Relations ",
    category: "Data-Driven",
    year: "2023",
    image: [
      {
        link: "/../public/images/publications/syscore_1.png",
        alt: "Package Delivery",
      },
      {
        link: "/../public/images/publications/syscore_2.png",
        alt: "Satisfaction Probability",
      },
    ],
    relatedArticles: "",
    researchers: [
      {
        name: "Oliver Schön",
        role: "PhD Student",
        image: "/../public/images/people/oliver_schon.jpg",
      },
      {
        name: "Sadegh Soudjani",
        role: "Researcher",
        image: "/../public/images/people/sadegh_soudjani_square.jpg",
      },
      {
        name: "Birgit Van Huijgevoort",
        role: "Researcher",
        image: "/../public/images/people/birgit_van_huijgevoort.jpg",
      },
      {
        name: "Sofie Haesaert",
        role: "Researcher",
        image: "/../public/images/people/sofie_haesaert.jpg",
      },
    ],
    sections: [
      {
        sectionHeading: "What is SySCoRe and what does it do?",
        paragraphs: [
          "SySCoRe is a MATLAB toolbox for temporal logic control synthesis of discrete-time continuous-state stochastic dynamical systems.",
          "The fully automated implementation starts from a system description and a temporal logic specification and computes a robust controller alongside robust quantified bounds on the probability of satisfying the given property based on space discretization. The tool is based on establishing simulation relations between stochastic processes based on coupling the underlying stochastic distributions.",
          "The developed algorithms compute two precision parameters (ε, δ), which bound the deviations in both the output trajectories (ε) and the transition probabilities (δ) of the models.",
        ],
      },
      {
        sectionHeading: "Advantages of Using SySCoRe",
        paragraphs: [
          "The main advantage of SySCoRe compared to alternative tools is that the computed error does not grow linearly in time, which makes the tool applicable to infinite horizon properties and unbounded disturbances. The current version of SySCoRe supports nonlinear dynamics, complex co-safe temporal logic specifications over infinite horizons, model-order reduction, arbitrary (possibly unbounded) additive disturbance, and fast tensor computations.",
          "The SymAware framework will use compositional logic, symbolic computations, formal reasoning, and uncertainty quantification to characterise and support situational awareness of MAS in its various dimensions, sustaining awareness by learning in social contexts, quantifying risks based on limited knowledge, and formulating risk-aware negotiation of task distributions. Positions are currently being advertised for this project and details can be found here.",
        ],
      },
      {
        sectionHeading: "More About SySCoRe",
        paragraphs: [
          "Read More about SySCoRe in a published paper.",
          "Virtual Capsule to Run SySCoRe.",
          "Package Delivery Case Study Using SySCoRe.",
          "SySCoRe's Participation in a Friendly Competition of Similar Tools.",
        ],
      },
    ],
  },
  {
    id: "1",
    title:
      "SymAware: Symbolic Logic Framework for Situational Awareness in Mixed Autonomy",
    category: "Abstraction-Based",
    year: "2023",
    image: [
      {
        link: "/../public/images/article.png",
        alt: "",
      },
    ],
    researchers: [
      {
        name: "Oliver Schön",
        role: "PhD Student",
        image: "/../public/images/people/oliver_schon.jpg",
      },
      {
        name: "Sadegh Soudjani",
        role: "Researcher",
        image: "/../public/images/people/sadegh_soudjani.jpg",
      },
      {
        name: "Birgit Van Huijgevoort",
        role: "Researcher",
        image: "/../public/images/people/birgit_van_huijgevoort.jpg",
      },
      {
        name: "Sofie Haesaert",
        role: "Researcher",
        image: "/../public/images/people/sofie_haesaert.jpg",
      },
    ],
    sections: [
      {
        sectionHeading: "Introduction",
        paragraphs: [
          "SymAware provides a novel conceptual framework for situational awareness in multi-agent systems that is compatible with the internal models and specifications of robot agents and that enables the safe simultaneous operation of collaborating autonomous agents and humans.",
        ],
      },
      {
        sectionHeading: "What are the aim of the project?",
        paragraphs: [
          "SymAware addresses the fundamental need for a new conceptual framework for awareness in multi-agent systems (MASs) that is compatible with the internal models and specifications of robotic agents and that enables the safe simultaneous operation of collaborating autonomous agents and humans. The goal of SymAware is to provide a comprehensive framework for situational awareness to support sustainable autonomy via agents that actively perceive risks and collaborate with other robots and humans to improve their awareness and understanding while fulfilling complex and dynamically changing tasks.",
        ],
      },
    ],
  },
  {
    id: "2",
    title:
      "CodeCPS: Correct-by-Design Estimation and Control of Cyber-Physical Systems",
    category: "Abstraction-Free",
    year: "2023",
    image: [
      {
        link: "/../public/images/article.png",
        alt: "",
      },
    ],
    researchers: [
      {
        name: "Oliver Schön",
        role: "PhD Student",
        image: "/../public/images/people/oliver_schon.jpg",
      },
      {
        name: "Sadegh Soudjani",
        role: "Researcher",
        image: "/../public/images/people/sadegh_soudjani.jpg",
      },
      {
        name: "Birgit Van Huijgevoort",
        role: "Researcher",
        image: "/../public/images/people/birgit_van_huijgevoort.jpg",
      },
      {
        name: "Sofie Haesaert",
        role: "Researcher",
        image: "/../public/images/people/sofie_haesaert.jpg",
      },
    ],
    sections: [
      {
        sectionHeading: "Introduction",
        paragraphs: [
          "Cyber-physical systems (CPS) can be found in all application domains, including smart power grids, robotics systems, autonomous cars and medical monitoring systems. A CPS is a system that has a tight interaction between physical components and computing elements (cyber parts). CPS are becoming ubiquitous due to rapid advances in computation, communication, and memory. The design and implementation of CPS have witnessed critical issues originating from the control software embedded in the system interacting with the physical elements. Examples of such undesired behaviours include the frequency of the power network deviating too much from its nominal value causing an electricity blackout, the crash of an aeroplane due to software bugs, or an autonomous car hitting a pedestrian. For instance, Cambridgeshire's power cut affected over one million customers in the UK in 2019, the Boeing 737 Max airliner was grounded in 2019 worldwide after 346 people died in two crashes causing a loss of £14.1 billion to the aviation industry, and Toyota recalled 65,000 cars in 2015 over a software bug. ",
          "The development of core control software running in the system is still ad hoc and error-prone and much of the engineering costs today go into ensuring that control software works correctly. Design of reliable CPS requires combining approaches from multiple disciplines including computer science, engineering and control theory that studies analysis and design of systems using their mathematical models. A major challenge in the development of CPS is the large differences in the design practices between the involved disciplines. Addressing such a challenge requires researchers who understand the system complexity as a whole, analyse the interaction between the cyber and the physical parts, and ensure that the CPS does not show undesired behaviours at the design stage. ",
        ],
      },
      {
        sectionHeading: "",
        paragraphs: [],
      },
    ],
  },
  {
    id: "3",
    title: "Power and Energy Systems",
    category: "Example Driven",
    year: "2023",
    image: [
      {
        link: "/../public/images/article.png",
        alt: "",
      },
    ],
    relatedArticles: "",
    researchers: [
      {
        name: "",
        role: "",
        image: "",
      },
    ],
    sections: [
      {
        sectionHeading: "",
        paragraphs: [
          "Power and energy systems are essential for modern society as they provide us with electricity, heating, and other aspects of our daily life we often take for granted. In particular, the power grid is changing dramatically. There is a growing trend of electrification across the network, this involves an increase in devices like electric vehicles (EVs) providing more system load as well as increased renewable generation such as solar panels (PVs) and wind turbines. ",
          "The challenge surrounding this change is one of stability. The traditional power grid focuses on a balance between power generation and power load. Uncertain generation devices, like renewables, and loads which can be connected and disconnected quickly, like EVs, make it harder to guarantee grid stability. The traditional method to control grid stability involved changing the power generation setpoint of generation devices. A future method is likely to involve controlling demand-side (load-side) devices as they can react faster to changes within the network.",
          "Our research in this area will investigate a few areas:",
          "how we can attempt to maintain grid stability under increased uncertainty?",
          "how can devices like EVs, energy storage systems (ESSs) and active buildings contribute to demand-side control?",
          "As synchronous turbines are removed from the power grid how can we maintain control with reduced system inertia?",
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Data-Driven Control",
    category: "Example Driven",
    year: "2023",
    image: [
      {
        link: "",
        alt: "",
      },
    ],
    relatedArticles: "",
    researchers: [
      {
        name: "",
        role: "",
        image: "",
      },
    ],
    sections: [
      {
        sectionHeading: "Data-Driven Control",
        paragraphs: [
          "Complex dynamical systems usually have to collaborate computational elements controlling physical entities. The composition of continuous and discrete models is essential for capturing the behavior of such systems. Verification and synthesis of these dynamical systems are algorithmically studied using abstraction techniques and model checking tools. In this research, towards the goal of developing principled data-driven methods for control and decision-making, we study the interplay between formal verification, machine learning, and dynamics in real-world systems. Application areas of the research include, among others, the efficiency of buildings and systems biology.",
        ],
      },
    ],
  },
];
