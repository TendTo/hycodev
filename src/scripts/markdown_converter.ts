import { remark } from "remark";
import rehypeHighlight from "rehype-highlight";
import remarkRehype from "remark-rehype";
import rehypeCodeGroup from "rehype-code-group";
import rehypeStringify from "rehype-stringify";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cwd } from "process";
import matlab from "highlight.js/lib/languages/matlab";
import { common } from "lowlight";

const postsDirectory = cwd() + "/src/posts";

type PostData = {
  id: string;
  contentHtml: string;
  title: string;
  banner: string;
  tags: string[];
  date?: string;
  subtitle?: string;
};

export async function parseMarkdown(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string with syntax highlighting
  const processedContent = await remark()
    .use(remarkRehype)
    .use(rehypeCodeGroup, { customClassNames: { tabClass: "tabbed-code" } })
    .use(rehypeHighlight, { languages: { matlab, ...common } })
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  for (const field of ["title", "banner"]) {
    if (!(field in matterResult.data)) {
      throw new Error(
        `Post ${id} is missing the ${field} field in its front matter`
      );
    }
  }

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    banner: matterResult.data.banner,
    tags: matterResult.data.tags ?? [],
    ...matterResult.data,
  };
}
