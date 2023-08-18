import {
  academics,
  researchers,
  collaborators,
  doctoralTrainees,
  pastMembersInterns,
} from "./members";
import styles from "../../../styles/the-team.module.scss";
import PersonBox from "../person-box/page";
import MeetTheTeam from "../meet-the-team/page";

export default function theTeam() {
  return (
    <div>
      <div>{/*banner*/}</div>
      <div>{<MeetTheTeam></MeetTheTeam>}</div>
      <div>
        <div className={styles.category}>
          <h3 className={styles.category_heading}>Academics</h3>
          <div className={styles.category_row}>
            {academics.map((academic, index) => (
              <PersonBox
                image={academic.image}
                name={academic.name}
                role={academic.title}
                link={academic.link}
              />
            ))}
          </div>
        </div>
        <div className={styles.category}>
          <h3 className={styles.category_heading}>Researchers</h3>
          <div className={styles.category_row}>
            {researchers.map((researcher, index) => (
              <PersonBox
                image={researcher.image}
                name={researcher.name}
                role={researcher.title}
                link={researcher.link}
              />
            ))}
          </div>
        </div>
        <div className={styles.category}>
          <h3 className={styles.category_heading}>Doctoral Trainees</h3>
          <div className={styles.category_row}>
            {doctoralTrainees.map((phd, index) => (
              <PersonBox
                image={phd.image}
                name={phd.name}
                role={phd.title}
                link={phd.link}
              />
            ))}
          </div>
        </div>
        <div className={styles.category}>
          <h3 className={styles.category_heading}>Collaborators</h3>
          <div className={styles.category_row}>
            {collaborators.map((collaborator, index) => (
              <PersonBox
                image={collaborator.image}
                name={collaborator.name}
                role={collaborator.title}
                link={collaborator.link}
              />
            ))}
          </div>
        </div>
        <div className={styles.category}>
          <h3 className={styles.category_heading}>Past Members & Interns</h3>
          <div className={styles.category_row}>
            {pastMembersInterns.map((pastMembersIntern, index) => (
              <PersonBox
                image={pastMembersIntern.image}
                name={pastMembersIntern.name}
                role={pastMembersIntern.title}
                link={pastMembersIntern.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
