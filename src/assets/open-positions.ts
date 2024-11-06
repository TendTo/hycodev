type Position = {
  id: string;
  title: string;
  level: string;
  location: string;
  deadline: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
};

export const OpenPositions: Position[] = [
  {
    id: "0",
    title: "PhD/Postdoctoral position",
    level: "PhD",
    location: "Max Planck Institute for Software Systems, Germany",
    deadline: "No Deadline",
    paragraph1:
      "Sadegh Soudjani always looks for excellent PhD students interested in model-based and data-driven analysis of cyber-physical systems (e.g., autonomous systems modeled with dynamical equations). The main focus will be on the formal verification and synthesis of (stochastic) hybrid systems, i.e., dynamical systems exhibiting mixed discrete and continuous behaviour under the influence of uncertainty. Depending on the interest and background of candidates, research will include topics from control theory, probabilistic methods, logic, and machine learning.",
    paragraph2:
      "Candidate profile:\n" +
      "\n" +
      "Should have strong background in Control Theory, Computer Science, Mathematics, or closely related fields.\n" +
      "\n" +
      "Should have solid programming skills in Matlab/C++/Python.\n" +
      "\n" +
      "Should have completed, or are about to complete, a Bachelor's or Master's degree in the above-mentioned areas",
    paragraph3:
      "The interested candidate should contact Dr Sadegh Soudjani, the SymAware Coordinator, at sadegh@mpi-sws.org with their full application materials.",
  },
] as const;
export const ClosedPositons: Position[] = [
  {
    id: "0",
    title: "Data-Driven Abstractions for Safety-Critical Systems",
    level: "PhD position",
    location: "Newcastle University, UK",
    deadline: "",
    paragraph1:
      "The primary objective of this project is to develop an industrial case study for REF2028 in the area of safety-critical systems with a particular focus on energy distribution systems in collaboration with Smart Grid Lab at Newcastle and Siemens in Germany. This project will provide a new approach to ensuring the safe operation of safety-critical systems (e.g., blackout-free, minimum-cost energy supply) using data gathered from the system. This project will bridge the gap between formal abstraction-based methods and data-driven analysis while providing certification on satisfying the (safety) requirements.",
    paragraph2:
      "driven analysis while providing certification on satisfying the (safety) requirements.\n" +
      "\n" +
      "The significant novelty of our project is that we provide the first approach that can guarantee the runtime safety of autonomous systems in safety-critical applications. By the end of this project, we have developed the first data-driven mechanism that can be applied to large-scale smart energy distribution systems while providing probabilistic guarantees (confidence values) on the satisfaction of the requirements. We will develop a REF impact case study in collaboration with Siemens using the experiments performed in the Smart Grid Lab (facilitated by the PI’s EPSRC New Investigator Award, CodeCPS).",
    paragraph3:
      "To apply, click the button below and select the project Data-Driven Abstractions for Safety-Critical Systems. ",
  },
] as const;
