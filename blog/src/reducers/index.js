import { combineReducers } from 'redux';
import PostListReducer from './post_list_reducer';

export default combineReducers({
    postList:PostListReducer
})