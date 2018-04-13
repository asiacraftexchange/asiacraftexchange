import React from 'react'
import styled from 'styled-components'

import { ChineseHeader } from '../../assets/shared/js/chineseHeader'
import { SharedBanner } from '../../assets/shared/js/sharedBanner'
import { SharedSection } from '../../assets/shared/js/sharedSection'
import { SharedParagraph } from '../../assets/shared/js/paragraph'
import ContactForm from './contactForm'
import { Black, Cream } from '../../assets/shared/js/swatches';

const StyledHeadingsContainer = styled.div`
  padding: 0 1em;
`

const LocalStyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const LocalStyledInput = styled.input`
  margin: 20px 0;
  border: 4px solid ${Black};
  padding: 20px;
  color: ${Black};
  font-family: 'Source Sans Pro';
  font-size: 18px;
  outline: none;
`

const LocalStyledTextArea = styled.textarea`
  margin: 20px 0;
  border: 4px solid ${Black};
  padding: 20px;
  color: ${Black};
  font-family: 'Source Sans Pro';
  font-size: 18px;
  outline: none;
`
const LocalStyledButton = styled.button`
  margin: 20px 0;
  background: ${Black};
  color: ${Cream};
  padding: 20px;
  font-family: 'Playfair Display';
  font-size: 30px;
`

const Contact = () => (
  <SharedSection>
    <StyledHeadingsContainer>
      <ChineseHeader>联系我们</ChineseHeader>
      <SharedBanner>Contact Us</SharedBanner>
    </StyledHeadingsContainer>

    <SharedParagraph>
      Lorem ipsum dolor amet tousled unicorn mustache, you probably haven't
      heard of them prism meh kombucha leggings locavore. Truffaut four loko
      dreamcatcher tbh listicle.
    </SharedParagraph>

    <LocalStyledForm
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <LocalStyledInput name="name" placeholder="Your Name" type="text" />
      <LocalStyledInput name="email" placeholder="name@name.com" type="email" />
      <LocalStyledTextArea name="message" />
      <LocalStyledButton>Send</LocalStyledButton>
    </LocalStyledForm>

    <ContactForm />
  </SharedSection>
)

export default Contact
