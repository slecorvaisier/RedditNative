import {
    FETCH_ALL_PENDING,
    FETCH_ALL_SUCCESS,
    FETCH_ALL_FAILURE, 
} from './actionTypes';

export const fetchAllPosts = (subreddit = null) => (
    dispatch => {
        // set state as pending
        dispatch({
            type: FETCH_ALL_PENDING,
        });

        // fetch all posts
        let url = 'https://www.reddit.com';
        if (subreddit) {
            url += `/r/${subreddit}.json`;
        } else {
            url += `/hot.json`;
        }

        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch({
                type: FETCH_ALL_SUCCESS,
                payload: {
                    subreddit,
                    data: json.data.children.map(child => child.data),
                }
            }))
            .catch(error => dispatch({
                type: FETCH_ALL_FAILURE,
                error,
            }));

    }
);

