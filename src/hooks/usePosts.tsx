import { ReactNode, useEffect, useReducer } from 'react'
import { createContext } from 'use-context-selector'
import { gitHubSearchApi } from '../libs/axios'
import { setPostsAction } from '../reducers/PostsReducer/actions'
import { postsReducer, postsState } from '../reducers/PostsReducer/reducer'

interface postsContextValues {
  list: postsState['list']
  isSet: boolean
}

export const postsContext = createContext<postsContextValues>(
  {} as postsContextValues,
)

interface PostsProviderProps {
  children: ReactNode
}

const postsInitialState: postsState = {
  isSet: false,
  list: [],
}

export function PostsProvider({ children }: PostsProviderProps) {
  const [{ list, isSet }, dispatch] = useReducer(
    postsReducer,
    postsInitialState,
  )

  useEffect(() => {
    if (!isSet) {
      gitHubSearchApi
        .get('issues', {
          params: {
            q: 'repo:JamDev0/GithubBlog-Posts',
          },
        })
        .then((res) => {
          const postsData = Array.from(res.data.items).reduce(
            (acc: postsState['list'], current: any) => {
              const post = {
                id: current.id,
                title: current.title,
                body: current.body,
                created_at: current.created_at,
              }

              return [...acc, post]
            },
            [],
          )

          dispatch(setPostsAction(postsData))
        })
    }
  }, [isSet])

  return (
    <postsContext.Provider value={{ list, isSet }}>
      {children}
    </postsContext.Provider>
  )
}
