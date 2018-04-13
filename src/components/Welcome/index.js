import React from 'react';
import styled from 'styled-components';

import { SharedParagraph } from "../../assets/shared/js/paragraph";
import { SharedBanner } from "../../assets/shared/js/sharedBanner";
import { ChineseHeader } from '../../assets/shared/js/chineseHeader';
import { SharedSection } from '../../assets/shared/js/sharedSection';


const StyledHeadingsContainer = styled.div`
  padding: 0 1em;
`

const Welcome = () => (
  <SharedSection>
    <StyledHeadingsContainer>
      <ChineseHeader>欢迎</ChineseHeader>
      <SharedBanner>Welcome</SharedBanner>
    </StyledHeadingsContainer>

    <SharedParagraph>
      Lorem ipsum dolor amet tousled unicorn mustache, you probably haven't
      heard of them prism meh kombucha leggings locavore. Truffaut four loko
      dreamcatcher tbh listicle. Flexitarian taxidermy tilde four dollar toast
      live-edge health goth.
    </SharedParagraph>

    <SharedParagraph>
      Lorem ipsum dolor amet tousled unicorn mustache, you probably haven't
      heard of them prism meh kombucha leggings locavore. Truffaut four loko
      dreamcatcher tbh listicle. Flexitarian taxidermy tilde four dollar toast
      live-edge health goth.
    </SharedParagraph>
  </SharedSection>
)

export default Welcome;