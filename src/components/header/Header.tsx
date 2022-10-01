import { Div, ImgFav, StyleHeader } from "../Layouts";
import favorite from "../../assets/img/fav.png";
import home from "../../assets/img/home.png";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <StyleHeader>
      <h3>OtOl_Store</h3>
      <Div>
      <Link to={{ pathname: "/" }}>
        <img
          src={home}
          alt="Home"
          style={{ width: "24px", cursor: "pointer" }}
        />
      </Link>
      <Link to={{ pathname: "/favorites" }}>
        <ImgFav src={favorite} alt="Favorites"></ImgFav>
      </Link>
      </Div>
    </StyleHeader>
  );
};
