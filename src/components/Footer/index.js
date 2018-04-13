import React from 'react'
import styled from 'styled-components'

import { SharedBanner } from '../../assets/shared/js/sharedBanner'
import { Black, Cream } from '../../assets/shared/js/swatches'
import ShortLogo from '../../assets/shared/images/ACX_Fooer_v1.svg'
import { Link } from 'react-router-dom'

// const StyledHeadingsContainer = styled.div`
//   padding: 0 1em;
// `

const LocalBanner = styled.h1`
  color: ${Cream};
  font-family: serif;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-style: italic;

  @media screen and (min-width: 992px) {
  }
`

const LocalParagraph = styled.p`
  color: ${Cream};
  font-family: 'Source Sans Pro', sans-serif;
  text-align: center;

`

const LocalSection = styled.section`
  margin: 50px 0;
  padding: 50px;
  background: ${Black};

  @media screen and (max-width: 992px) {
  }
`
const LocalImage = styled.img`
  width: 25%;
  margin: auto;
  display: block;

  @media screen and (max-width: 992px) {
    width: 50%;
  }
`

const Footer = () => (
  <LocalSection>
    <Link to="/">
      <LocalImage src={ShortLogo} alt="Asia Craft Exchange | Logo" />
    </Link>
    <section style={{ margin: '50px auto' }}>
      <LocalParagraph>
        305 E. 21st Street Apt 302 | New York, NY, 10010
      </LocalParagraph>
      <LocalParagraph>&copy; Copyright Asia Craft Exchange</LocalParagraph>
    </section>
  </LocalSection>
)

export default Footer
