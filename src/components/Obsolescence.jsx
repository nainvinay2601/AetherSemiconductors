import React from 'react'
import styled from 'styled-components'
import banner from "../assets/final banner.jpg"

function Obsolescence() {
  return (
    <Container>
      <subheading>Future-proofing Your Technology</subheading>
      <h1>Obsolescence Engineering</h1>
      <p>
        Crafting Superior Semiconductor Solutions for Tomorrow's Technology.
        Partner with Us for Unmatched Performance and Reliability.
      </p>

      <img src={banner} alt="" />

      <button>Explore</button>
    </Container>
  );
}

export default Obsolescence

const Container = styled.div`
  
  margin: 4rem 10rem;
  margin-bottom:10rem ;

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
    margin-top: 2rem;
  }

  img {
    width: 920px;
    height: 420px;
    margin-top:2rem ;
    border-radius:10px ;
  }
`;