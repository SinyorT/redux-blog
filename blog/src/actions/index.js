import axios from 'axios';

export const fetchPostList=async()=>{

    const response=await axios.get('https://jsonplaceholder.typicode.com/posts');

    return {
        type:'FETCH_POST_LIST',
        payload:response
    };
}