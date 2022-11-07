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

  const handlePostFormSubmission = useCallback(
    async (data: SearchPostFormInputs) => {},
    [],
  )

  return (
    <SearchPostFormContainer onSubmit={handleSubmit(handlePostFormSubmission)}>
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
