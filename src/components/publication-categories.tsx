import styles from "../../styles/publications-all.module.scss";
import typography from "../../scss/base/_typography.module.scss";
import { PublicationArticles } from "../assets/projects";

type Props = {
  selectedCategory: string;
  onSelect(category: string): void;
};

const PublicationCategories = ({ selectedCategory, onSelect }: Props) => {
  const splitCategories = PublicationArticles.flatMap((box) => box.category);
  const categories = Array.from(new Set(splitCategories));
  return (
    <div className={styles.list_wrapper}>
      <ul>
        <li onClick={() => onSelect("")}>
          <button
            className={
              !selectedCategory
                ? styles.list_item__active + " " + typography.paragraph
                : styles.list_item + " " + typography.paragraph
            }
          >
            All
          </button>
        </li>
        {categories.map((category, id) => {
          const isSelected = category === selectedCategory;
          return (
            <li key={id} onClick={() => onSelect(category)}>
              <button
                className={
                  isSelected
                    ? styles.list_item__active + " " + typography.paragraph
                    : styles.list_item + " " + typography.paragraph
                }
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default PublicationCategories;
