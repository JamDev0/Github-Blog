import { useForm } from 'react-hook-form'

import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { SearchPostFormContainer } from './styles'

import { useCallback } from 'react'

import { gitHubSearchApi } from '../../../../libs/axios'
import { useContextSelector } from 'use-context-selector'
import { postsContext } from '../../../../hooks/usePosts'

interface postsListInterface {
  id: number
  title: string
  body: string
  created_at: string
  number: number
}

const SearchPostFormSchema = z.object({
  query: z.string(),
})

type SearchPostFormInputs = z.infer<typeof SearchPostFormSchema>

export function SearchPostForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchPostFormInputs>({
    resolver: zodResolver(SearchPostFormSchema),
  })

  const { setPostList } = useContextSelector(postsContext, (context) => {
    return {
      setPostList: context.setPosts,
    }
  })

  const handleSearchPostFormSubmission = useCallback(
    async (data: SearchPostFormInputs) => {
      const res = await gitHubSearchApi.get('issues', {
        params: {
          q: `repo:JamDev0/GithubBlog-Posts ${data.query}`
        }
      })

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
    },
    [setPostList],
  )

  return (
    <SearchPostFormContainer onSubmit={handleSubmit(handleSearchPostFormSubmission)}>
      <input
        type="text"
        required
        {...register('query')}
        placeholder="Buscar conteúdo"
        disabled={isSubmitting}
      ></input>
    </SearchPostFormContainer>
  )
}
