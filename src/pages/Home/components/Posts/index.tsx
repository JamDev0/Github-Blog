import { memo, useEffect } from 'react'

import { useContextSelector } from 'use-context-selector'

import { gitHubSearchApi } from '../../../../libs/axios'

import { postsContext } from '../../../../hooks/usePosts'

import { PostCard } from './PostCard'

import {
  LoadingPostsFeedback,
  NotFoundFeedback,
  PostsContainer,
} from './styles'

interface postsListInterface {
  id: number
  title: string
  body: string
  created_at: string
  number: number
}

export function PostsComponent() {
  const { isPostsListSet, postsList, setPostList } = useContextSelector(
    postsContext,
    (context) => {
      return {
        postsList: context.list,
        isPostsListSet: context.isSet,
        setPostList: context.setPosts,
      }
    },
  )

  useEffect(() => {
    if (!isPostsListSet) {
      gitHubSearchApi
        .get('issues', {
          params: {
            q: 'repo:JamDev0/GithubBlog-Posts',
          },
        })
        .then((res) => {
          const postsData = Array.from(res.data.items).reduce(
            (acc: postsListInterface[], current: any) => {
              const post = {
                id: current.id,
                title: current.title,
                body: current.body,
                created_at: current.created_at,
                number: current.number,
              }

              return [...acc, post]
            },
            [],
          )

          setPostList(postsData)
        })
    }
  }, [isPostsListSet, setPostList])

  return (
    <PostsContainer>
      {isPostsListSet ? (
        postsList.length > 0 ? (
          postsList.map(({ body, created_at, id, title, number }) => {
            return (
              <PostCard
                content={body}
                createdAt={created_at}
                title={title}
                number={number}
                key={id}
              />
            )
          })
        ) : (
          <NotFoundFeedback>Ops! Nenhum post encontrado</NotFoundFeedback>
        )
      ) : (
        <LoadingPostsFeedback />
      )}
    </PostsContainer>
  )
}

export const Posts = memo(PostsComponent)
