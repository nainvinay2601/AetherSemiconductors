import React from "react";
import styled from "styled-components";
import backgroundVideo from "../assets/iStock-1423825889_2.mp4"; // Replace with your video file

const ComponentWithVideoBackground = () => {
  return (
    <Container>
      <video className="video-background" autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Content>
        <h1>Our Solution</h1>
        <p>Learn more about our services and products.</p>
      </Content>
    </Container>
  );
};

export default ComponentWithVideoBackground;

const Container = styled.div`
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
    opacity: 0.6;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: start;
  color: white;
  text-align: center;
  padding: 20px;
  background-color: transparent; /* Set background color to transparent */
  h1 {
    background-color: transparent;
    color: black;
    font-size: 48px;
    opacity:1 ;
  }

  p {
    background-color: transparent;
    color: black;
    font-size: 24px;
  }
`;
