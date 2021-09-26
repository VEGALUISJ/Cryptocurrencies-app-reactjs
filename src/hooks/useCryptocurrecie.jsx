import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Options = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 700;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
`;

const useCrypto = (label, initialState, options) => {
  //Custom Hook State
  const [state, setState] = useState({ initialState });

  const Select = () => (
    <Fragment>
      <Label>{label}</Label>
      <Options onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">--Select your option--</option>
        {options.map((option) => (
          <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>
            {option.CoinInfo.FullName}
          </option>
        ))}
      </Options>
    </Fragment>
  );

  return [state, Select, setState];
};

export default useCrypto;
