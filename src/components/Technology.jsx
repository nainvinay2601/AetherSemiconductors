import React from 'react'
import styled from "styled-components";


function Technology() {
  return (
    <Container>
      <Heading>Technology</Heading>
      <Technologies>
        <primaryTechnology>
          <techName>Engineering</techName>
        </primaryTechnology>
        <secondaryTechnology>
         
          <techName>Spares</techName>
        </secondaryTechnology>
        <technologyThree>
          <techName>Fabrication</techName>
        </technologyThree>
      </Technologies>
    </Container>
  );
}

export default Technology;

const Container = styled.div`
  height: 100vh;
`;
const Heading = styled.div`

  font-size: 48px;
  font-weight: 600;
  margin: 2rem 0.75rem;
`;
const Technologies = styled.div`
  height: 65vh;

  margin: 0rem 0.75rem;
  display: flex;
  justify-content: space-between;
  techName {
    background-color: white;
    color: black;

    margin-bottom: 24px;
  }

  primaryTechnology {
    height: 65vh;
    width: 31vw;
    background-color: white;
    color: black;
    display: flex;
    align-items: end;
    font-size: 24px;
    font-weight: 600;
    
  }
  secondaryTechnology {
    height: 65vh;
    color: black;
    display: flex;
    align-items: end;
    font-size: 24px;
    font-weight: 600;
    width: 31vw;
    background-color: white;
    
  }

  technologyThree {
    height: 65vh;
    color: black;
    display: flex;
    align-items: end;
    font-size: 24px;
    font-weight: 600;
    width: 31vw;
    background-color: white;
  }

  
`;