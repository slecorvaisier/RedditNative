import {
    FETCH_ALL_PENDING,
    FETCH_ALL_SUCCESS,
    FETCH_ALL_FAILURE, 
} from './actionTypes';

export const fetchAllPosts = (subreddit) => (
    dispatch => {

        console.log('fetch all posts');

        // set state as pending
        dispatch({
            type: FETCH_ALL_PENDING,
        });

        // fetch all posts
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
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

