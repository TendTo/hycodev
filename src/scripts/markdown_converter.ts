import { remark } from "remark";
import html from "remark-html";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cwd } from "process";

const postsDirectory = cwd() + "/src/posts";

type PostData = {
  id: string;
  contentHtml: string;
  title: string;
  banner: string;
  date: string;
  tags: string[];
};

export async function parseMarkdown(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
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
    date: matterResult.data.date ?? "",
    tags: matterResult.data.tags ?? [],
    ...matterResult.data,
  };
}
