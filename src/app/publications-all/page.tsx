"use client";

import styles from "../../../styles/publications-all.module.scss";
import CustomBanner from "../../components/custom-banner";
import PublicationBox from "../../components/publication-box";
import typography from "../../../scss/base/_typography.module.scss";
import utilities from "../../../scss/base/_utilities.module.scss";
import { useState } from "react";
import publications from "../../assets/sadegh.json";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
export default function PublicationsAll() {
  //Banner Variables.
  const size = {
    size: {
      minHeight: "18rem",
      maxHeight: "18rem",
    },
  };
  const backdrop = {
    backdrop: {},
  };

  //Parse Sadegh's JSON
  const str = JSON.stringify(publications);
  const conv = JSON.parse(str);
  const [selectedYear, setSelectedYear] = useState("");
  const splitYears = conv.articles.flatMap((article) => article.year);
  const years = Array.from(new Set(splitYears)).sort().reverse();
  // const sort = document.getElementById("sort_filter");
  let filteredPublications = conv.articles;
  filteredPublications = selectedYear
    ? conv.articles.filter((publication) =>
        publication.year.includes(selectedYear)
      )
    : conv.articles;
  return (
    <div className={styles.container}>
      <CustomBanner
        title={"Publications"}
        source={"/../public/images/publications.jpg"}
        size={size}
        backdrop={backdrop}
        alt={"Photograph of many books"}
      ></CustomBanner>
      <div className={styles.content}>
        <div className={styles.container__article}>
          <h2
            className={
              typography.heading_secondary + " " + utilities.bot_margin__small
            }
          >
            All Publications
          </h2>
          <div className={styles.container__sorting}>
            <div className={styles.container__years__desktop}>
              {years.map((year, id) => {
                return (
                  <button
                    onClick={() => setSelectedYear(year)}
                    className={typography.paragraph}
                  >
                    {year}
                  </button>
                );
              })}
            </div>
            <div className={styles.container__years__mobile}>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  style={{ width: "20rem" }}
                >
                  Year
                </MenuButton>
                <MenuList style={{ height: "16rem", overflowY: "scroll" }}>
                  {years.map((year, id) => {
                    return (
                      <MenuItem
                        onClick={() => setSelectedYear(year)}
                        className={typography.paragraph}
                      >
                        {year}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            </div>
          </div>
          <div className={styles.article_boxes}>
            {filteredPublications.map((article, id) => {
              return (
                <PublicationBox
                  key={id}
                  heading={article.title}
                  authors={article.authors}
                  publication={article.publication}
                  citations={article.cited_by.value}
                  year={article.year}
                  link={article.link}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
