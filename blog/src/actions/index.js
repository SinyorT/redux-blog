import axios from 'axios';

export const fetchPostList = () => {

    return async(dispatch) => {

        const response = 
                await axios.get('https://jsonplaceholder.typicode.com/posts');

        dispatch( {
            type: 'FETCH_POST_LIST',
            payload: response
        });

    }
}