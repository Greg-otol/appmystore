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
  } from "../../components/Layouts";
  import { IProduct } from "../../interfaces/IProduct";
  import { useEffect, useState } from "react";
  import { Api, getByIdProducts } from "../../services/api/Api";
  import login from "../assets/img/login.png";
  import { Link, useNavigate, useParams } from "react-router-dom";
  
  export const Details = () => {
    const { id } = useParams();
  
    const [product, setProduct] = useState<IProduct>([] as any);
    useEffect(() => {
      Api.get(`/products/${id}`)
        .then((response) => {
          const token = response.data.token;
          response.headers["Authorization"] = `Bearer ${token}`;
          setProduct(response.data);
        })
        .catch(() => {
          console.log("erro");
        });
    }, []);
  
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
          <Card key={product.id}>
            <ProductName>{product.name}</ProductName>
            <Img src={product.imageUrl} alt="Product" />
            <Frete>Frete Grátis</Frete>
            <ProductPrice>R$ {product.price}</ProductPrice>
            <Button>Comprar</Button>
          </Card>
        </Cards>
      </>
    );
  };
  