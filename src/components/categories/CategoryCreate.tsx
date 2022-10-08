import React, { useCallback, useState } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Button,
  Title,
  ValidMessage,
} from "../../components/Layouts";
import { ICategory } from "../../interfaces/Category";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../services/categoriesService/categoryCreate";
import { Api } from "../../services/api/Api";

export const CategoryCreate = () => {
  const [model, setModel] = useState<ICategory>({
    name: "",
    active: true,
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const navigate = useNavigate();

  function updateModel(event: React.ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [event.target.name]: event.target.name == "active" ? event.target.checked: event.target.value,
    });
  }

  async function onSubmit(e: React.ChangeEvent<HTMLInputElement> | any) {
    e.preventDefault();

    if (!validate()) return;

    createCategory(model.name, model.active)
      .then((data) => {
        setTimeout(() => {
          navigate("/categories");
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
    

    return true;
  }

  return (
    <Container>
      <Title>Cadastrar categória</Title>

      <form onSubmit={onSubmit}>
        <Row>
          <Col>
            <FormGroup>
              <input
                name="name"
                type="text"
                placeholder="Digite o nome da categória"
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
