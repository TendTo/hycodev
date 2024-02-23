const { writeFile } = require("node:fs");
const { getJson } = require("serpapi");

const articles = async function () {
  // SerpAPI Has a constraint for a max of 100 results per call, thus the 2 calls.
  const publications_1 = await getJson({
    engine: "google_scholar_author",
    hl: "en",
    author_id: "4SK-Q-YAAAAJ",
    api_key: "def2c8cb5f60238297e6553bca59997502426ba21baaa3958e0fa392b5ddc0b7",
    sort: "pubdate",
    start: "0",
    num: "100",
  });
  const publications_2 = await getJson({
    engine: "google_scholar_author",
    hl: "en",
    author_id: "4SK-Q-YAAAAJ",
    api_key: "def2c8cb5f60238297e6553bca59997502426ba21baaa3958e0fa392b5ddc0b7",
    sort: "pubdate",
    start: "100",
    num: "100",
  });
  const combined_list = JSON.stringify(
    publications_1.articles.concat(publications_2.articles)
  );
  writeFile("../assets/publications.json", combined_list, (err) => {
    if (err) {
      console.log("failure");
    } else {
      console.log("success");
    }
  });
};
