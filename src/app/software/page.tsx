import SoftwareBox from "../../components/software-box";
import CustomBanner from "../../components/custom-banner";
import styles from "./page.module.scss";
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
        source={"/images/banners/softwaree.jpg"}
        size={size}
        backdrop={backdrop}
        alt={"Photograph of blurred out code on a computer screens"}
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
