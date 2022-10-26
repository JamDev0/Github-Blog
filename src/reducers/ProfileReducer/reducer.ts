import { actionTypes } from './actions'

import { produce } from 'immer'

export interface ProfileData {
  avatar_url: string
  name: string
  bio: string
  company: string | null
  login: string
  followers: number
  html_url: string
}

export interface ProfileState {
  data: ProfileData
  isSet: boolean
}

export function ProfileReducer(state: ProfileState, action: any) {
  switch (action.type) {
    case actionTypes.SET_PROFILE: {
      return produce(state, (draft) => {
        draft.data = action.payload

        draft.isSet = true
      })
    }
  }
  return state
}
