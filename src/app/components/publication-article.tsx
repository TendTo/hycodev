import styles from "../../../styles/publication-article.module.scss";
import typography from "../../../scss/base/_typography.module.scss";
import utilities from "../../../scss/base/_utilities.module.scss";
import Image from "next/image";
import ResearchBox from "./researcher-box";
import PersonProfile from "./person-profile";
import RelatedPublicationsList from "../publications-dropdown/page";

const Article = ({ text, relatedArticles, researcher }) => {
  return (
    <div className={styles.container}>
      <h2 className={typography.heading_secondary + " " + utilities.bot_margin}>
        Formal Methods for Control and Verification in Power Systems
      </h2>
      <div className={styles.container_content}>
        <div className={styles.container_image}>
          <Image
            className={styles.image}
            src={"/../public/images/article.png"}
            width={706}
            height={534}
            c
          ></Image>
        </div>
        <div className={styles.container_text}>
          {text.map((text, id) => {
            return (
              <div>
                <h3 className={typography.heading_tertiary}>
                  {text.sectionHeading}
                </h3>
                <p
                  className={typography.paragraph + " " + utilities.bot_margin}
                >
                  {text.paragraphs}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Article;
