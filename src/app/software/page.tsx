import SoftwareBox from "../../components/software-box";
import CustomBanner from "../../components/custom-banner";
import styles from "../../../styles/page-software.module.scss";
import { software } from "../../assets/software";

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
        source={"/../public/images/software_new.jpg"}
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
          </div>
        ))}
      </div>
    </div>
  );
}
