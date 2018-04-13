import React from 'react';
import styled from 'styled-components';

import {ChineseHeader} from "../../assets/shared/js/chineseHeader";
import { SharedBanner } from '../../assets/shared/js/sharedBanner';
import { SharedSection } from '../../assets/shared/js/sharedSection';
import { SharedParagraph } from '../../assets/shared/js/paragraph';
import ContactForm from './contactForm';


const StyledHeadingsContainer = styled.div`
  padding: 0 1em;
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

      <ContactForm />
  </SharedSection>
)

export default Contact;