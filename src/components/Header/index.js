// Dependencies
import React from 'react'
import Link from 'gatsby-link'

// Assets
import logo from '../../assets/shared/images/ACX_v2.svg';

// Styled Components
import styled from 'styled-components';

const StyledImage = styled.img`
    width: 300px;
    margin: 30px auto;
    display: block;
`

const Header = () => (
  <div
    style={{
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <StyledImage src={logo} alt="Asia Craft Exchange"/>
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
