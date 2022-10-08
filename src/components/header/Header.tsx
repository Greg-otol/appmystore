import { Div, ImgFav, StyleHeader } from "../Layouts";
import favorite from "../../assets/img/fav.png";
import home from "../../assets/img/home.png";
import config from "../../assets/img/config.png";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <StyleHeader>
      <h3>OtOl_Store</h3>
      <Div>
        <Link to={"/config"}>
          <img
            src={config}
            alt=""
            style={{ width: "30px", cursor: "pointer" }}
          />
        </Link>
        <Link to={{ pathname: "/products" }}>
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
