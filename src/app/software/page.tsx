import SoftwareBox from "../components/software-box";
import Banner from "../components/banner";
import typography from "../../../scss/base/_typography.module.scss";
import utilities from "../../../scss/base/_utilities.module.scss";
import styles from "../../../styles/software.module.scss";
import { SoftwareArticle } from "./software-article";
import Divider from "../components/divider";
export default function Software() {
  return (
    <div className={styles.container}>
      <Banner
        title={"Software"}
        source={"/../public/software_backdrop.png"}
      ></Banner>
      <div className={styles.container__tool}>
        {SoftwareArticle.map((article, id) => (
          <div>
            <SoftwareBox
              key={article.id}
              image={article.image}
              heading={article.heading}
              category={article.category}
              text={article.text}
              linkPaper={article.linkPaper}
              linkDownload={article.linkDownload}
              reverse={article.reverse}
            />
            <Divider />
          </div>
        ))}
      </div>
    </div>
  );
}
