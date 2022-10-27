import { postsState } from './reducer'

export enum actionTypes {
  SET_POSTS = 'SET_POSTS',
}

export function setPostsAction(postsList: postsState['list']) {
  return {
    type: actionTypes.SET_POSTS,
    payload: postsList,
  }
}
