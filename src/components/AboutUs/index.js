import React from 'react';
import styled from 'styled-components';

import {SharedParagraph} from "../../assets/shared/js/paragraph";
import { SharedBanner } from '../../assets/shared/js/sharedBanner'
import { ChineseHeader } from '../../assets/shared/js/chineseHeader';

import Jablez from "../../assets/shared/images/JohnHanrahan.jpg"
import { SharedSection } from '../../assets/shared/js/sharedSection';
import { CrownYellow } from '../../assets/shared/js/swatches';

const StyledHeadingsContainer = styled.div`
  padding: 0 1em;
`

const StyledImage = styled.img`
    border: 4px solid ${CrownYellow};
    padding: 15px;
    margin: 0;
    left: 0;
    margin-bottom: 25px;
    
    @media screen and (max-width: 992px) {
        position: relative;
    }
`

export const LocalSection = styled.section`
  margin: 50px 0;
  overflow: hidden;

  @media screen and (max-width: 992px) {
  }
`

const AboutUs = () => (
  <div>
    <LocalSection>
      <StyledHeadingsContainer>
        <ChineseHeader>传</ChineseHeader>
        <SharedBanner>About Us</SharedBanner>
      </StyledHeadingsContainer>

      <SharedParagraph>
        Lorem ipsum dolor amet tousled unicorn mustache, you probably haven't
        heard of them prism meh kombucha leggings locavore. Truffaut four loko
        dreamcatcher tbh listicle.
      </SharedParagraph>

      <SharedParagraph>
        Flexitarian taxidermy tilde four dollar toast live-edge health goth.
      </SharedParagraph>
    </LocalSection>
    <StyledImage src={Jablez} alt="Asia Craft Exchange: John Hanrahan" />
  </div>
)

export default AboutUs;