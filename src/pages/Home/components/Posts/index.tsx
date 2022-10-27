import { useContextSelector } from 'use-context-selector'
import { postsContext } from '../../../../hooks/usePosts'
import { PostCard } from './PostCard'
import { PostsContainer } from './styles'

export function Posts() {
  const { isPostsListSet, postsList } = useContextSelector(
    postsContext,
    (context) => {
      return {
        postsList: context.list,
        isPostsListSet: context.isSet,
      }
    },
  )

  return (
    <PostsContainer>
      {isPostsListSet ? (
        postsList.map(({ body, created_at, id, title }) => {
          return (
            <PostCard
              content={body}
              createdAt={created_at}
              title={title}
              key={id}
            />
          )
        })
      ) : (
        <span>Loading...</span>
      )}
    </PostsContainer>
  )
}
