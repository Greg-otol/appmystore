import { useEffect, useState } from "react";
import { ICategory } from "../../interfaces/Category";
import { getCategories } from "../../services/api/Api";

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
    <>
      {categories.map((category) => {
        return (
          <div key={category.id}>
            <h2>{category.name}</h2>
          </div>
        );
      })}
    </>
  );
}
