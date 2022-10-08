import { Button, Container, Div, StyleHeader } from "../components/Layouts";
import home from "../assets/img/home.png";
import { Link } from "react-router-dom";

export const CategoryOptions = () => {
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
      <Container style={{ textAlign: "center" }}>
        <h2 style={{ padding: "1rem" }}>Gerenciamento de Categorias</h2>
        <Link
          style={{ textDecoration: "none", width: "100%" }}
          to={"/categories"}
        >
          <Button style={{ marginTop: "1rem" }}>Visualizar Categorias</Button>
        </Link>
        <Link
          style={{ textDecoration: "none", width: "100%" }}
          to={"/categorycreate"}
        >
          <Button style={{ marginTop: "1rem" }}>Cadastrar Categoria</Button>
        </Link>
      </Container>
    </>
  );
};
