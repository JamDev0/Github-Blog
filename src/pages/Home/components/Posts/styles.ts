import styled from 'styled-components'
import { LoadingFeedback } from '../../../../components/LoadingFeedback'

export const PostsContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  row-gap: 2rem;
  flex-wrap: wrap;
`

export const NotFoundFeedback = styled.h2`
  font-size: 2rem;
`

export const LoadingPostsFeedback = styled(LoadingFeedback)`
  width: 13rem;
  height: 13rem;
`
