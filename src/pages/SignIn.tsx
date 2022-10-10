import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Button,
  Title,
  ValidMessage,
} from "../components/Layouts";
import { ICredential } from "../interfaces/Credential";
import { authLogin } from "../services/auth/authLogin";

export default function SignIn() {
  const [values, setValues] = useState<ICredential>({
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

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!validate()) return;

    authLogin(values.email, values.password);

    setTimeout(() => {
      navigate("/products");
    }, 2000);

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: "success",
        message: "LogIn realizado com sucesso!",
      });
      setValues({
        email: "",
        password: "",
      });
    } else {
      setStatus({
        type: "error",
        message: "Erro: LogIn não realizado!",
      });
    }
  };

  function validate() {
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
    <>
      <Container>
        <Title>Entrar</Title>

        <form name="auth" onSubmit={login}>
          <Row>
            <Col>
              <FormGroup>
                <input
                  name="email"
                  type="email"
                  placeholder="Digite seu E-mail"
                  onChange={valueInput}
                  value={values.email}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup>
                <label htmlFor="password">Senha</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Digite sua senha"
                  onChange={valueInput}
                  value={values.password}
                />
              </FormGroup>
            </Col>
          </Row>

          <Button style={{ marginBottom: "0.8rem" }}>Enviar</Button>
          <a
            style={{
              marginLeft: "19rem",
              textDecoration: "none",
              color: "#454545",
              fontWeight: "bold",
              borderBottom: "1px solid teal",
            }}
            href="/register"
          >
            Cadastre-se
          </a>
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
    </>
  );
}
