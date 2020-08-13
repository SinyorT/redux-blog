import React ,{ Component} from 'react';
import { connect } from 'react-redux';
import { fetchPostList } from '../actions';
class PostList extends Component{

    componentDidMount(){
        this.props.fetchPostList();
    }


    render(){
        return(
            <div>
                Post List
            </div>
        )       
        
    }
}
const mapStateToProps = (state)=>{
    console.log(state.postList);
    return {
        postList:state.postList
    }
}

export default  connect(mapStateToProps ,{fetchPostList})(PostList);