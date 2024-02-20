import React from 'react'
import styled from 'styled-components'

import jaypee from "../assets/jaypee (1).png"
import pu from "../assets/Panjab_University_logo (1).png"
import optsol from "../assets/optimum solutions (1).png"
import swiss from "../assets/Swiss Cluster (1).png"

function Partners() {
  return (
   <Container>
  <img src={jaypee} alt="" />
  <img src={pu} alt="" />
  <img src={optsol} alt="" />
  <img src={swiss} alt="" />
  
   </Container>
  )
}

export default Partners

const Container = styled.div`

display: flex;
justify-content:space-evenly;
align-items:center ;
/* background-color:black ; */

padding-bottom:56px ;

img{
  height:156px ;
  width:180px ;
}

`