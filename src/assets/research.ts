export const IntroductionArticles = [
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
  //   projects: [
  //     {
  //       image: "",
  //       title: "",
  //       paragraph: "",
  //       researchers: "",
  //       papers: [
  //         {
  //           title: "",
  //           link: "",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    id: "communication-systems",
    category: "Communication Systems",
    white: "true",
    image: [
      {
        link: "/../public/images/home/saucer.jpg",
        alt: "Package Delivery",
      },
      {
        link: "/../public/images/publications/b3.png",
        alt: "Package Delivery",
      },
      {
        link: "/../public/images/publications/b5.png",
        alt: "Satisfaction Probability",
      },
    ],
    relatedArticles: "",
    researchers: [
      {
        name: "Omid Akbarzadeh",
        role: "PhD Student",
        contact: "o.akbarzadeh2@newcastle.ac.uk",
        image: "/../public/images/people/omid_akbarzadeh.png",
      },
      {
        name: "Sadegh Soudjani",
        role: "Researcher",
        contact: "",
        image: "/../public/images/people/sadegh_soudjani_square.jpg",
      },
    ],
    sections: [
      {
        paragraphs: [
          "Verification of Cyber-Physical Systems (CPS) with Communication Networks aims to ensure reliable, safe, and secure operation of complex systems integrating physical processes and networks. It's vital for applications like autonomous vehicles, smart grids, healthcare devices, and industrial automation. The challenge is developing methods to verify their intended behavior and prevent failures or vulnerabilities.",
          "Addressing the CPS-network challenge involves formal methods for rigorous analysis, early issue detection, and error reduction. Testing and simulation assess system performance under various conditions. Real-time requirements are crucial, especially for safety in applications like autonomous vehicles. Maintaining network resilience through advanced security and fault-tolerant mechanisms is an ongoing challenge.",
        ],
      },
    ],
  },
  {
    id: "power-systems",
    category: "Power Systems",
    white: "true",
    image: [
      {
        link: "/../public/images/home/energy_systems.jpg",
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
        name: "Ben Wooding",
        role: "PhD Student",
        contact: "b.wooding1@newcastle.ac.uk",
        image: "/../public/images/people/ben_wooding.png",
      },
      {
        name: "Sadegh Soudjani",
        role: "Researcher",
        contact: "",
        image: "/../public/images/people/sadegh_soudjani_square.jpg",
      },
    ],
    sections: [
      {
        paragraphs: [
          "Formal methods approaches for power systems have multiple interesting and challenging research directions. There are two main types of control required, frequency control and voltage control which are each treated separately. These systems have varying response types with the fastest being primary control, which requires the power network to respond in under a second to any disturbances that occur. These power systems can also vary in size, from microgrids with only a few buses to large multi-area power systems with hundreds of buses. The two main challenges are therefore (i) to provide fast and accurate control approaches, and (ii) to provide scalable control approaches to large dimensional systems.",
          "So far, abstraction-based techniques have been used to design fast primary control responses for power system frequency fluctuations. This involves the computational effort to determine system transitions and calculate the optimal input to guarantee the safety of the power system or to reach some safe region when the frequency falls below some threshold. These inputs can be stored in a lookup table controller which can provide instantaneous control responses. Regarding scalability, robust simulation functions have been proposed as a method to compute reduced-order models of the systems but with a calculated simulation relation error to consider. The abstract (reduced-order) model can be used to design the controller and the simulation relation error can act as a buffer to provide a correct (but conservative) design of a controller.",
        ],
      },
    ],
  },
  {
    id: "water-treatment-systems",
    category: "Water Treatment Systems",
    white: "",
    image: [
      {
        link: "/../public/images/home/water.jpg",
        alt: "Package Delivery",
      },
      {
        link: "/../public/images/publications/water_treatment.jpg",
        alt: "Satisfaction Probability",
      },
    ],
    relatedArticles: "",
    researchers: [
      {
        name: "Anna Laino",
        role: "PhD Student",
        contact: "a.s.laino2@newcastle.ac.uk",
        image: "/../public/images/people/anna_laino.jpg",
      },
      {
        name: "Sadegh Soudjani",
        role: "Researcher",
        contact: "",
        image: "/../public/images/people/sadegh_soudjani_square.jpg",
      },
    ],
    sections: [
      {
        paragraphs: [
          "The primary objective of this research is to evaluate the ability of Water Resource Recovery Facilities (WRRFs) to endure and recover from ongoing challenges like climate change and population growth, as well as sudden and severe stressors such as extreme weather events. The resilience of WRRFs is compromised by the aging infrastructure, which was designed in the early 20th century. This outdated infrastructure may not withstand stressors, potentially leading to service disruptions and environmental harm.",
          "The current literature lacks a comprehensive method for quantifying resilience, and previous metrics are tailored to specific cases. To explore resilience, the study selected the GPS-X software to model a WRRF case. However, mastering the software was a steep learning curve. Data collection from field operators presented its own set of challenges, including gaps in data quality, which were addressed through interpolation. Flowmeter calibration issues significantly impacted the model's accuracy, especially concerning sludge retention time and ammonia levels.",
        ],
      },
    ],
  },
  {
    id: "quantum-systems",
    category: "Quantum Systems",
    white: "true",
    image: [
      {
        link: "/../public/images/home/quantum_computing.jpg",
        alt: "Package Delivery",
      },
      {
        link: "/../public/images/publications/quantum.jpg",
        alt: "Satisfaction Probability",
      },
    ],
    relatedArticles: "",
    researchers: [
      {
        name: "Marco Lewis",
        role: "PhD Student",
        contact: "m.j.lewis2@newcastle.ac.uk",
        image: "/../public/images/people/marco_lewis.jpg",
      },
      {
        name: "Sadegh Soudjani",
        role: "Researcher",
        contact: "",
        image: "/../public/images/people/sadegh_soudjani_square.jpg",
      },
    ],
    sections: [
      {
        paragraphs: [
          "Quantum computers perform computations differently to classical computers and so can gain a speedup on certain problems. However, due to the nature of quantum physics, quantum computers are inherently noisy and so prone to error. There is also a risk of the programs that are run on quantum computers are incorrect. ",
          "Further, quantum computers have a chance of returning the incorrect result as well. This means that an incorrect result from a program can be influenced by any or all these factors. Therefore, it Is important to reduce the error within the hardware and software of these devices. Whilst various companies are working on reducing error in hardware, there is a need to develop tools that can be used to verify the programs that quantum computers will run.",
        ],
      },
    ],
  },
  {
    id: "brain-modelling-and-control",
    category: "Brain Modelling and Control",
    white: "true",
    image: [
      {
        link: "/../public/images/home/glassbrain.jpg",
        alt: "Package Delivery",
      },
      {
        link: "/../public/images/publications/brain.jpg",
        alt: "Satisfaction Probability",
      },
    ],
    relatedArticles: "",
    researchers: [
      {
        name: "John Ingham",
        role: "PhD Student",
        contact: "j.f.ingham2@newcastle.ac.uk",
        image: "/../public/images/people/john_ingham.jpg",
      },
      {
        name: "Sadegh Soudjani",
        role: "Researcher",
        contact: "",
        image: "/../public/images/people/sadegh_soudjani_square.jpg",
      },
    ],
    sections: [
      {
        paragraphs: [
          "Computation modelling has proven to supplement direct experimental studies in understanding the functions of the healthy and the unhealthy brain, including the mechanisms of epilepsy. Established treatments, with proven benefits, may still have poorly understood mechanisms of action, which we expect would also be illuminated by a modelling approach.",
          "Once we have models with predictive and explanatory power, it should then be possible to inform the design of smarter, closed-loop feedback regimes to improve the efficacy and reduce the potential harms of a treatment. Following the creation of generalised models, a tailored approach to individual patients could be taken, using their imaging and electrophysiological data, we would hope to produce personalised prognostic forecasts for potential treatments, and subsequent faster and more accurate optimisation of treatment parameters.",
        ],
      },
    ],
  },
  {
    id: "fundamentals",
    category: "Fundamentals",
    white: "true",
    image: [
      {
        link: "/../public/images/home/fundamental.jpg",
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
        contact: "o.schoen2@newcastle.ac.uk",
        image: "/../public/images/people/oliver_schon.jpg",
      },
      {
        name: "Sadegh Soudjani",
        role: "Researcher",
        contact: "",
        image: "/../public/images/people/sadegh_soudjani_square.jpg",
      },
    ],
    sections: [
      {
        paragraphs: [
          "One of the key focal points of our research is the integration of control-theoretic principles, where we are actively working to address issues related to disturbances and the intricate structure of CPS. This is complemented by our exploration of model-based and data-driven techniques, which allow us to harness the power of data to enhance the reliability and robustness of CPS.",
          "Uncertainty is an ever-present challenge in CPS, and we are dedicated to developing solutions that can thrive in the face of this uncertainty, even when prior knowledge is incomplete or missing. The incorporation of stochasticity into our methods further broadens the scope of our research, enabling us to design CPS that can adapt and respond effectively to inherently probabilistic environments.",
        ],
      },
    ],
    projects: [
      {
        image: "/../public/models/oliver.gif",
        title: "SySCoRe: Synthesis via Stochastic Coupling Relations",
        paragraph:
          "In this research line, we develop SySCoRe, a MATLAB toolbox for temporal logic control synthesis of discrete-time continuous-state stochastic dynamical systems based on stochastic coupling relations.",
        researchers:
          "Oliver Schön, Birgit van Huijgevoort, Sofie Haesaert, Sadegh Soudjani",
        papers: [
          {
            title: "ARCH-COMP22 Category Report: Stochastic Models",
            link: "https://easychair.org/publications/paper/Nzr4",
          },
          {
            title: "SySCoRe: Synthesis via Stochastic Coupling Relations",
            link: "https://dl.acm.org/doi/10.1145/3575870.3587123",
          },
          {
            title:
              "Bayesian Approach to Temporal Logic Control of Uncertain Systems",
            link: "https://arxiv.org/abs/2304.07428",
          },
          {
            title:
              "Poster Abstract: Data-Driven Correct-by-Design Control of Parametric Stochastic Systems✱",
            link: "https://dl.acm.org/doi/10.1145/3575870.3589547",
          },
          {
            title:
              "Verifying the Unknown: Correct-by-Design Control Synthesis for\n" +
              "Networks of Stochastic Uncertain Systems\n",
            link: "https://arxiv.org/pdf/2309.01276.pdf",
          },
          {
            title: "ARCH-COMP23 Category Report: Stochastic Models",
            link: "https://easychair.org/publications/paper/xZ8M",
          },
          {
            title: "Correct-by-Design Control of Parametric Stochastic Systems",
            link: "https://ieeexplore.ieee.org/document/9992723",
          },
        ],
      },
    ],
  },
];
