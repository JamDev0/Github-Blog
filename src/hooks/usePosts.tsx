import { ReactNode, useCallback, useReducer } from 'react'

import { createContext } from 'use-context-selector'

import { setPostsAction } from '../reducers/PostsReducer/actions'

import { postsReducer, postsState } from '../reducers/PostsReducer/reducer'

interface postsContextValues {
  setPosts: (postsData: postsState['list']) => void
  list: postsState['list']
  isSet: boolean
  postsListLength: number
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

  const setPosts = useCallback((postsData: postsState['list']) => {
    dispatch(setPostsAction(postsData))
  }, [])

  const postsListLength = list.length

  return (
    <postsContext.Provider value={{ list, isSet, setPosts, postsListLength }}>
      {children}
    </postsContext.Provider>
  )
}
