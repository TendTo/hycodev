import styles from "../../../../styles/page-research.module.scss";
import typography from "../../../../scss/base/_typography.module.scss";
import { IntroductionArticles } from "../../../assets/research";
import ProjectBox from "../../../components/project-box";
import ArticleResearch from "../../../components/article-research";
import Image from "next/image";
export default async function PublicationArticle({ params }) {
  const data = await getPostById(params.id);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container__banner}>
          <h1
            className={
              typography.heading_primary__white +
              " " +
              styles.container__banner__text
            }
            style={data.white ? {} : { color: "#1f1f1f" }}
          >
            {data.category}
          </h1>
          <Image
            className={styles.container__image}
            fill={true}
            src={data.image[0].link}
          ></Image>
        </div>
        <div className={styles.container__content}>
          <div className={styles.banner}>
            <ArticleResearch
              text={data.sections}
              articleImages={data.image.slice(1)}
              people={data.researchers}
            />
          </div>
        </div>
      </div>

      <div className={styles.container__projects}>
        <h3 className={typography.heading_primary}>Projects</h3>
        {data.projects ? (
          data.projects.map((project) => <ProjectBox project={project} />)
        ) : (
          <p className={typography.paragraph__small}>none</p>
        )}
      </div>
    </div>
  );
}

export async function getPostById(id) {
  const data = IntroductionArticles
    ? IntroductionArticles.find((article) => article.id === id)
    : null;
  return {
    ...data,
  };
}

export async function generateStaticParams() {
  const posts = IntroductionArticles ? IntroductionArticles : null;
  return posts.map((post) => ({
    id: post.id,
  }));
}
