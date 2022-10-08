import React, { useCallback, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Button,
  Title,
  ValidMessage,
} from "../../components/Layouts";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../services/categoriesService/categoriesGetAll";
import { IProduct } from "../../interfaces/IProduct";
import { ICategory } from "../../interfaces/Category";
import { createProduct } from "../../services/productsService/productCreate";

export const ProductCreate = () => {
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

  const navigate = useNavigate();

  function updateModel(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    setModel({
      ...model,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(e: React.ChangeEvent<HTMLInputElement> | any) {
    e.preventDefault();

    if (!validate()) return;

    //const response = await Api.post("/products", model)
    createProduct(
      model.name,
      model.categoryName,
      model.description,
      model.price,
      model.imageUrl,
      model.hasStock,
      model.active
    )
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
    <Container>
      <Title style={{textAlign: "center"}}>Cadastrar produto</Title>

      <form onSubmit={onSubmit}>
        <Row>
          <Col>
            <FormGroup>
              <input
                name="name"
                type="text"
                placeholder="Digite o nome do produto"
                onChange={(e) => updateModel(e)}
              />
            </FormGroup>
          </Col>
        </Row>
        <div>
          <select style={{width: "100%", height: "30px"}} name="categoryName" onChange={(e) => updateModel(e)}>
            <option value="">Selecione a Categoria</option>
            {categories.map((category) => {
              return <option key={category.id} value={category.id}>{category.name}</option>;
            })}
          </select>
        </div>

        <Row>
          <Col>
            <FormGroup>
              <input
                name="description"
                type="text"
                placeholder="Digite a descrição do produto"
                onChange={(e) => updateModel(e)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <input
                name="price"
                type="number"
                placeholder="Digite o preço do produto"
                onChange={(e) => updateModel(e)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <input
                name="imageUrl"
                type="text"
                placeholder="Digite a URL da imagem do produto"
                onChange={(e) => updateModel(e)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
             
                <label htmlFor="">teste</label>
              <input
                name="hasStock"
                type="checkbox"
                checked={model.hasStock}
                onChange={(e) => updateModel(e)}
              />
             
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <input
                name="active"
                type="checkbox"
                checked={model.active}
                onChange={(e) => updateModel(e)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Button>Cadastrar</Button>
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
  );
};
