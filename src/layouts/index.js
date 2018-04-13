import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'
import {cream} from  '../assets/shared/js/swatches';

const TemplateWrapper = ({ children }) => (
  <div style={{ background: cream }}>
    <Helmet
      title="Asia Craft Exchange"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        {
          href:
            'https://fonts.googleapis.com/css?family=Noto+Sans:700|Playfair+Display:900i|Source+Sans+Pro:600',
          rel: 'stylesheet',
        },
        {
          href: './static/fonts/PlayfairDisplay-BlackItalic.ttf',
          rel: 'stylesheet',
        },
        {
          href: './static/fonts/SourceSansPro-Semibold.ttf',
          rel: 'stylesheet',
        },
        {
          href: './static/fonts/NotoSansCJKjp-Bold.ttf',
          rel: 'stylesheet',
        },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
