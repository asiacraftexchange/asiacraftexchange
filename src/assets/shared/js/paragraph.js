import styled from 'styled-components'
import { CrownYellow } from '../js/swatches'

export const SharedParagraph = styled.p`
  font-size: 1.5em;
  font-family: 'Source Sans Pro', sans-serif;
  padding: 1em;
  line-height: 1.5em;

  ::first-letter {
    border-left: 3px solid ${CrownYellow};
    font-family: 'Playfair Display', serif;
    font-size: 2em;
    border-left: 4px solid ${CrownYellow};
    padding: 0 15px;

  }

  @media screen and (min-width: 992px) {
    font-size: 1.2em;
  }
`
