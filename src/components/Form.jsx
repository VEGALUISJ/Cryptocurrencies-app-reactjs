import React, { useState } from "react";
import styled from "@emotion/styled";
import useCoin from "../hooks/useCoin";

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
  const MONEDA = [
    { code: "USD", name: "United States Dollar" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "EUR", name: "European Coin Euro" },
    { code: "GBP", name: "Pound Sterling" },
  ];

  //using created hook
  const [coin, SetCoin, setState] = useCoin("Choose Your Coin", "", MONEDA);

  return (
    <form>
      <SetCoin />

      <Button type="submit" value="submit">
        Quote now
      </Button>
    </form>
  );
};

export default Form;
