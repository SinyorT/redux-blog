import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostList,fetchUserList } from '../actions';
import './postList.css';
class PostList extends Component {

    componentDidMount() {
        this.props.fetchPostList();
        this.props.fetchUserList();
    }

    renderItem(post) {
        return (
            <div className='item' key={post.id}>
                <i className="right triangle icon"></i>
                <div className="content">
        <div className="header">{post.title}</div>
        <div className="description">{post.body}</div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="post-list ui list">
                {this.props.postList.map(post => this.renderItem(post))}
            </div>
        )

    }
}
const mapStateToProps = (state) => {
    console.log(state.postList);
    console.log(state.userList);
    return {
        postList: state.postList,
        userList:state.userList
    }
}

export default connect(mapStateToProps, { fetchPostList,fetchUserList })(PostList);