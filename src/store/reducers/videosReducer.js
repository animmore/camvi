import { LIST_OF_VIDEOS } from '../actions/actionTypes';

const initialState = {
  data: [],
};

export default function videos(state = initialState, action) {
  switch (action.type) {
    case 'LIST_OF_VIDEOS':
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
}
