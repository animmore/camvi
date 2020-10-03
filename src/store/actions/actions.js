// import { LIST_OF_VIDEOS } from './actionTypes';

export function setVideos(data) {
  return {
    type: 'LIST_OF_VIDEOS',
    payload: data,
  };
}
