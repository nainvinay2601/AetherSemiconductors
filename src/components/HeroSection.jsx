import React from "react";
import styled from "styled-components";
import backgroundVideo from "../assets/iStock-1423825889_2.mp4";

function HeroSection() {
  return (
    <Container>
      <video className="video-background" autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar>
        <NavLogo>Logo</NavLogo>
        <NavItems>
          <li>Technology </li>
          <li>Solutions</li>
          <li>About</li>
          <li>Insights</li>
        </NavItems>
        <HamburgerMenu>icon</HamburgerMenu>
      </Navbar>
      <ContentBox>
        <Heading>Design Build Innovate</Heading>
        <Paragraph>
          Empower Your Innovate with Aether Semiconductors Advanced Technology.
        </Paragraph>
        <CTAButton>Explore</CTAButton>
      </ContentBox>
    </Container>
  );
}

export default HeroSection;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
  border: 1px solid white;

  .video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
`;



const Navbar = styled.div`
  width: 96vw;
  height: 2.75rem;
  padding: 2rem 0rem;
  margin: 1.25rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  color:white ;

  background-color: transparent;
  /* color: black; */
  background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent black background */
  backdrop-filter: blur(
    5px
  ); /* Apply a blur effect to create a glassy appearance */
  border-radius: 10px; /* Optional: Add rounded corners for a softer look */
`;

const NavLogo = styled.div`
  /* Styles for logo */
   background-color: transparent; 
  /* color: black;  */
`;

const NavItems = styled.ul`
   background-color: transparent;
  /* color: black;  */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 24.75rem;
  height: 2.5rem;
  font-size: 1rem;
  li {
    list-style: none;
    padding-right: 3rem;
    font-weight: 600;
     background-color: transparent;
    /* color: black;  */
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const HamburgerMenu = styled.div`
  /* Styles for hamburger menu icon */
  background-color: transparent; 
  /* color: black;  */
`;

const ContentBox = styled.div`
  margin: 5rem 0rem;
  margin-bottom: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 4rem;
  background-color: transparent;

  color: black;
  z-index: 1;
`;

const Paragraph = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 400;
  width: 540px;
  text-align: center;
  margin-top: 10px;
  background-color: transparent;

  color: black;
  z-index: 1;
`;

const CTAButton = styled.div`
  width: 160px;
  height: 48px;
  border: 2px solid black;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  margin-top: 40px;
  background-color: black;

  color: white;
  z-index: 1;
`;
