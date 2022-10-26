import { useForm } from 'react-hook-form'

import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { SearchPostFormContainer } from './styles'
import { useCallback } from 'react'

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

  const handlePostFormSubmission = useCallback(
    async (data: SearchPostFormInputs) => {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log(data)
    },
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
