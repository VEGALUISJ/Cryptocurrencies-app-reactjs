import React from "react";
import styled from "@emotion/styled";
import CryptoImage from "../src/cryptocurrencies-image.png";
import Form from "./components/Form.jsx";

const Container = styled.div`
  max-width: 900px;
  margin: auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.div`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 5rem;

  &::after {
    content: "";
    width: 100px;
    height: 7px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  return (
    <Container>
      <div>
        <Imagen src={CryptoImage} alt="Logo-Cryptocurrencies" />
      </div>
      <div>
        <Heading>Quote your Cryptocurrencies Now!</Heading>
        <Form />
      </div>
    </Container>
  );
}

export default App;
