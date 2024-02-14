import React from 'react'
import styled from 'styled-components'

function Obsolescence() {
  return (
    <Container>
      <h1>Obsolescence Engineering</h1>
      <p>
        Crafting Superior Semiconductor Solutions for Tomorrow's Technology.
        Partner with Us for Unmatched Performance and Reliability.
      </p>
      <button>Explore More</button>
    </Container>
  );
}

export default Obsolescence

const Container = styled.div`
  /* width:100vw ; */
  padding: 4rem 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 48px;

    background: rgb(148, 187, 233);
    background: radial-gradient(
      circle,
      rgba(148, 187, 233, 1) 0%,
      rgba(61, 255, 55, 1) 100%
    );
    background-clip: text;
    color: transparent;
  }

  p {
    width: 520px;
    margin-top: 1.75rem;
    font-size: 24px;
  }
  button {
    width: 180px;
    height: 48px;
    margin-top: 2.75rem;
    border-radius: 24px;
    border: 2px solid white;
    font-size: 18px;
  }
`;