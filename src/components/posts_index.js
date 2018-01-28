import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class PostsIndex extends Component {
    componentDidMount() {   //call automaticcally by by react
        //fetch data before hand, it is something needed for searching database
        this.props.fetchPosts();
    }
    render() {
        console.log(this.props.posts)
        return (
            
            <div>
                Posts PostsIndex
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {posts: state.posts}
}

//passing action creator to bind to the component
export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostsIndex)