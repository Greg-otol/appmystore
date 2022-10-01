import {
  Button,
  Cards,
  Card,
  Img,
  ProductName,
  ProductPrice,
  Frete,
  ImgFavorite,
} from "../../components/Layouts";
import favorite from "../../assets/img/favorito.png";
import { useContext } from "react";
import { Header } from "../../components/header/Header";
import { IFavorites, IProduct } from "../AuthProvider/types";
import { FavoriteContext } from "./context/FavoriteContext";

export const Favorites = (product: IProduct) => {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  const removeProductFromFavorites = (productName: string) => {
    setFavorites(favorites.filter((prod) => prod.name == productName));
    console.log(favorites)
  };

  const isFavorite = (productName: string) => favorites.some((prod) => prod.name == productName);
  console.log(isFavorite)
  return (
    <>
      <Header />
      <Cards>
        {favorites.map((product) => {
          return (
            <Card key={product.id}>
              <ImgFavorite
                src={favorite}
                onClick={() =>
                  isFavorite(product.name)
                    ? removeProductFromFavorites(product.name)
                    : null
                }
              ></ImgFavorite>
              <ProductName>{product.name}</ProductName>
              <Img src={product.imageUrl} alt="Product" />
              <Frete>Frete Grátis</Frete>
              <ProductPrice>$ {product.price.toFixed(2)}</ProductPrice>
              <Button onClick={() => {}}>Comprar</Button>
            </Card>
          );
        })}
      </Cards>
    </>
  );
};
