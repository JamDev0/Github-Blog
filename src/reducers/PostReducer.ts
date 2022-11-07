import produce from 'immer'
import { actionTypes } from './actions'

interface PostData {
  title: string
  body: string
  created_at: string
  comments: number
  html_url: string
  user: string
  number: number
}

export interface PostState {
  isSet: boolean
  data: PostData
}

export function PostReducer(state: PostState, action: any) {
  switch (action.type) {
    case actionTypes.SET_POST: {
      return produce(state, (draft) => {
        draft.data = action.payload

        draft.isSet = true
      })
    }

    case actionTypes.RESET_POST: {
      return produce(state, (draft) => {
        draft.data = {} as PostData

        draft.isSet = false
      })
    }
  }

  return state
}
