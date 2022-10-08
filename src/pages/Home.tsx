import {
  Button,
  Cards,
  Card,
  Img,
  ProductName,
  ProductPrice,
  Frete,
  StyleHeader,
  Div,
} from "../components/Layouts";
import { IProduct } from "../interfaces/IProduct";
import { useEffect, useState } from "react";
import { Api } from "../services/api/Api";
import login from "../assets/img/login.png";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {

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
      <StyleHeader>
        <h3>OtOl_Store</h3>
        <Div>
          <Link to={"/login"}>
            <img
              src={login}
              alt="Home"
              style={{ width: "24px", cursor: "pointer" }}
            />
          </Link>
        </Div>
      </StyleHeader>
      <Cards>
        {products.map((product) => {
          return (
            <Card key={product.id}>
              <ProductName>{product.name}</ProductName>
              <Img src={product.imageUrl} alt="Product" />
              <Frete>Frete Grátis</Frete>
              <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
              <Button>Comprar</Button>
            </Card>
          );
        })}
      </Cards>
    </>
  );
};
