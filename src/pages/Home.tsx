import {
  Button,
  Cards,
  Card,
  Img,
  ProductName,
  ProductPrice,
  Frete,
  ImgFavorite,
  ImgDiv,
} from "../components/Layouts";
import { IProduct } from "../context/AuthProvider/types";
import { useContext, useEffect, useState } from "react";
import { Api } from "../services/api/Api";
import { Header } from "../components/header/Header";
import favorite from "../assets/img/favorito.png";
import favorite2 from "../assets/img/favorito2.png"
import { Link } from "react-router-dom";
import { FavoriteContext } from "../context/Favorites/context/FavoriteContext";

export const Home = (product: IProduct) => {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  const addProductToFavorite = (product: IProduct) => {
    setFavorites([...favorites, product]);
  };

  const removeProductFromFavorites = (productName: string) => {
    setFavorites(favorites.filter((prod) => prod.name == productName));
  };

  const isFavorite = (productName: string) => favorites.some((prod) => prod.name == productName);
 
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    loadProducts();
  }, []);
  async function loadProducts() {
    const response = await Api.get("/products/showcase");
    setProducts(response.data);
  }

  return (
    <>
      <Header />
      <Cards>
        {products.map((product) => {
          return (
            <Card key={product.id}>
              <ImgFavorite
                src={isFavorite(product.name) ? favorite2 : favorite}
                onClick={() =>
                  isFavorite(product.name)
                    ? removeProductFromFavorites(product.name)
                    : addProductToFavorite(product)
                }
              ></ImgFavorite>
              <ProductName>{product.name}</ProductName>
              <Img src={product.imageUrl} alt="Product" />
              <Frete>Frete Grátis</Frete>
              <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
              <Button onClick={() => {}}>Comprar</Button>
            </Card>
          );
        })}
      </Cards>
    </>
  );
};
