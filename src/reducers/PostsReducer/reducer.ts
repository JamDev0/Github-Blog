import produce from 'immer'
import { actionTypes } from './actions'

interface postInterface {
  title: string
  created_at: string
  body: string
  number: number
  id: number
}

export interface postsState {
  list: postInterface[]
  isSet: boolean
}

export function postsReducer(state: postsState, action: any) {
  switch (action.type) {
    case actionTypes.SET_POSTS: {
      return produce(state, (draft) => {
        draft.list = action.payload

        draft.isSet = true
      })
    }
  }

  return state
}
