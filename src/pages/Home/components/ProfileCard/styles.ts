import styled from 'styled-components'
import { LoadingFeedback } from '../../../../components/LoadingFeedback'
import { TextPlaceholder } from '../../../../components/TextPlaceholder'

export const ProfileCardContainer = styled.section`
  position: relative;

  width: 100%;

  display: flex;
  column-gap: 2rem;

  padding-inline: 2.5rem;

  margin-bottom: 6.5rem;
`

export const ProfilePictureContainer = styled.div`
  height: 9rem;
  aspect-ratio: 1/1;

  border-radius: 8px;

  overflow: hidden;

  > img {
    height: 100%;
    width: 100%;

    object-fit: cover;
    object-position: center;
  }
`

export const ProfilePictureLoading = styled(LoadingFeedback)`
  height: 100%;
  width: 100%;
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

export const TitlePlaceholder = styled(TextPlaceholder)`
  width: 4rem;
  height: 1.5rem;
`

export const BioPlaceholder = styled(TextPlaceholder)`
  width: 100%;
  height: 5rem;
`

export const ProfileCardResumeContainer = styled.section`
  display: flex;
  column-gap: 1.5rem;
`

export const GithubLinkContainer = styled.a`
  position: absolute;

  top: 0.5rem;
  right: 2.5rem;

  text-decoration: none;

  padding: 0.25rem;

  border-radius: 6px;

  &[aria-disabled] {
    cursor: not-allowed;
  }
`
