import React from "react";
import styled from "@emotion/styled";

const ResultDiv = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;

const Price = styled.p`
  font-size: 30px;
`;

const Quote = ({ result }) => {
  if (Object.keys(result).length === 0) return null;
  console.log(result);
  return (
    <ResultDiv>
      <Price>
        The price is:{" "}
        <span>The value of the Bitcoin today is: {result.PRICE}</span>
      </Price>
      <Info>
        Higher price of the day is:{" "}
        <span>The value of the Bitcoin today is: {result.HIGHDAY}</span>
      </Info>
      <Info>
        Lowest price of the day:{" "}
        <span>The value of the Bitcoin today is: {result.LOW24HOUR}</span>
      </Info>
      <Info>
        Variation in the last 24 hours:{" "}
        <span>The value of the Bitcoin today is: {result.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Last update is:{" "}
        <span>The value of the Bitcoin today is: {result.LASTUPDATE}</span>
      </Info>
    </ResultDiv>
  );
};

export default Quote;
