import React, { useCallback, useState } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Button,
  Title,
  ValidMessage,
} from "../components/Layouts";
import { Api } from "../services/api/Api";
import { ICreateUser } from "../context/RegisterProvider/types";
import { useNavigate } from "react-router-dom";
import { useTimeout } from "usehooks-ts";

export default function SignUp() {
  const [values, setValues] = useState<ICreateUser>({
    name: "",
    cpf: "",
    email: "",
    password: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const valueInput = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const targetInput = event.currentTarget;
      const { value, name } = targetInput;

      setValues({
        ...values,
        [name]: value,
      });
    },
    [values]
  );
  const navigate = useNavigate();
  // const routeLogin = () => {
  //   navigate("/authenticate");
  // };
  const addClient = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    Api.post(`/clients`, {
      name: values.name,
      cpf: values.cpf,
      email: values.email,
      password: values.password,
    })
      .then((data) => {
        setTimeout(() => {
          navigate("/authenticate");
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
      setValues({
        name: "",
        cpf: "",
        email: "",
        password: "",
      });
    } else {
      setStatus({
        type: "error",
        message: "Erro: Cadastro não realizado!",
      });
    }
  };

  function validate() {
    if (!values.name)
      return setStatus({
        type: "error",
        message: "O campo nome é obrigatório!",
      });
    if (!values.cpf)
      return setStatus({
        type: "error",
        message: "O campo CPF é obrigatório!",
      });
    if (values.cpf.length < 11)
      return setStatus({
        type: "error",
        message: "CPF inválido!",
      });
    if (!values.email)
      return setStatus({
        type: "error",
        message: "O campo email é obrigatório!",
      });
    if (!values.password)
      return setStatus({
        type: "error",
        message: "O campo senha é obrigatório!",
      });

    return true;
  }

  return (
    <Container>
      <Title>Cadastre-se</Title>

      <form name="register" onSubmit={addClient}>
        <Row>
          <Col>
            <FormGroup>
              <input
                name="name"
                type="text"
                placeholder="Digite seu nome"
                onChange={valueInput}
                value={values.name}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <input
                name="cpf"
                type="text"
                placeholder="Digite seu CPF (Ex.: 00000000000)"
                onChange={valueInput}
                value={values.cpf}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <input
                name="email"
                type="email"
                placeholder="Digite o e-mail de registro"
                onChange={valueInput}
                value={values.email}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <input
                name="password"
                type="password"
                placeholder="Digite a senha"
                onChange={valueInput}
                value={values.password}
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
}
