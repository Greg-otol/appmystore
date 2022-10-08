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
import { ICategory } from "../../interfaces/Category";
import { Api } from "../../services/api/Api";

export const CategoryUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const link = () => {
    navigate(`/deletecategory/${category.id}`);
    console.log(link);
  };

  const [category, setCategory] = useState<ICategory>([] as any);
  useEffect(() => {
    Api.get(`/categories/${id}`)
      .then((response) => {
        setCategory(response.data);
      })
      .catch(() => {
        console.log("erro");
      });
  }, []);

  const [model, setModel] = useState<ICategory>({
    name: "",
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

    Api.put(`/categories/${id}`, model)
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

  const deleteCategory = () => {
    Api.delete(`/categories/${id}`)
    setTimeout(() => {
      navigate("/categories");
    }, 2000);
  }

  return (
    <Container>
      <Title style={{ textAlign: "center" }}>Editar/Deletar Categoria</Title>

      <form onSubmit={onSubmit}>
        <Row>
          <Col>
            <FormGroup>
              <input
                name="name"
                type="text"
                defaultValue={category.name}
                onChange={(e) => updateModel(e)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
              >
                Ativo / Inativo:
                <input
                  name="active"
                  type="checkbox"
                  checked={model.active}
                  onChange={(e) => updateModel(e)}
                />
              </div>
            </FormGroup>
          </Col>
        </Row>

        <Button>Cadastrar</Button>
        <Button style={{marginTop: "1rem"}} onClick={deleteCategory}>Deletar</Button>
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
