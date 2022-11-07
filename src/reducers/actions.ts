import { PostState } from './PostReducer'

export enum actionTypes {
  SET_POST = 'SET_POST',
  RESET_POST = 'RESET_POST',
}

export function setPostAction(data: PostState['data']) {
  return {
    type: actionTypes.SET_POST,
    payload: data,
  }
}

export function resetPostAction() {
  return {
    type: actionTypes.RESET_POST,
  }
}
