import React from 'react'
import styled from 'styled-components'

function WhoWeAre() {
  return (
    <Container>
      <subheading>Vision</subheading>
      <h1>“Empowering India’s Semiconductor Future”</h1>
      {/* <p>
        Aether Semiconductors has established itself as a proficient and
        well-respected player in the realm of semiconductor device fabrication.{" "}
      </p>
      <p>
        By employing precise processing technologies, the company facilitates
        rapid innovation across the comprehensive spectrum of microelectronics.
        Aether's expertise spans from cutting-edge materials research and
        development to the prototyping of micro and nanodevices, scalable
        manufacturing, and the final implementation of applications in diverse
        fields such as Optics, Photonics, MEMS/Sensors, Microfluidics, RF, and
        Printed Electronics.
      </p>
      <p>
        Setting itself apart, Aether offers a unique blend of capabilities
        throughout the value chain, providing a platform for flexibility in
        innovation and seamless integration into scalable manufacturing
        processes. The company places a strong emphasis on sustainability,
        achieving zero waste while aligning with industry standards in the
        semiconductor sector. Aether Semiconductors thus stands as a leader,
        fostering compatibility, efficiency, and innovation in the dynamic
        landscape of microelectronics.
      </p> */}

      <p className="italicsection">

     
        To be the pioneering force in India’s semiconductor landscape, our
        vision is to create a transformative impact by delivering cutting-edge,
        ‘Make in India’ chips. From macro and micro devices to complex
        integrated circuits (ICs), we strive to lead the industry with
        innovation, precision, and unwavering commitment.
      </p>

      <h3>Our mission is twofold</h3>
      <p>
        <b>Advanced Chip Manufacturing: </b>
        We aim to be the most advanced and largest technology and foundry
        services provider to fabless companies and integrated device
        manufacturers (IDMs). By forging strong partnerships, we will drive the
        semiconductor industry forward. 
      </p>
      <p>
        {" "}
        <b>Engineering Excellence: </b>
        We envision a talent-rich ecosystem that fuels the growth of the
        semiconductor industry. Our commitment to nurturing an advanced talent
        pool ensures that we remain at the forefront of engineering services.
        Through innovation, collaboration, and sustainable practices, we empower
        our clients and contribute to India’s semiconductor success story.
      </p>
      {/* <p>
        We are committed to driving India’s semiconductor industry by creating
        cutting-edge chips, fostering engineering excellence, and nurturing a
        talent pool that propels innovation. Our vision is to be the catalyst
        for transformative growth, positioning India as a global semiconductor
        powerhouse.
      </p> */}
      <button>Learn More</button>
    </Container>
  );
}

export default WhoWeAre

const Container = styled.div`
  padding: 4rem 2rem;
  padding-right:6rem ;
  /* border-bottom:1px solid gray ; */
  background-color:black ;

  subheading {
    font-size: 16px;
    /* color:black; */
    color:white ;
    border:1px solid white ;
    padding:4px ;
    border-radius:15px ;
  }

  .italicsection{
    font-style:italic ;
  }

  h3{
    margin-top:1rem ;
  }
  h1 {
    font-size: 32px;
    font-weight: 400;
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
    font-size: 18px;
    font-weight: 200;
    margin-top: 1rem;
    color: gray;
  }

  button {
    /* padding:48px 24px ; */
    font-size: 16px;
    border-radius: 24px;
    height: 48px;
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
  }
`;