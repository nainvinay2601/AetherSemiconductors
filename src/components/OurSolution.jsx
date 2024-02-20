import React from 'react'
import styled from "styled-components";
import engineerPhoto from "../assets/engineering.jpeg";

function OurSolution() {
  return (
    <Container>
      <subheading>Driving Innovation and Efficiency</subheading>
      <h1>Solutions for Semiconductor Excellence</h1>
      <p>
        Aether Semiconductors provides cutting-edge solutions tailored to the
        semiconductor industry. From obsolescence engineering to supply chain
        management, our services are designed to enhance efficiency and drive
        innovation across the semiconductor value chain.
      </p>

      <Content>
        <contentInfo>
          <contentimage>
            <img src={engineerPhoto} alt="" />
          </contentimage>
          <contentname>Engineering</contentname>
          <contentdetails>
            Aether Semiconductors excels in precision processing and innovative
            solutions.
          </contentdetails>
        </contentInfo>
        <contentInfo>
          <contentimage>
            <img src={engineerPhoto} alt="" />
          </contentimage>
          <contentname>Engineering</contentname>

          <contentdetails>
            Aether Semiconductors excels in precision processing and innovative
            solutions.
          </contentdetails>
        </contentInfo>
      </Content>

      <buttonBox>
        <button>Explore</button>
      </buttonBox>
    </Container>
  );
}

export default OurSolution

const Container = styled.div`
  margin: 4rem 10rem;

  subheading {
    font-size: 16px;
  }

  h1 {
    font-size: 48px;
    margin-top: 0.5rem;
    background: rgb(148, 187, 233);
    background: radial-gradient(
      circle,
      rgba(148, 187, 233, 1) 0%,
      #2b9c40 100%
    );
    background-clip: text;
    color: transparent;
  }

  p {
    font-size: 20px;
    /* margin-top:1rem ; */
    color: gray;
  }

  buttonBox {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      font-size: 16px;
      border-radius: 24px;
      height: 48px;
      width: 160px;
      padding: 18px 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2.5rem;
      background-color: #ffffff;
      color: black;
      font-weight: 600;
      border: 1px solid black;
      margin-bottom: 2.5rem;
      margin-top: 4rem;
    }
  }

  border-bottom: 1px solid gray;
`;

const Content = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;

  contentInfo {
    display: flex;
    flex-direction: column;
  }

  contentname {
    font-size: 24px;
  }

  contentdetails {
    font-size: 16px;
    color: gray;
    width: 450px;
  }

  contentimage {
    img {
      height: 420px;
      width: 450px;
    }
  }
`;