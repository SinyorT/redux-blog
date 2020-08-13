import React ,{ Component} from 'react';
import { connect } from 'react-redux';
import { fetchPostList } from '../actions';
class PostList extends Component{
    render(){
        return(
            <div>
                Post List
            </div>
        )       
        
    }
}
const mapStateToProps = (state)=>{
    return {
        postList:state.postList
    }
}

export default  connect(mapStateToProps ,{fetchPostList})(PostList);