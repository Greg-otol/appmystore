import {
  Button,
  Cards,
  Card,
  Img,
  ProductName,
  ProductPrice,
  Frete,
  ImgFavorite,
} from "../Layouts";
import { IProduct } from "../../interfaces/IProduct";
import { useContext, useEffect, useState } from "react";
import { getProducts } from "../../services/productsService/productsGetAll";
import { Header } from "../header/Header";
import favorite from "../../assets/img/favorito.png";
import favorite2 from "../../assets/img/favorito2.png";
import { FavoriteContext } from "../../context/Favorites/FavoriteContext";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

export const ProductsList = (product: IProduct) => {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  const addProductToFavorite = (product: IProduct) => {
    setFavorites([...favorites, product]);
  };

  const removeProductFromFavorites = (productName: string) => {
    setFavorites(favorites.filter((prod) => prod.name == productName));
  };

  const isFavorite = (productName: string) =>
    favorites.some((prod) => prod.name == productName);

  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    loadProducts();
  }, []);
  async function loadProducts() {
    const response = getProducts()
    setProducts(((await response).data)
  )}
  

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
              <Link style={{textDecoration: "none", width: "100%"}} to={`/details/${product.id}`}>
                <Button>Comprar</Button>
              </Link>
            </Card>
          );
        })}
      </Cards>
      <Footer/>
    </>
  );
};
