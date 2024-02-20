import React from "react";
import styled from "styled-components";
// import { FaBars } from "react-icons/fa";
import logo from "../assets/logo-removebg-preview.png"
import { GiHamburgerMenu } from "react-icons/gi";
// import MenuIcon from "@mui/icons-material/Menu";

// const StyledFaBars = styled(FaBars)`
//   color: black !important;
// `;


function HeroSection() {
  return (
    <Container>
      {/* <video className="video-background" autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <Navbar>
        <NavLogo>
          <img src={logo} alt="" />
        </NavLogo>
        <NavItems>
          <li>Technology </li>
          <li>Solutions</li>
          <li>About</li>
          <li>Insights</li>
        </NavItems>
        <HamburgerMenu>
          {/* <StyledFaBars size={20} /> */}
          <GiHamburgerMenu  size={20} style={{color:"black"}} />

          {/* <MenuIcon style={{ color: "black" }} /> */}
        </HamburgerMenu>
      </Navbar>
      <ContentBox>
        <subheading>Engineering Tomorrow's Solutions Today</subheading>
        <Heading>We Design</Heading>
        <HeadingTwo>We Build</HeadingTwo>
        <Heading>We Innovate</Heading>
        <CTAButton>Explore</CTAButton>
        {/* <Paragraph>
          Empower Your Innovate with Aether Semiconductors Advanced Technology.
        </Paragraph> */}
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
  margin-bottom:6rem ;
  /* border-bottom:1px solid gray ; */
  /* background-color:pink ; */
  /* border: 1px solid white; */

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
  /* width: 96vw; */
  height: 2.75rem;
  padding: 2rem 0rem;
  margin: 1.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  /* color:white ; */
  /* background-color:gray ; */

 /* Apply a blur effect to create a glassy appearance */
  border-radius: 10px; /* Optional: Add rounded corners for a softer look */
`;

const NavLogo = styled.div`
  /* Styles for logo */
  /* background-color: transparent; */
  /* color: black;  */
  img {
    height: 48px;
    width: 48px;
  }
`;

const NavItems = styled.ul`
   background-color: transparent;
  color: black; 
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
    color: black; 
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const HamburgerMenu = styled.div`
  /* Styles for hamburger menu icon */
  /* background-color: transparent;  */
  /* color: black;  */

  /* background-color:black ; */
  
`;


const ContentBox = styled.div`
  subheading {
    font-size: 12px;
    border: 1px solid gray;
    border-radius: 24px;
    width: 240px;
    padding: 5px;

    color: black;
  }
  margin: 2.5rem 2rem;
  margin-bottom: 10rem;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;

  
  color: black;

  /* background-color:pink ; */
`;

const Heading = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  font-weight: 600;
  font-size: 5rem;
  /* background-color: transparent; */

  /* color: black; */
  z-index: 1;
  color: black;
`;

const HeadingTwo = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  font-weight: 600;
  font-size: 5rem;
  /* background-color: transparent; */

  /* color: black; */
  z-index: 1;
  background: rgb(148, 187, 233);
  background: radial-gradient(circle, rgba(148, 187, 233, 1) 0%, #2b9c40 100%);
  background-clip: text;
  color: transparent;
`;

const Paragraph = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  font-size: 1.5rem;
  font-weight: 400;
  width: 540px;
  /* text-align: center; */
  margin-top: 10px;
  background-color: transparent;

  /* color: black; */
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
  margin-top: 20px;
  background-color: #ffffff;
  font-weight:600 ;

  color: black;
  z-index: 1;

  
`;
