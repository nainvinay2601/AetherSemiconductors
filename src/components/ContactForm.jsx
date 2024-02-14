import React from 'react'
import styled from 'styled-components'
import { FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";

function ContactForm() {

  return (
    <Container>
      <h1>Contact Us</h1>

      <Content>
        <LetterAndForm>
          <Newsletter>
            <p>
              Subscribe to Aether Semiconductor's newsletter to stay updated
              with the latest news, advancements, and innovations in the
              semiconductor industry. Be the first to know about new products,
              technologies, and events. Join our community of innovators and
              stay ahead of the curve. Sign up now to receive our newsletter
              directly in your inbox.
            </p>
            <form>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </Newsletter>
        </LetterAndForm>

        <Footer>
          <Logo>Aether Semiconductors</Logo>
          <NavItems>
            <li>Technology </li>
            <li>Solutions</li>
            <li>About</li>
            <li>Insights</li>
          </NavItems>
          <SocialIcons style={{ display: "flex", alignItems: "center" }}>
            <FaWhatsapp
              style={{ width: "36px", height: "36px", marginRight: "16px" }}
            />
            <FaTwitter
              style={{ width: "36px", height: "36px", marginRight: "16px" }}
            />
            <FaLinkedin
              style={{ width: "36px", height: "36px", marginRight: "16px" }}
            />
          </SocialIcons>
          <Copyrights>Copyrights. All rights reserved.</Copyrights>
        </Footer>
      </Content>
    </Container>
  );
}

export default ContactForm

const Container = styled.div`
height:100vh ;
margin:20px ;
/* background-color:white  */
h1{
    font-size:48px ;
}
`

const Content = styled.div``
const LetterAndForm = styled.div`
display: flex;

p{
  width:640px ;
  font-size:16px ;
  color:grey ;
  /* padding-top:32px ; */
}
`
const Newsletter = styled.div`
  /* max-width: 400px; */
  /* margin: 0 auto; */
  /* padding: 20px; */
  /* border: 1px solid #ccc; */
  /* border-radius: 5px; */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  /* background-color: #f9f9f9; */

  margin-top: 12px;
  form {
    display: flex;
    /* border: 1px solid #ccc; */

    /* justify-content: space-between; */

    /* flex-direction: column; */
    margin-top: 24px;
  }

  label {
    margin-bottom: 8px;
    font-weight: bold;
  }

  input[type="email"] {
    padding: 8px;
    /* margin-bottom: 16px; */
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 320px;
    height: 48px;
    margin-right: 8px;
    font-size: 16px;
  }

  button {
    width: 140px;
    height: 48px;
    border: 2px solid black;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    /* margin-top: 40px; */
    background-color: #ffffff;
    /* border:1px solid white ; */

    color: #000000;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

const Footer= styled.div`

copyrights{
  margin-top:32px ;
}
`

const Logo = styled.div`
margin-top:32px ;
font-size:48px ;
font-weight:600 ;
`
const NavItems = styled.div`
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
const SocialIcons = styled.div`
margin-top:16px ;
`
const Copyrights = styled.div`
margin-top:38px ;
`
