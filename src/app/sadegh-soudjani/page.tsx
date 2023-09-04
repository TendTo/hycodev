import typography from "../../../scss/base/_typography.module.scss";
import utilities from "../../../scss/base/_utilities.module.scss";

export default function Sadegh() {
  return (
    <div>
      <h1 className={typography.heading_primary}>Sadegh Soudjani </h1>
      <p className={typography.paragraph__lighter}>
        Research group leader of HyCoDeV and Associate Professor at Newcastle
        University.
      </p>
      <div>
        <p className={typography.paragraph}>
          I am currently an Associate Professor in Cyber-Physical Systems at
          Newcastle University, United Kingdom. My research aim is to develop an
          integrated environment for programming, verifying, and designing
          high-performance and scalable CPSs perceiving and acting in the
          uncertain physical world. I have developed and shaped my research
          vision on formal synthesis, abstraction, and verification (over
          probabilistic temporal specifications) of complex dynamical systems
          with application in cyber-physical systems (CPSs) particularly
          involving energy networks and autonomous systems. I have a BSc in Pure
          Mathematics, a BSc in Electrical Engineering, an MSc in Control
          Engineering, and a PhD in Systems & Control, all with distinction. I
          built my background in Computer Science during my PhD studies and
          postdoctoral experiences at TU Delft, Oxford University, and the Max
          Planck Institute for Software Systems.
        </p>
        <ul>
          <h3 className={typography.heading_tertiary}>Research interests</h3>

          <li className={typography.paragraph}>Formal Synthesis</li>
          <li className={typography.paragraph}>
            Abstraction and Verification (over probabilistic temporal
            specifications)
          </li>
          <li className={typography.paragraph}>Cyber-Physical Systems</li>
          <li className={typography.paragraph}>Stochastic Hybrid Systems</li>
          <li className={typography.paragraph}>Smart Grids</li>
          <li className={typography.paragraph}>Power and Energy Networks</li>
          <li className={typography.paragraph}>Transportation Systems</li>
          <li className={typography.paragraph}>Systems Biology</li>
        </ul>
        <ul>
          <h3 className={typography.heading_tertiary}>Projects</h3>
          <li className={typography.paragraph}>MoVeS (2010-2013)</li>
          <li className={typography.paragraph}>SymAware (2022-2025)</li>
          <li className={typography.paragraph}>CodeCPS (2021-2024)</li>
          <li className={typography.paragraph}>Safe-CPS (2016-2017)</li>
          <li className={typography.paragraph}>AMBI (2014-2015)</li>
        </ul>
        <div>
          <h3 className={typography.heading_tertiary}>Publications</h3>
          <p className={typography.paragraph}>
            70 contributions. 46 at conferences and 24 in journals.
          </p>
        </div>
      </div>
      <div>
        <p className={typography.paragraph_highlighted}>Open Positions</p>
        <p className={typography.paragraph}>
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
        <p className={typography.paragraph_highlighted}>Candidate profile:</p>
        <ul>
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
    </div>
  );
}
