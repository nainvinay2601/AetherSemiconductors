import React from 'react'
import styled from 'styled-components'
import engineerPhoto from "../assets/engineeringNew.jpg";
import fixture from "../assets/fixture-removebg-preview.png"


function Technology() {
  return (
    <Container>
      <subheading>Technology</subheading>
      <h1>Transforming the Semiconductor Landscape</h1>
      <p>
        Aether Semiconductor Technological Edge encompasses engineering
        excellence and innovation across diverse fields, from materials research
        to scalable manufacturing.
      </p>

      <Content>
        <contentInfo>
          <contentimage>
            <img src={engineerPhoto} alt="" />
          </contentimage>
          <contentname>Device Modelling & Fabrication</contentname>
          {/* <contentdetails>
            Elevate Performance with Our Expertise: Seamlessly Fabricating MEMS
            for Precision in Every Movement."
          </contentdetails> */}
        </contentInfo>
        <contentInfo>
          <contentimage>
            <img src={fixture} alt="" />
          </contentimage>
          <contentname>Fixture</contentname>

          {/* <contentdetails>
            Developing fixtures for semiconductor equipment involves designing
            and constructing specialized tools or devices that hold and position
            semiconductor components during various manufacturing or testing
            processes. Fixtures play a crucial role in ensuring precision,
            repeatability, and efficiency in semiconductor production.
          </contentdetails> */}
        </contentInfo>
        <contentInfo>
          <contentimage>
            <img src={engineerPhoto} alt="" />
          </contentimage>
          <contentname>Engineering</contentname>

          {/* <contentdetails>
            Experience temperature control excellence with our precision-based
            commercial solution, ensuring optimal performance in every
            environment. (4 channel low-cost high precision system available)
          </contentdetails> */}
        </contentInfo>
      </Content>

      <buttonBox>
        <button>Explore</button>
      </buttonBox>
    </Container>
  );
}

export default Technology

const Container = styled.div`
  padding: 4rem 2rem;
  background-color: black;

  subheading {
    font-size: 12px;
    /* color:black ; */
    border: 1px solid gray;
    padding: 4px;
    border-radius: 24px;
    color: white;
  }

  h1 {
    font-size: 32px;
    margin-top: 0.5rem;
    background: rgb(148, 187, 233);
    background: radial-gradient(
      circle,
      rgba(148, 187, 233, 1) 0%,
      #2b9c40 100%
    );
    background-clip: text;
    color: transparent;
    /* color: white; */
  }

  p {
    font-size: 16px;
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

  /* border-bottom:1px solid gray ; */
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
    /* color:black ; */
    display: flex;
    justify-content: center;
    align-items:center;
  }

  contentdetails {
    font-size: 16px;
    color: gray;
    width:250px ;
  }

  contentimage {
    img {
      height: 340px;
      width: 340px;
      border-radius:5px ;
      /* border:1px solid white ; */
    }

   
  }
`;