// src/components/LandingPage.js
import React from "react";
import styled from "styled-components";
import fotoanak from "../style/img/anak.jpeg"
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0pc;
  font-family: Arial, sans-serif;
`;

const Content = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #191919;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #6b6b6b;
  margin: 20px 0;
`;

const Buttons = styled.div`
  margin-top: 20px;
  button {
    margin-right: 10px;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    background-color: #1890ff;
    border-radius: 4px;
    cursor: pointer;
  }

  .primary {
    background-color: #f97316;
    color: white;
  }

  .secondary {
    background-color: white;
    color: #f97316;
    border: 1px solid #f97316;
  }
`;

const Illustration = styled.div`
  img {
    max-width: 100%;
  }
`;

const LandingPage = () => {
  return (
    <Container>
      <Content style={{padding:" 100px 0px"}}>
        <Title style={{width:"80%" ,fontSize:"58px"}} id="intro">Cegah Stunting, Selamatkan Senyum Anak indonesia</Title>
        <Subtitle>
        Setiap anak di indonesia berhak untuk terlepas dari stunting dan tersenyum dengan lebar seperti anak pada umumnya
        </Subtitle>
        <Buttons>
          <button className="primary">Periksa Stunting</button>
          <button className="secondary">Learn more</button>
        </Buttons>
      </Content>
      <Illustration>
        <img style={{margin:"20px"}} src={fotoanak} alt="Illustration" />
      </Illustration>
    </Container>
  );
};

export default LandingPage;
