import { useState } from "react";
import { BlogApiMemo, ButtonList } from ".";

export const ApiFilter = ({ contentPage }) => {
  const heroComponent = contentPage.find((item) => item.__component === "apis.card-repeatable");
  // Asegúrate de acceder correctamente a cada 'card' y sus 'categories'
  const cards = heroComponent ? heroComponent.cards : [];

  // Usa flatMap para recoger todas las categorías en una sola lista
  const allCategories = ["All", ...new Set(cards.flatMap((card) => card.categories.map((category) => category.title)))];

  const [categories, setCategories] = useState(allCategories);
  const [articles, setArticles] = useState(cards); // Asumiendo que quieras manipular los 'cards' como artículos

  const filterCategory = (category) => {
    if (category === "All") {
      setArticles(cards);
      return;
    }
    const filteredData = cards.filter((card) => card.categories.some((cat) => cat.title === category));
    setArticles(filteredData);
  };

  return (
    <div>
      <ButtonList categories={categories} filterCategory={filterCategory} />
      <BlogApiMemo articles={articles} contentPage={contentPage} filterCategory={filterCategory} />
    </div>
  );
};
