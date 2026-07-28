type HomeImage = {
  id: string;
  image: string;
  title: string;
  link: string;
  text: string;
  alt: string;
  style: {
    objectPosition: string; // Offset the image by x and y percent respectively.
    scale?: string;
  };
};

export const homeImages: HomeImage[] = [
  {
    id: "0",
    image: "/images/home/fundamental.jpg",
    title: "Fundamentals",
    link: "/research/fundamentals",
    text: "In this section, we present our fundamental work on formal methods for CPS that is trying to push the boundaries on what is possible across all areas of application. This involves tackling challenges related to control-theoretic considerations such as disturbances and system structure; model-based and data-driven approaches; uncertainty and missing prior knowledge; stochasticity; and other.",
    alt: "Abstract Illustration",
    style: {
      objectPosition: "67% 50%",
      scale: "1.25",
    },
  },
  {
    id: "4",
    image: "/images/home/energy_systems.jpg",
    title: "Power Systems",
    link: "/research/power-systems",
    text: "As we strive towards net-zero energy systems and increase our renewable energy uses, our power system behaviours become uncertain and new challenges are introduced in balancing the energy supply and demand. As we phase away from large-scale generation devices, we will need nimble controllers that can act quickly to mitigate any issues that arise, as well as approaches which can scale to the size of these massive power systems. ",
    alt: "Windmill Photograph",
    style: {
      objectPosition: "38% 50%",
    },
  },
  {
    id: "3",
    image: "/images/home/quantum_computing.jpg",
    title: "Quantum Systems",
    link: "/research/quantum-systems",
    alt: "Quantum Computer Illustration",
    text: "Quantum computers are starting to become a reality and there is a need to ensure that the computations they perform behave as we expect. Our research consists of looking at finding bugs within quantum programs and software. We are investigating how to use different automated formal methods techniques in order to verify different aspects of quantum computers with minimal manual work.",
    style: {
      objectPosition: "29% 50%",
    },
  },
  {
    id: "1",
    image: "/images/home/saucer.jpg",
    title: "Communication Systems",
    link: "/research/communication-systems",
    text: "Verification of Cyber-Physical Systems (CPS) with Communication Networks explores the critical intersection of CPS and network technologies. It ensures the reliability and secure operation of smart systems, like self-driving cars and industrial automation, by verifying their coordination with communication networks, making It a fascinating field at the forefront of technology and safety. ",
    alt: "Giant Satellite Dish Photograph",
    style: {
      objectPosition: "10% 50%",
    },
  },
  {
    id: "2",
    image: "/images/home/robots.png",
    title: "Multi-Agent Systems and Robotics",
    link: "/research/multi-agent-systems-and-robotics",
    text: "We develop intelligent robotic and AI-agent ecosystems capable of perception, coordination, and autonomous decision-making. By combining robotics, distributed intelligence, and machine learning, we create scalable solutions for collaborative autonomy in real-world environments, from smart industries to next-generation autonomous systems.",
    alt: "Sci-fi Illustration of a Human Brain",
    style: {
      objectPosition: "50% 50%",
    },
  },
  {
    id: "5",
    image: "/images/home/water.jpg",
    title: "Water Treatment Systems",
    link: "/research/water-treatment-systems",
    text:
      "Water Resource Recovery Facilities operate under designed configurations for pollutant loads and flow. With the increasing likelihood of extreme weather events due to climate change, the risk of pollution incidents and the consequent release of dangerous pollutants into rivers and seas is also rising.\n" +
      "The quantification of resilience could provide significant benefits to water companies. It can help them rank their facilities for better management and more efficient resource distribution.",
    alt: "Photograph of Water",
    style: {
      objectPosition: "50% 50%",
    },
  },
] as const;
