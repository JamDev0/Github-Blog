import { ReactNode, useCallback, useReducer } from 'react'
import { createContext } from 'use-context-selector'
import { gitHubReposApi } from '../libs/axios'
import { resetPostAction, setPostAction } from '../reducers/actions'
import { PostReducer, PostState } from '../reducers/PostReducer'

interface postContextValues {
  setPost: (number: string) => void
  resetPost: () => void
  data: PostState['data']
  isSet: boolean
}

export const postContext = createContext<postContextValues>(
  {} as postContextValues,
)

interface PostProviderProps {
  children: ReactNode
}

const initialPostState: PostState = {
  data: {} as PostState['data'],
  isSet: false,
}

export function PostProvider({ children }: PostProviderProps) {
  const [{ data, isSet }, dispatch] = useReducer(PostReducer, initialPostState)

  const setPost = useCallback((number: string) => {
    gitHubReposApi
      .get(`JamDev0/GithubBlog-Posts/issues/${number}`)
      .then(({ data }) => {
        const post: PostState['data'] = {
          body: data.body,
          comments: data.comments,
          created_at: data.created_at,
          html_url: data.html_url,
          title: data.title,
          user: data.user.login,
          number: data.number,
        }

        dispatch(setPostAction(post))
      })
  }, [])

  const resetPost = useCallback(() => {
    dispatch(resetPostAction())
  }, [])

  return (
    <postContext.Provider value={{ setPost, data, isSet, resetPost }}>
      {children}
    </postContext.Provider>
  )
}
