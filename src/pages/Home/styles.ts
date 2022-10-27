import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  padding-bottom: 100px;

  > main {
    max-width: 70rem;

    width: 100%;

    padding-inline: 6rem;
  }
`

export const PostsHeader = styled.header`
  width: 100%;

  > section {
    width: 100%;

    display: flex;
    justify-content: space-between;

    margin-bottom: 1.5rem;

    > h2 {
      color: ${(params) => params.theme.colors.base.subtitle};

      font-size: ${(params) => params.theme.text.title.sm['font-size']};
      font-weight: ${(params) => params.theme.text.title.sm['font-weight']};
    }

    > span {
      color: ${(params) => params.theme.colors.base.span};

      font-size: ${(params) => params.theme.text.text.sm['font-size']};
    }
  }
`
