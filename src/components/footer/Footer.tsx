import linkedin from "../../assets/img/linkedin.png"
import git from "../../assets/img/git.png"
import { CardFooter } from "../Layouts";

export default function Footer() {
  return (
    <CardFooter>
      <p>Developed by Gregório Neto &copy;</p>
      <a
        href="https://www.linkedin.com/in/greg%C3%B3rio-neto-a0119b239/"
        target="_blank"
      >
        <img src={linkedin} />
      </a>
      <a href="https://github.com/GregorioGrGeOtOl" target="_blank">
        <img src={git} />
      </a>
    </CardFooter>
  );
}
