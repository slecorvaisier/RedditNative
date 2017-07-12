import {
  FETCH_ALL_PENDING,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAILURE,
} from './actionTypes';

const defaultState = {
  list: {
    data: [],
    isFetching: false,   
  },
  currentId: null,
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_ALL_PENDING:
      return {
        ...state,
        list: {
          ...state.list,
          isFetching: true,
        }
      };
    case FETCH_ALL_SUCCESS:
      return {
        ...state,
        list: {
          data: action.payload.data.map(post => ({
            id: post.id,
            title: post.title,
            author: post.author,
            thumbnail: post.thumbnail && post.thumbnail !== 'self' ? {
              url: post.thumbnail,
              height: post.thumbnail_height,
              width: post.thumbnail_width,
            } : null,
          })),
          isFetching: false,
        }
      };
    default:
      return state;
  }
};