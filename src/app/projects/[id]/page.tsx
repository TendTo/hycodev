import { ProjectArticles } from "../../../assets/projects";
import Article from "../../../components/publication-article";
import CustomBanner from "../../../components/custom-banner";

export default async function PublicationArticle({ params }) {
  const data = await getPostById(params.id);
  const size = {
    size: {
      minHeight: "18rem",
      maxHeight: "18rem",
    },
  };
  const backdrop = {
    backdrop: {},
  };
  return (
    <div>
      <CustomBanner
        title={"Projects"}
        source={"/images/banners/software_new.jpg"}
        size={size}
        backdrop={backdrop}
      ></CustomBanner>
      <Article
        title={data.title}
        articleImages={data.image}
        text={data.sections}
        links={data.links}
        papers={data.papers}
      />
    </div>
  );
}

export async function getPostById(id) {
  const data = ProjectArticles
    ? ProjectArticles.find((article) => article.id === id)
    : null;
  return {
    ...data,
  };
}

export async function generateStaticParams() {
  const posts = ProjectArticles.filter((article) => {
    return article.external.toLowerCase() === "false";
  });
  const paths = posts.map((post) => ({
    id: post.id,
  }));
  return paths;
}

// @ts-ignore
export const dynamicParams = false;
