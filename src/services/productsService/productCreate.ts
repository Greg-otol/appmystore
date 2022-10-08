import { Api } from "../api/Api";

export const createProduct = async (
  name: string,
  categoryId: string | any,
  description: string | any,
  price: string | any,
  imageUrl: string | any,
  hasStock: boolean | any,
  active: boolean | any
) => {
  const model = {
    name,
    categoryId,
    description,
    price: parseFloat(price),
    imageUrl,
    hasStock,
    active,
  };
  await Api.post("/products", model);
};
