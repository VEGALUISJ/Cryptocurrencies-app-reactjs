import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import CryptoImage from "../src/cryptocurrencies-image.png";
import Form from "./components/Form.jsx";
import Quote from "./components/Quote";
import Spinner from "./Spinner/Spinner";

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
  const [coins, setCoins] = useState("");
  const [cryptos, setCryptos] = useState("");
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const quotingCryptocurrencie = async () => {
      //avoiding not execute function if coins and cryptos states are empty
      if (coins === "" || cryptos === "") return;

      //consulting API to obtain quote
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptos}&tsyms=${coins}`;
      const res = await axios.get(url);

      setLoading(true);

      setTimeout(() => {
        //setting loading state to false
        setLoading(false);

        //Saving results in the state
        setResult(res.data.DISPLAY[cryptos][coins]);
      }, 3000);
    };

    quotingCryptocurrencie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coins, cryptos]);

  const LoadingComponent = loading ? <Spinner /> : <Quote result={result} />;

  return (
    <Container>
      <div>
        <Imagen src={CryptoImage} alt="Logo-Cryptocurrencies" />
      </div>
      <div>
        <Heading>Quote your Cryptocurrencies Now!</Heading>
        <Form setCoins={setCoins} setCryptos={setCryptos} />
        {LoadingComponent}
      </div>
    </Container>
  );
}

export default App;
