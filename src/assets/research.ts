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
  // },
  {
    id: "communication-systems",
    category: "Communication Systems",
    image: [
      {
        link: "/../public/images/home/saucer.png",
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
        name: "Omid Akbarzadeh",
        role: "PhD Student",
        contact: "ben@newcastle.ac.uk",
        image: "/../public/images/people/omid_akbarzadeh.png",
      },
      {
        name: "Sadegh Soudjani",
        role: "Researcher",
        contact: "ben@newcastle.ac.uk",
        image: "/../public/images/people/sadegh_soudjani_square.jpg",
      },
    ],
    sections: [
      {
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam ex sit amet velit blandit maximus. Sed vulputate vitae mi nec placerat. Integer ut venenatis nisl. Sed consectetur nisi diam, id sollicitudin mauris tristique ut. Donec porttitor velit nec pretium egestas. Pellentesque maximus tempus metus in dignissim.",
          "Nam et mi sit amet sapien maximus ornare sed ac ex. Quisque suscipit velit in ante sodales, sit amet finibus lacus semper.  Donec porttitor velit nec pretium egestas. Pellentesque maximus tempus metus in dignissim. Nam et mi sit amet sapien maximus ornare sed ac ex. Donec porttitor velit nec pretium egestas.",
        ],
      },
    ],
  },
  {
    id: "power-systems",
    category: "Power Systems",
    image: [
      {
        link: "/../public/images/home/energy_systems.png",
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
        contact: "ben@newcastle.ac.uk",
        image: "/../public/images/people/ben_wooding.png",
      },
      {
        name: "Sadegh Soudjani",
        role: "Researcher",
        contact: "ben@newcastle.ac.uk",
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
    image: [
      {
        link: "/../public/images/home/water.png",
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
        contact: "ben@newcastle.ac.uk",
        image: "/../public/images/people/oliver_schon.jpg",
      },
      {
        name: "Sadegh Soudjani",
        role: "Researcher",
        contact: "ben@newcastle.ac.uk",
        image: "/../public/images/people/sadegh_soudjani_square.jpg",
      },
    ],
    sections: [
      {
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam ex sit amet velit blandit maximus. Sed vulputate vitae mi nec placerat. Integer ut venenatis nisl. Sed consectetur nisi diam, id sollicitudin mauris tristique ut. Donec porttitor velit nec pretium egestas. Pellentesque maximus tempus metus in dignissim.",
          "Nam et mi sit amet sapien maximus ornare sed ac ex. Quisque suscipit velit in ante sodales, sit amet finibus lacus semper.  Donec porttitor velit nec pretium egestas. Pellentesque maximus tempus metus in dignissim. Nam et mi sit amet sapien maximus ornare sed ac ex. Donec porttitor velit nec pretium egestas.",
        ],
      },
    ],
  },
  {
    id: "quantum-systems",
    category: "Quantum Systems",
    image: [
      {
        link: "/../public/images/home/quantum_computing.png",
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
        name: "Marco Lewis",
        role: "PhD Student",
        contact: "ben@newcastle.ac.uk",
        image: "/../public/images/people/marco_lewis.jpg",
      },
      {
        name: "Sadegh Soudjani",
        role: "Researcher",
        contact: "ben@newcastle.ac.uk",
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
    image: [
      {
        link: "/../public/images/home/glassbrain.jpeg",
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
        contact: "ben@newcastle.ac.uk",
        image: "/../public/images/people/oliver_schon.jpg",
      },
      {
        name: "Sadegh Soudjani",
        role: "Researcher",
        contact: "ben@newcastle.ac.uk",
        image: "/../public/images/people/sadegh_soudjani_square.jpg",
      },
    ],
    sections: [
      {
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam ex sit amet velit blandit maximus. Sed vulputate vitae mi nec placerat. Integer ut venenatis nisl. Sed consectetur nisi diam, id sollicitudin mauris tristique ut. Donec porttitor velit nec pretium egestas. Pellentesque maximus tempus metus in dignissim.",
          "Nam et mi sit amet sapien maximus ornare sed ac ex. Quisque suscipit velit in ante sodales, sit amet finibus lacus semper.  Donec porttitor velit nec pretium egestas. Pellentesque maximus tempus metus in dignissim. Nam et mi sit amet sapien maximus ornare sed ac ex. Donec porttitor velit nec pretium egestas.",
        ],
      },
    ],
  },
  {
    id: "fundamentals",
    category: "Fundamentals",
    image: [
      {
        link: "/../public/images/home/fundamental.png",
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
        contact: "ben@newcastle.ac.uk",
        image: "/../public/images/people/oliver_schon.jpg",
      },
      {
        name: "Sadegh Soudjani",
        role: "Researcher",
        contact: "ben@newcastle.ac.uk",
        image: "/../public/images/people/sadegh_soudjani_square.jpg",
      },
    ],
    sections: [
      {
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam ex sit amet velit blandit maximus. Sed vulputate vitae mi nec placerat. Integer ut venenatis nisl. Sed consectetur nisi diam, id sollicitudin mauris tristique ut. Donec porttitor velit nec pretium egestas. Pellentesque maximus tempus metus in dignissim.",
          "Nam et mi sit amet sapien maximus ornare sed ac ex. Quisque suscipit velit in ante sodales, sit amet finibus lacus semper.  Donec porttitor velit nec pretium egestas. Pellentesque maximus tempus metus in dignissim. Nam et mi sit amet sapien maximus ornare sed ac ex. Donec porttitor velit nec pretium egestas.",
        ],
      },
    ],
  },
];
