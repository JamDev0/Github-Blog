import styled from 'styled-components'

import backGroundImage from '../../assets/headerBackground.png'

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  justify-content: center;

  background-size: cover;
  background-image: url(${backGroundImage});
  background-position: center;

  padding: 4rem 0 8.375rem 0px;

  margin-bottom: -56px;

  > img {
    width: 9.25rem;
  }
`
