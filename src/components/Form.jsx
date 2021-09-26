import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useCoin from "../hooks/useCoin";
import useCryptocurrecie from "../hooks/useCryptocurrecie";
import Error from "./Error";
import axios from "axios";

const Button = styled.button`
  margin-top: 2rem;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a3fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = () => {
  const [listcrypto, Setlistcrypto] = useState([]);
  const [error, setError] = useState(false);

  const MONEDA = [
    { code: "USD", name: "United States Dollar" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "EUR", name: "European Coin Euro" },
    { code: "GBP", name: "Pound Sterling" },
  ];

  //using useCoin Hook
  const [coin, SetCoin] = useCoin("Choose Your Coin", "", MONEDA);

  //using useCryptocurrencie Hook
  const [crypto, SetCrypto] = useCryptocurrecie(
    "Choose Your Cryptocurrencie",
    "",
    listcrypto
  );

  //using cryptocurrencie API
  useEffect(() => {
    const consultAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const res = await axios.get(url);

      Setlistcrypto(res.data.Data);
    };
    consultAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(coin);
    if (coin.initialState === "" || crypto.initialState === "") {
      setError(true);
      return;
    }

    setError(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <Error message="All fields are required. Please check and try again." />
      ) : null}

      <SetCoin />

      <SetCrypto />

      <Button type="submit" value="submit">
        Quote now
      </Button>
    </form>
  );
};

export default Form;
