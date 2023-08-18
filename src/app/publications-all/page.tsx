import styles from "../../../styles/publications-all.module.scss";
import Banner from "../article-banner/page";
import { Categories } from "./categories";
import PublicationBox from "../publication-box/page";

export default function PublicationsAll() {
  return (
    <div className={styles.container}>
      <Banner title={"Publications"}></Banner>
      <div className={styles.content}>
        <div className={styles.list_wrapper}>
          {Categories.map((category, id) => (
            <div>
              <button className={styles.list_item} key={category.id}>
                {category.name}
              </button>
            </div>
          ))}
        </div>
        <div className={styles.article_wrapper}>
          <h2>All Publications</h2>
          <p>2023</p>
          <PublicationBox />
        </div>
      </div>
    </div>
  );
}
