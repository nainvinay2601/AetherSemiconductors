import React from "react";
import styled from "styled-components";
import backgroundVideo from "../assets/iStock-1423825889_2.mp4";


const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* z-index: 0; Ensure the video is behind other content */

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute; /* Position the video to cover the entire container */
    top: 0;
    left: 0;
  }
`;

const BackgroundVideo = () => {
  return (
    <VideoContainer>
      <video autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
        {/* Add additional source elements for different video formats if needed */}
        Your browser does not support the video tag.
      </video>
    </VideoContainer>
  );
};

export default BackgroundVideo;
