import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostContainer = styled.main`
  width: 100%;

  display: flex;
  justify-content: center;

  > main {
    max-width: ${(params) => params.theme['main-max-width']};

    width: 100%;

    padding-inline: 6rem;
  }
`

export const PostHeader = styled.header`
  width: 100%;

  background-color: ${(params) => params.theme.colors.base.profile};

  border-radius: 10px;

  padding: 2rem;

  box-shadow: 0px 2px 28px 0px rgb(0, 0, 0, 0.2);

  > nav {
    width: 100%;

    display: flex;
    justify-content: space-between;

    margin-bottom: 1.25rem;
  }

  > h1 {
    color: ${(params) => params.theme.colors.base.title};

    font-size: ${(params) => params.theme.text.title.lg['font-size']};
    font-weight: ${(params) => params.theme.text.title.lg['font-weight']};

    margin-bottom: 0.5rem;
  }
`

export const BadgesContainer = styled.div`
  display: flex;
  column-gap: 2rem;
  align-items: center;
  justify-content: start;

  width: fit-content;
`

export const PostContentContainer = styled.section`
  padding: 2.5rem 2rem;

  color: ${(params) => params.theme.colors.base.text};
  font-size: ${(params) => params.theme.text.text.md['font-size']};
`

export const AContainer = styled.a`
  padding: 0.25rem;

  border-radius: 6px;

  text-decoration: none;
`

export const LinkContainer = styled(Link)`
  padding: 0.25rem;

  border-radius: 6px;

  text-decoration: none;
`
