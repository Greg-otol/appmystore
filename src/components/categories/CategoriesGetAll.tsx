import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategory } from "../../interfaces/Category";
import { getCategories } from "../../services/categoriesService/categoriesGetAll";
import { Card, Cardcategories, Cards, Container } from "../Layouts";

export const CategoriesGetAll = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    loadCategories();
  }, []);

  async function loadCategories() {
    const response = getCategories();
    setCategories((await response).data);
  }

  return (
    <Cards>
      {categories.map((category) => {
        return (
          <Link style={{textDecoration: "none", width: "100%"}} to={`/categoryupdate/${category.id}`}>
          <Cardcategories key={category.id}>
            <h2>{category.name}</h2>
          </Cardcategories>
          </Link>
        );
      })}
    </Cards>
  );
};
