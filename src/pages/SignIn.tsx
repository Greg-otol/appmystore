import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Button,
  Title,
} from "../components/Layouts";
import { useAuth } from "../context/AuthProvider/useAuth";

export default function SignIn() {
  const auth = useAuth()
  const navigate = useNavigate();

  async function onFinish(values: {email: string, password: string}) {
    try {
      await auth.authenticate(values.email, values.password)

      navigate("/")
    } catch (error) {
      console.log("Invalid email or password");
    }    
  }
  return (
    <>
      <Container>
        <Title>Entrar</Title>

        <form name="auth" onSubmit={() => {}}>
          <Row>
            <Col>
              <FormGroup>
                <input
                  name="email"
                  type="email"
                  placeholder="Digite seu E-mail"
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
                />
              </FormGroup>
            </Col>
          </Row>

          <Button>Enviar</Button>
        </form>
      </Container>
    </>
  );
}
