// src/components/LandingPage.js
import React from "react";
import styled from "styled-components";
import fotoanak from "../style/img/anak.jpeg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 2rem 1rem;
  }
`;

const Content = styled.div`
  max-width: 600px;
  padding: 100px 0px;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem 0;
    margin-top: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 58px;
  color: #191919;
  width: 80%;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 36px;
    width: 100%;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #6b6b6b;
  margin: 20px 0;
`;

const Buttons = styled.div`
  margin-top: 20px;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }

  .primary {
    background-color: #f97316;
    color: white;
    margin-right: 10px;

    &:hover {
      background-color: #ea580c;
    }
  }

  .secondary {
    background-color: white;
    color: #f97316;
    border: 1px solid #f97316;

    &:hover {
      background-color: #fff7ed;
    }
  }
`;

const Illustration = styled.div`
  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    max-width: 100%;
    height: auto;
    margin: 20px;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(0, 0, 0, 0.06);

    @media (max-width: 768px) {
      margin: 0;
    }
  }
`;

const LandingPage = () => {
  return (
    <Container>
      <Content>
        <Title id="intro">
          Cegah Stunting, Selamatkan Senyum Anak Indonesia
        </Title>
        <Subtitle>
          Setiap anak di Indonesia berhak untuk terlepas dari stunting dan tersenyum dengan lebar seperti anak pada umumnya
        </Subtitle>
        <Buttons>
          <button className="primary">Periksa Stunting</button>
          <button className="secondary">Learn more</button>
        </Buttons>
      </Content>
      <Illustration>
        <img src={fotoanak} alt="Illustration" />
      </Illustration>
    </Container>
  );
};

export default LandingPage;