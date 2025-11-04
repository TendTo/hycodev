import CustomBanner from "../../../components/custom-banner";
import { parseMarkdown } from "../../../scripts/markdown_converter";
import styles from "./page.module.scss";
import "highlight.js/styles/github.css";

export async function generateStaticParams() {
  return [{ id: "barrierbench" }];
}

type DatasetProps = {
  params: {
    id: string;
  };
};

async function getPost(params: Promise<DatasetProps>) {
  const postData = await parseMarkdown((await params).params.id);
  return {
    props: {
      postData,
    },
  };
}

export default async function Dataset(params: Promise<DatasetProps>) {
  const {
    props: { postData },
  } = await getPost(params);
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
        title={postData.title}
        subtitle={postData.subtitle}
        source={postData.banner}
        size={size}
        backdrop={backdrop}
        alt={"Photograph of blurred out code on a computer screens"}
      ></CustomBanner>
      <div className={styles.container__content}>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </div>
    </div>
  );
}
