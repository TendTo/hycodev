import CustomBanner from "../../../components/custom-banner";
import styles from "../../../../styles/page-research.module.scss";
import { IntroductionArticles } from "../../../assets/research";
import ArticleResearch from "../../../components/article-research";
import typography from "../../../../scss/base/_typography.module.scss";

import RelatedPublicationsList from "../../../components/related-publications";
import ProjectBox from "../../../components/project-box";

export default async function PublicationArticle({ params }) {
  const data = await getPostById(params.id);
  const size = {
    size: {
      minHeight: "56rem",
      maxHeight: "56rem",
    },
  };
  const backdrop = {
    backdrop: {
      display: "none",
    },
  };
  return (
    <div className={styles.container}>
      <CustomBanner
        source={data.image[0].link}
        title={data.category}
        size={size}
        backdrop={backdrop}
      ></CustomBanner>

      <div className={styles.container__content}>
        <div className={styles.banner}>
          <ArticleResearch
            text={data.sections}
            articleImages={data.image}
            people={data.researchers}
          />
        </div>
      </div>
      <div className={styles.container_related}>
        <RelatedPublicationsList />
      </div>
      <ProjectBox />
    </div>
  );
}

// export async function getStaticPaths() {
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getPostById(id) {
  const data = IntroductionArticles.find((article) => article.id === id);
  return {
    ...data,
  };
}

export async function generateStaticParams() {
  const posts = IntroductionArticles;
  return posts.map((post) => ({
    id: post.id,
  }));
}
