import CustomBanner from "../../../components/custom-banner";
import styles from "../../../../styles/publication.module.scss";
import Article from "../../../components/publication-article";
import ResearchBox from "../../../components/publication-researcher-box";
import { PublicationArticles } from "../../../assets/publications";
import typography from "../../../../scss/base/_typography.module.scss";

export default async function PublicationArticle({ params }) {
  const data = await getPostById(params.id);
  const size = {
    size: {
      minHeight: "32rem",
      maxHeight: "32rem",
    },
  };
  const backdrop = {
    backdrop: {},
  };
  return (
    <div className={styles.container}>
      <CustomBanner
        source={"/../public/images/cropped.png"}
        title={data.category}
        size={size}
        backdrop={backdrop.backdrop}
      ></CustomBanner>
      <div className={styles.image}></div>
      <div className={styles.container__content}>
        <div className={styles.banner}>
          <Article
            text={data.sections}
            title={data.title}
            articleImages={data.image}
            people={data.researchers}
          />
          <ResearchBox people={data.researchers}></ResearchBox>
        </div>
      </div>
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
  const data = PublicationArticles[parseInt(id)];
  return {
    ...data,
  };
}

export async function generateStaticParams() {
  const posts = PublicationArticles;
  return posts.map((post) => ({
    id: post.id,
  }));
}
