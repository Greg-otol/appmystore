import {
  Button,
  Img,
  ProductName,
  ProductPrice,
  Frete,
  Container,
  CardDetails,
  ProductDescription,
  ProductActive,
} from "../components/Layouts";
import { IProduct } from "../interfaces/IProduct";
import { useEffect, useState } from "react";
import { Api } from "../services/api/Api";
import login from "../assets/img/login.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/header/Header";
import Footer from "../components/footer/Footer";

export const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const linkUpdate = () => {
    navigate(`/updateproduct/${product.id}`);
  };

  const linkDelete = () => {
    navigate(`/updateproduct/${product.id}`);
  };

  const [product, setProduct] = useState<IProduct>([] as any);
  useEffect(() => {
    Api.get(`/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch(() => {
        console.log("erro");
      });
  }, []);

  const deleteProduct = () => {
    Api.delete(`/products/${id}`);
    setTimeout(() => {
      navigate("/products");
    }, 2000);
  };

  return (
    <>
      <Header />
      <Container style={{marginBottom: "2rem"}}>
        <CardDetails key={product.id}>
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <Img src={product.imageUrl} alt="Product" />
          <div>
            <ProductActive>
              Ativo / Inativo:{" "}
              <input type="checkbox" checked={product.active} />
            </ProductActive>
          </div>

          <Frete>Frete Grátis</Frete>
          <ProductPrice>R$ {product.price}</ProductPrice>
          <h3>{product.categoryName}</h3>
          <Button onClick={linkUpdate}>Editar</Button>
          <Button onClick={deleteProduct} style={{ marginTop: "1rem" }}>
            Deletar
          </Button>
        </CardDetails>
      </Container>
      <Footer/>
    </>
  );
};
