import styled from 'styled-components'
import { BaseLink } from '../../../../components/BaseLink/styles'

export const ProfileCardContainer = styled.section`
  position: relative;

  width: 100%;

  display: flex;
  column-gap: 2rem;

  padding-inline: 2.5rem;

  margin-bottom: 6.5rem;

  > img {
    height: 9rem;
    aspect-ratio: 1/1;

    object-fit: cover;
    object-position: center;

    border-radius: 8px;
  }
`

export const ProfileCardContentContainer = styled.section`
  position: relative;

  height: min-content;

  flex: 1;

  padding-top: 0.5rem;

  > h1 {
    color: ${(params) => params.theme.colors.base.title};

    font-size: ${(params) => params.theme.text.title.lg['font-size']};
    font-weight: ${(params) => params.theme.text.title.lg['font-weight']};
    line-height: ${(params) => params.theme.text.title.lg['line-height']};

    margin-bottom: 0.5rem;
  }

  > p {
    color: ${(params) => params.theme.colors.base.text};

    font-size: ${(params) => params.theme.text.text.md['font-size']};

    margin-bottom: 1.5rem;
  }
`

export const ProfileCardResumeContainer = styled.section`
  display: flex;
  column-gap: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;

    width: fit-content;

    color: ${(params) => params.theme.colors.base.subtitle};

    font-size: ${(params) => params.theme.text.text.md['font-size']};
    line-height: 100%;

    > img,
    svg {
      width: 1.125rem;
      aspect-ratio: 1/1;
    }

    > svg {
      line-height: 0;

      color: ${(params) => params.theme.colors.base.label};
    }
  }
`

export const GithubLinkContainer = styled(BaseLink)`
  position: absolute;

  top: 0.5rem;
  right: 2.5rem;

  border: none;
  border-bottom: 1px solid transparent;
`