import React, { useCallback, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Button,
  Title,
  ValidMessage,
  ProductActive,
} from "../../components/Layouts";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories } from "../../services/categoriesService/categoriesGetAll";
import { IProduct } from "../../interfaces/IProduct";
import { ICategory } from "../../interfaces/Category";
import { Api } from "../../services/api/Api";
import { Header } from "../header/Header";
import Footer from "../footer/Footer";
//import { updateProduct } from "../../services/productsService/productUpdate";

export const ProductUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const link = () => {
    navigate(`/deleteproduct/${product.id}`);
    console.log(link);
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

  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    loadCategories();
  }, []);

  async function loadCategories() {
    const response = getCategories();
    setCategories((await response).data);
  }

  const [model, setModel] = useState<IProduct>({
    name: "",
    categoryName: "",
    description: "",
    price: 0,
    imageUrl: "",
    hasStock: true,
    active: true,
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  function updateModel(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setModel({
      ...model,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(e: React.ChangeEvent<HTMLInputElement> | any) {
    e.preventDefault();

    if (!validate()) return;

    Api.put(`/products/${id}`, model)
      .then((data) => {
        setTimeout(() => {
          navigate("/products");
        }, 2000);
      })
      .catch(() => {
        console.log("erro");
      });

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: "success",
        message: "Cadastro realizado com sucesso!",
      });
      setModel({
        name: "",
        categoryName: "",
        description: "",
        price: 0,
        imageUrl: "",
        hasStock: true,
        active: true,
      });
    } else {
      setStatus({
        type: "error",
        message: "Erro: Cadastro não realizado!",
      });
    }
  }

  function validate() {
    if (!model.name)
      return setStatus({
        type: "error",
        message: "O campo nome é obrigatório!",
      });
    if (!model.categoryName)
      return setStatus({
        type: "error",
        message: "O campo categória é obrigatório!",
      });
    if (!model.description)
      return setStatus({
        type: "error",
        message: "O campo descrição é obrigatório!",
      });
    if (!model.price)
      return setStatus({
        type: "error",
        message: "O campo preço é obrigatório!",
      });
    if (!model.imageUrl)
      return setStatus({
        type: "error",
        message: "O campo imagem é obrigatório!",
      });

    return true;
  }

  return (
    <>
      <Header />
      <Container style={{marginBottom: "2rem"}}>
        <Title style={{ textAlign: "center" }}>Editar Produto</Title>

        <form onSubmit={onSubmit}>
          <Row>
            <Col>
              <FormGroup>
                <p
                  style={{
                    borderBottom: "1px solid teal",
                    width: "11%",
                    marginBottom: "2px",
                  }}
                >
                  Nome
                </p>
                <input
                  name="name"
                  type="text"
                  defaultValue={product.name}
                  onChange={(e) => updateModel(e)}
                />
              </FormGroup>
            </Col>
          </Row>
          <div>
            <p
              style={{
                borderBottom: "1px solid teal",
                width: "18%",
                marginBottom: "2px",
              }}
            >
              Categoria
            </p>
            <select
              style={{ width: "100%", height: "30px" }}
              name="categoryName"
              onChange={(e) => updateModel(e)}
            >
              <option value="">Selecione a Categoria</option>
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>

          <Row>
            <Col>
              <FormGroup>
                <p
                  style={{
                    borderBottom: "1px solid teal",
                    width: "18%",
                    marginBottom: "2px",
                  }}
                >
                  Descrição
                </p>
                <input
                  name="description"
                  type="text"
                  defaultValue={product.description}
                  onChange={(e) => updateModel(e)}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup>
                <p
                  style={{
                    borderBottom: "1px solid teal",
                    width: "11%",
                    marginBottom: "2px",
                  }}
                >
                  Preço
                </p>
                <input
                  name="price"
                  type="number"
                  defaultValue={product.price}
                  onChange={(e) => updateModel(e)}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup>
                <p
                  style={{
                    borderBottom: "1px solid teal",
                    width: "27%",
                    marginBottom: "2px",
                  }}
                >
                  Url da Imagem
                </p>
                <textarea
                  style={{ width: "100%", height: "70px", resize: "none" }}
                  name="imageUrl"
                  defaultValue={product.imageUrl}
                  onChange={(e) => updateModel(e)}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <div>
                <ProductActive>
                  <p
                    style={{
                      borderBottom: "1px solid teal",
                      width: "24%",
                      marginBottom: "2px",
                    }}
                  >
                    Tem estoque?
                  </p>
                  <input
                    name="hasStock"
                    type="checkbox"
                    checked={model.hasStock}
                    onChange={(e) => updateModel(e)}
                  />
                </ProductActive>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div style={{ marginTop: "1rem" }}>
                <ProductActive>
                  <p
                    style={{
                      borderBottom: "1px solid teal",
                      width: "21%",
                      marginBottom: "2px",
                    }}
                  >
                    Ativo/Inativo:
                  </p>
                  <input
                    name="active"
                    type="checkbox"
                    checked={model.active}
                    onChange={(e) => updateModel(e)}
                  />
                </ProductActive>
              </div>
            </Col>
          </Row>

          <Button style={{ marginTop: "1rem" }}>Salvar</Button>
        </form>
        <ValidMessage>
          {status.type === "success" ? (
            <p style={{ color: "green" }}>{status.message}</p>
          ) : (
            ""
          )}
          {status.type === "error" ? (
            <p style={{ color: "#ff0000" }}>{status.message}</p>
          ) : (
            ""
          )}
        </ValidMessage>
      </Container>
      <Footer/>
    </>
  );
};
