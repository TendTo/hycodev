export const ProjectArticles = [
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
    id: "syscore",
    external: "false",
    title: "SySCoRe: Synthesis via Stochastic Coupling Relations ",
    category: "Data-Driven",
    year: "2023",
    image: [
      {
        link: "/images/publications/syscore_1.png",
        alt: "Package Delivery",
      },
      {
        link: "/images/publications/syscore_2.png",
        alt: "Satisfaction Probability",
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
    ],
    links: [
      {
        name: "Published Paper",
        link: "https://dl.acm.org/doi/abs/10.1145/3575870.3587123",
      },
      {
        name: "Virtual Capsule",
        link: "https://codeocean.com/capsule/1170779/tree/v2",
      },
      { name: "Case Study", link: "https://arxiv.org/abs/2304.07428" },
      {
        name: "Participation in Competition",
        link: "https://easychair.org/publications/paper/Nzr4",
      },
    ],
    papers: [
      {
        name: "ARCH-COMP22 Category Report: Stochastic Models",
        link: "https://easychair.org/publications/paper/Nzr4",
      },
      {
        name: "SySCoRe: Synthesis via Stochastic Coupling Relations",
        link: "https://dl.acm.org/doi/10.1145/3575870.3587123",
      },
      {
        name: "Bayesian Approach to Temporal Logic Control of Uncertain Systems",
        link: "https://arxiv.org/abs/2304.07428",
      },
      {
        name: "Poster Abstract: Data-Driven Correct-by-Design Control of Parametric Stochastic Systems✱",
        link: "https://dl.acm.org/doi/10.1145/3575870.3589547",
      },
      {
        name:
          "Verifying the Unknown: Correct-by-Design Control Synthesis for\n" +
          "Networks of Stochastic Uncertain Systems",
        link: "https://arxiv.org/pdf/2309.01276.pdf",
      },
      {
        name: "ARCH-COMP23 Category Report: Stochastic Models",
        link: "https://easychair.org/publications/paper/xZ8M",
      },
      {
        name: "Correct-by-Design Control of Parametric Stochastic Systems",
        link: "https://ieeexplore.ieee.org/document/9992723",
      },
    ],
  },
  {
    id: "symaware",
    external: "true",
    link: "https://www.symaware.eu/",
    title:
      "SymAware: Symbolic Logic Framework for Situational Awareness in Mixed Autonomy",
    category: "Abstraction-Based",
    year: "2023",
    image: [
      {
        link: "/images/projects/symaware.jpg",
        alt: "",
      },
    ],
  },
  {
    id: "code-cps",
    external: "false",
    title:
      "CodeCPS: Correct-by-Design Estimation and Control of Cyber-Physical Systems",
    category: "Abstraction-Free",
    year: "2023",
    image: [
      {
        link: "/images/projects/code-cps.jpg",
        alt: "",
      },
    ],
    sections: [
      {
        sectionHeading: "Introduction",
        paragraphs: [
          "Cyber-physical systems (CPS) can be found in all application domains, including smart power grids, robotics systems, autonomous cars and medical monitoring systems. A CPS is a system that has a tight interaction between physical components and computing elements (cyber parts). CPS are becoming ubiquitous due to rapid advances in computation, communication, and memory. The design and implementation of CPS have witnessed critical issues originating from the control software embedded in the system interacting with the physical elements. Examples of such undesired behaviours include the frequency of the power network deviating too much from its nominal value causing an electricity blackout, the crash of an aeroplane due to software bugs, or an autonomous car hitting a pedestrian. For instance, Cambridgeshire's power cut affected over one million customers in the UK in 2019, the Boeing 737 Max airliner was grounded in 2019 worldwide after 346 people died in two crashes causing a loss of £14.1 billion to the aviation industry, and Toyota recalled 65,000 cars in 2015 over a software bug. ",
          "The development of core control software running in the system is still ad hoc and error-prone and much of the engineering costs today go into ensuring that control software works correctly. Design of reliable CPS requires combining approaches from multiple disciplines including computer science, engineering and control theory that studies analysis and design of systems using their mathematical models. A major challenge in the development of CPS is the large differences in the design practices between the involved disciplines. Addressing such a challenge requires researchers who understand the system complexity as a whole, analyse the interaction between the cyber and the physical parts, and ensure that the CPS does not show undesired behaviours at the design stage. ",
          'Correct-by-design synthesis is a novel and emerging approach that uses a "mathematical description" or "model" of the CPS and designs control software with guarantees on the lack of undesired behaviours in the controlled CPS before it is implemented in the real world. Correct-by-design approaches, however, are currently limited to small and simple (linear) mathematical models due to the need for extremely large computational power for analysing the model. They also rely on exact mathematical models of the system, which is often not available and hard to construct. These limitations prevent the application of correct-by-design approaches to large complex CPS working in an uncertain environment. The CodeCPS project will provide a set of techniques and tools to overcome such limitations and push the boundaries of the CPS handled by correct-by-design approaches.',
        ],
      },
    ],
    papers: [
      {
        name: "Symbolic Qualitative Control for Stochastic Systems via Finite Parity Games⁎",
        link: "https://www.sciencedirect.com/science/article/pii/S2405896321012611",
      },
      {
        name: "Correct-by-Design Control of Parametric Stochastic Systems",
        link: "https://ieeexplore.ieee.org/document/9992723",
      },
      {
        name: "A direct symbolic algorithm for solving stochastic rabin games",
        link: "https://link.springer.com/chapter/10.1007/978-3-030-99527-0_5",
      },
      {
        name: "Translating omega-regular specifications to average objectives for model-free reinforcement learning",
        link: "https://par.nsf.gov/biblio/10329431",
      },
    ],
  },
];
