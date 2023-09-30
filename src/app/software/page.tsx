import SoftwareBox from "../../components/software-box";
import CustomBanner from "../../components/custom-banner";
import typography from "../../../scss/base/_typography.module.scss";
import utilities from "../../../scss/base/_utilities.module.scss";
import styles from "../../../styles/page-software.module.scss";
import { software } from "../../assets/software";
import Divider from "../../components/divider";

export default function Software() {
  const backdrop = {
    backdrop: {},
  };
  const size = {
    size: {
      minHeight: "18rem",
      maxHeight: "18rem",
    },
  };
  return (
    <div className={styles.container}>
      <CustomBanner
        title={"Software"}
        source={"/../public/software_new.jpg"}
        size={size}
        backdrop={backdrop}
      ></CustomBanner>
      <div className={styles.container__tool}>
        {software.map((article, id) => (
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
