import React from 'react'
import styled from 'styled-components'
import logo from "../assets/logo-removebg-preview.png";
import { FaWhatsapp, FaTwitter, FaLinkedin,  } from "react-icons/fa";



function Footer() {
  return (
    <Container>
      <Content>
        <CompanyInfo>
          <logoandname>
            <img src={logo} alt="" />
            Aether Semiconductors
          </logoandname>
          <about>
            Aether Semiconductors stands at the forefront of semiconductor
            innovation, offering a wide array of cutting-edge solutions and
            services that cater to the ever-evolving needs of the industry.
          </about>
        </CompanyInfo>
        <ContactLink>
          <heading>Contact Us</heading>
          <socialicons style={{ display: "flex", alignItems: "center" }}>
            <FaWhatsapp
              style={{
                width: "28px",
                height: "28px",
                marginRight: "16px",
                color: "#25D366",
              }}
            />
            <FaTwitter
              style={{
                width: "28px",
                height: "28px",
                marginRight: "16px",
                color: "#1DA1F2",
              }}
            />
            {/* <FaTimes
              style={{ width: "28px", height: "28px", marginRight: "16px" }}
            /> */}
            <FaLinkedin
              style={{
                width: "28px",
                height: "28px",
                marginRight: "16px",
                color: "#0a66c2",
              }}
            />
          </socialicons>
        </ContactLink>
        <Newsletter>
          <heading>Join Our Newsletter</heading>
          <formsection>
            <form>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="custom-placeholder"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </formsection>
        </Newsletter>
      </Content>
      <NavBar>
        <NavItems>
          <li>Technology </li>
          <li>Solutions</li>
          <li>About</li>
          <li>Insights</li>
        </NavItems>
      </NavBar>

      <CopyRights>
        <copyrights>copyrights. All rights reserved</copyrights>
      </CopyRights>
    </Container>
  );
}

export default Footer

const Container = styled.div`
padding-top:4rem ;
padding-bottom:2rem ;
padding:4rem ;

  background-color:gray;
`

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const CompanyInfo = styled.div`
  width: 320px;
  margin-left: 0.75rem;
  logoandname {
    display: flex;
    align-items: center;

    width: 320px;
    margin-bottom: 1rem;
    img {
      height: 64px;
      width: 64px;
      margin-right: 5px;
    }

    font-size: 32px;
    line-height: 1;

    font-weight: 600;
    color: black;
  }

  about {
    font-size: 14px;
    /* width: 20px; */
    /* margin-left:0.75rem ; */
    margin-top: 2rem;
    color: black;
    /* background-color:red ; */
    /* padding-top:20px ; */
  }
`;
const ContactLink = styled.div`
  /* background-color:pink ; */

  heading {
    font-size: 32px;
    font-weight: 600;
    color: black;
  }

  socialicons {
    margin-top: 0.5rem;
    /* color: black; */
  }
`;
const Newsletter = styled.div`
  heading {
    font-size: 32px;
    font-weight: 600;
    color: black;
  }

  formsection {
    .custom-placeholder::placeholder {
      color: black;
      /* font-style: italic; */
      /* Add any other styles you want to customize the placeholder */
    }
    form {
      display: flex;
      /* border: 1px solid #ccc; */

      /* justify-content: space-between; */

      /* flex-direction: column; */
      margin-top: 10px;
      color: black;
    }

    label {
      margin-bottom: 8px;
      font-weight: bold;
      color: black;
    }

    input[type="email"] {
      padding: 8px;
      font-size: 24px;

      /* margin-bottom: 16px; */
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 320px;
      height: 48px;
      margin-right: 8px;
      font-size: 16px;
      background-color: gray;
      color: black;
    }

    input[type="placeholder"] {
      color: black;
    }

    button {
      /* width: 140px; */
      /* height: 48px; */
      border: 2px solid black;
      border-radius: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      padding: 12px 12px;
      /* margin-top: 40px; */
      background-color: #000000;
      /* border:1px solid white ; */

      color: #ffffff;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  }
`;

const NavBar = styled.div`
display: flex;
justify-content: center;
align-items: center;

margin-top:2rem ;
`

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

const CopyRights = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-size: 12px;

  copyrights {
    color: black;
  }

`;

