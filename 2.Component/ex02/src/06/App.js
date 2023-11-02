import React from "react";
import styles from "./assets/scss/App.scss";
// import Header from "./Header";
import styled from "styled-components";

const StlyedH1 = styled.h1`
  width: 180px;
  text-align: center;
  font-size: 15px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #999;
  color: #1144fe;
  background-color: #cdc1ce;
`;

const StlyedDiv = styled.div`
  text-align: center;
`;

function App() {
  return (
    <StlyedDiv id={"App"}>
      <StlyedH1>CSS in JS: Stlyed Component(Less & Styleable)</StlyedH1>
    </StlyedDiv>
  );
}

export { App };
