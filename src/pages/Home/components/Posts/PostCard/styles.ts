import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const PostCardContainer = styled(Link)`
  flex: 1;

  text-decoration: none;

  min-width: 26rem;

  padding: 2rem;

  background-color: ${(params) => params.theme.colors.base.post};

  border-radius: 10px;
  border: 2px solid transparent;

  > header {
    width: 100%;

    display: flex;
    column-gap: 1rem;
    justify-content: space-between;

    margin-bottom: 1.25rem;

    > h2 {
      font-size: ${(params) => params.theme.text.title.md['font-size']};
      font-weight: ${(params) => params.theme.text.title.md['font-weight']};
      color: ${(params) => params.theme.colors.base.title};
    }

    > span {
      min-width: fit-content;

      font-size: ${(params) => params.theme.text.text.sm['font-size']};
      color: ${(params) => params.theme.colors.base.span};
    }
  }

  > p {
    font-size: ${(params) => params.theme.text.text.md['font-size']};
    color: ${(params) => params.theme.colors.base.text};

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  :hover {
    border: 2px solid ${(params) => params.theme.colors.base.label};
  }
`
