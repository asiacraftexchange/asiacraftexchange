import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { SharedParagraph } from '../assets/shared/js/paragraph'

import Welcome from '../components/Welcome'
import ContactUs from '../components/ContactUs'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

const StyledContainer = styled.div`
  max-width: 700px;
  margin: auto;
  display: block;

  @media screen and (min-width: 992px) {
    
  }
`

const IndexPage = () => (
  <div>
    <StyledContainer id="home">
      <Welcome />
      <ContactUs />
      <AboutUs />
      <Footer />
    </StyledContainer>
  </div>
)

export default IndexPage
