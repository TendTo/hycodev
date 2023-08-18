import styles from "../../../styles/publications-list.module.scss";

export default function RelatedPublicationsList() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.heading}>Related Publications</h3>
        <p className={styles.heading__paragraph}>See All</p>
      </div>
      <div className={styles.container__publication}>
        <button className={styles.button}>
          <div className={styles.arrow}></div>
        </button>
        <div>
          <h4 className={styles.publication_heading}>
            Adaptive and sequential gridding procedures for the abstraction and
            verification of stochastic processes
          </h4>
          <p className={styles.publication_paragraph}>
            <b>Authors:</b> Sadegh Esmaeil Zadeh Soudjani, Alessandro Abate
          </p>
          <p className={styles.publication_paragraph}>
            <b>Date:</b> 07/07/2023
          </p>
        </div>
        {/*<div>*/}
        {/*    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam ex sit amet velit blandit maximus. Sed vulputate vitae mi nec placerat. Integer ut venenatis nisl. Sed consectetur nisi diam, id sollicitudin mauris tristique ut. Donec porttitor velit nec pretium egestas. Pellentesque maximus tempus metus in dignissim. Nam et mi sit amet sapien maximus ornare sed ac ex. Quisque suscipit velit in ante sodales, sit amet finibus lacus semper. </p>*/}
        {/*</div>*/}
      </div>
      <div className={styles.container__publication}>
        <button className={styles.button}>
          <div className={styles.arrow}></div>
        </button>
        <div>
          <h4 className={styles.publication_heading}>
            Adaptive and sequential gridding procedures for the abstraction and
            verification of stochastic processes
          </h4>
          <p className={styles.publication_paragraph}>
            <b>Authors:</b> Sadegh Esmaeil Zadeh Soudjani, Alessandro Abate
          </p>
          <p className={styles.publication_paragraph}>
            <b>Date:</b> 07/07/2023
          </p>
        </div>
        {/*<div>*/}
        {/*    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam ex sit amet velit blandit maximus. Sed vulputate vitae mi nec placerat. Integer ut venenatis nisl. Sed consectetur nisi diam, id sollicitudin mauris tristique ut. Donec porttitor velit nec pretium egestas. Pellentesque maximus tempus metus in dignissim. Nam et mi sit amet sapien maximus ornare sed ac ex. Quisque suscipit velit in ante sodales, sit amet finibus lacus semper. </p>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
