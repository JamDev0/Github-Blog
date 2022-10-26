import { ProfileState } from './reducer'

export enum actionTypes {
  SET_PROFILE = 'SET_PROFILE',
}

export function setProfileAction(profileData: ProfileState['data']) {
  return {
    type: actionTypes.SET_PROFILE,
    payload: profileData,
  }
}
