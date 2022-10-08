import styled from "styled-components";

export const Header = styled.h1`
  margin-bottom: 1rem;
`;

export const Title = styled(Header)`
  font-size: 2rem;
`;

export const Subtitle = styled(Header)`
  font-size: 1.5rem;
`;

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  max-width: 500px;
  padding: 50px;
  border: 1px solid teal;
  border-radius: 10px;
`;

export const Row = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Col = styled.div`
  flex: 1;
`;

export const FormGroup = styled.div`
  margin: 1rem 0;
  width: 100%;

  label {
    display: none;
  }

  input {
    display: inherit;
    border: 1px solid lightgray;
    border-radius: 5px;
    font-size: 1rem;
    padding: 10px;
    width: inherit;
  }
`;

export const Button = styled.button`
  background-color: white;
  border: 1px solid teal;
  border-radius: 5px;
  color: black;
  text-decoration: none;
  display: block;
  font-size: 1.25rem;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  transition: all 0.8s ease-out;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  padding: 3rem;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease-out;
  padding: 1rem;
  border: 1px solid teal;
  border-radius: 10px;
  text-align: center;
  //cursor: pointer;

  &:hover {
    box-shadow: 3px 3px 3px 3px #00000021;
    transform: scale(1.01);
  }
`;

export const Cardcategories = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid teal;
  border-radius: 10px;
  text-align: center;
  transition: all 0.8s ease-out;
  cursor: pointer;
  color: #454545;

  &:hover {
    box-shadow: 3px 3px 3px 3px #00000021;
    background-color: teal;
    color: white;
  }
`;

export const CardDetails = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid teal;
  border-radius: 10px;
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const ProductName = styled.h2`
  height: 46px;
  margin: 14px 0;
  font-size: 14px;
  color: #555555;
  border-bottom: 1px solid teal;
  margin-bottom: auto;
`;

export const ProductDescription = styled.h3`
  height: 46px;
  margin: 14px 0;
  font-size: 14px;
  color: #555555;
  border-bottom: 1px solid teal;
  margin-bottom: auto;
`;

export const ProductActive = styled.h3`
  font-size: 14px;
  color: #555555;
`;

export const Frete = styled.p`
  margin-top: 30px;
  font-size: 15px;
  color: green;
`;

export const ProductPrice = styled.h2`
  margin: 15px 0;
  font-size: 15px;
  color: #555555;
`;

export const ValidMessage = styled.div`
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
`;

export const StyleHeader = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 70px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: teal;
  color: #fff;
`;

export const ImgFavorite = styled.img`
  cursor: pointer;
  margin-right: auto;
  width: 10%;
`;

export const ImgFav = styled.img`
  cursor: pointer;
  margin-left: auto;
  width: 24px;
`;

export const ImgDiv = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Div = styled.div`
  display: flex;
  gap: 20px;
`;
