export const software = [
  // {
  //     id: "",
  //     image: "/images/software/",
  //     heading: "",
  //     category: "",
  //     text: "",
  //     linkPaper: "",
  //     linkDownload: "",
  // },
  {
    id: "2",
    image: "/images/software/oliver.gif",
    heading: "SySCoRe",
    category: "Software tool",
    text: "SySCoRe is a MATLAB toolbox for temporal logic control synthesis of discrete-time continuous-state stochastic dynamical systems. The fully automated implementation starts from a system description and a temporal logic specification and computes a robust controller alongside robust quantified bounds on the probability of satisfying the given property based on space discretization. The tool is based on establishing simulation relations between stochastic processes based on coupling the underlying stochastic distributions. The main advantage of SySCoRe compared to alternative tools is that the computed error does not grow linearly in time, which makes the tool applicable to infinite horizon properties and unbounded disturbances. The current version of SySCoRe supports nonlinear dynamics, complex co-safe temporal logic specifications over infinite horizons, model-order reduction, arbitrary (possibly unbounded) additive disturbance, and fast tensor computations.",
    linkPaper: "https://dl.acm.org/doi/abs/10.1145/3575870.3587123",
    linkDownload: "https://codeocean.com/capsule/1170779/tree/v2",
    reverse: true,
  },
  {
    id: "5",
    image: "/images/software/genie.png",
    heading: "Genie + Fairsyn + Mascot-SDS",
    category: "C/C++ Library",
    text:
      "We have created three inter-connected\n" +
      "libraries for solving different parts of the problem from different levels of abstrac-\n" +
      "tion. The first library, called Genie, offers a set of virtual classes to implement\n" +
      "the fixpoint algorithm—abstractly, leaving open (i.e. virtual) the predecessor\n" +
      "computation. Alongside, we created two other libraries, called FairSyn and\n" +
      "Mascot-SDS, where FairSyn solves fair-adversarial and 21/2-player Rabin\n" +
      "games, while Mascot-SDS solves abstraction-based control problems.\n" +
      "FairSyn and Mascot-SDS use the optimized fixpoint computation provided by\n" +
      "Genie, with domain specific implementations of the predecessor operations." +
      "Genie offers multiple high-level optimizations for\n" +
      "solving the Rabin fixpoint, such as parallel execution (requires a thread-safe\n" +
      "BDD library like Sylvan) and an acceleration technique, while abstract-\n" +
      "ing away from the low-level implementations of the predecessor functions. As a\n" +
      "result, any synthesis problem using the core Rabin fixpoint of Genie can use\n" +
      "the optimizations without spending any extra implementation effort. We used\n" +
      "these optimizations from FairSyn and Mascot-SDS, and achieved remarkable\n" +
      "computational savings.",
    linkPaper: "https://link.springer.com/chapter/10.1007/978-3-031-37709-9_1",
    linkDownload: [
      "https://gitlab.mpi-sws.org/mrychlicki/genie",
      "https://gitlab.mpi-sws.org/kmallik/mascotsds",
      "https://gitlab.mpi-sws.org/kmallik/fairsyn",
    ],
    reverse: false,
  },
  {
    id: "3",
    image: "/images/software/amytiss.png",
    heading: "AMYTISS",
    category: "Software tool",
    text: "AMYTISS is a software tool for designing correct-by-construction controllers for large-scale discrete-time stochastic systems and is implemented in C++/OpenCL. This tool is employed to build finite Markov decision processes (MDPs) as finite abstractions of given original systems, and to synthesize controllers for the constructed finite MDPs satisfying bounded-time safety, reachability, and reach-avoid specifications. In AMYTISS, scalable parallel algorithms are designed such that they support the parallel execution within CPUs, GPUs and hardware accelerators (HWAs). Unlike all existing tools for stochastic systems, AMYTISS can utilize high-performance computing (HPC) platforms and cloud-computing services to mitigate the effects of the state-explosion problem, which is always present in analyzing large-scale stochastic systems.",
    linkPaper: "https://dl.acm.org/doi/abs/10.1145/3365365.3383469",
    linkDownload: "https://github.com/mkhaled87/pFaces-AMYTISS",
    reverse: true,
  },
  {
    id: "1",
    image: "/images/software/faust.png",
    heading: "FAUST2",
    category: "Matlab toolbox",
    text: "FAUST2 is a software tool that generates formal abstractions of (possibly non-deterministic) discrete-time Markov processes (dtMP) defined over uncountable (continuous) state spaces. A dtMP model is specified in MATLAB and abstracted as a finite-state Markov chain or Markov decision processes. The abstraction procedure runs in MATLAB and employs parallel computations and fast manipulations based on vector calculus. The abstract model is formally put in relationship with the concrete dtMP via a user-defined maximum threshold on the approximation error introduced by the abstraction procedure. FAUST2 allows exporting the abstract model to well-known probabilistic model checkers, such as PRISM or MRMC. Alternatively, it can handle internally the computation of PCTL properties (e.g. safety or reach-avoid) over the abstract model, and refine the outcomes over the concrete dtMP via a quantified error that depends on the abstraction procedure and the given formula.",
    linkPaper: "https://arxiv.org/pdf/1403.3286.pdf",
    linkDownload: "https://sourceforge.net/projects/faust2/",
    reverse: false,
  },
];
