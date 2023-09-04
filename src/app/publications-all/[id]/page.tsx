import Banner from "../../components/banner";
import styles from "../../../../styles/publication.module.scss";
import Article from "../../components/publication-article";
import ResearchBox from "../../components/researcher-box";
import RelatedPublicationsList from "../../publications-dropdown/page";
import { PublicationArticles } from "../publications";
import typography from "../../../../scss/base/_typography.module.scss";

export default async function PublicationArticle({ params }) {
  const data = await getPostById(params.id);
  console.log("title: " + data.category);
  console.log("id: " + params.id);
  return (
    <div className={styles.container}>
      <Banner
        source={"/../public/images/cropped.png"}
        title={data.category}
      ></Banner>
      <div className={styles.banner}>
        <Article text={data.sections} />
        <ResearchBox></ResearchBox>
      </div>
      <div className={styles.list}>
        <h2 className={typography.heading_secondary}>Related Publications</h2>
        <p className={typography.paragraph__small}>See All</p>
        <RelatedPublicationsList />
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
