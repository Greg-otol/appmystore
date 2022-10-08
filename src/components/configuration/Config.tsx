import { Button, Container, Div, StyleHeader } from "../Layouts";
import home from "../../assets/img/home.png";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

export const Config = () => {
  return (
    <>
      <StyleHeader>
        <h3>OtOl_Store</h3>
        <Div>
          <Link to={"/products"}>
            <img
              src={home}
              alt="Home"
              style={{ width: "24px", cursor: "pointer" }}
            />
          </Link>
        </Div>
      </StyleHeader>
      <Container style={{ textAlign: "center", marginBottom: "14rem" }}>
        <h2 style={{ padding: "1rem" }}>Gerenciamento</h2>
        <Link
          style={{ textDecoration: "none", width: "100%" }}
          to={"/productcreate"}
        >
          <Button style={{ marginTop: "1rem" }}>Cadastrar Produto</Button>
        </Link>
        <Link
          style={{ textDecoration: "none", width: "100%" }}
          to={"/categoryoption"}
        >
          <Button style={{ marginTop: "1rem" }}>Gerenciar Categorias</Button>
        </Link>
      </Container>
      <Footer/>
    </>
  );
};
