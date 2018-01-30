import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
import _ from 'lodash'
import {Link} from 'react-router-dom'

class PostsIndex extends Component {
    componentDidMount() {   //call automaticcally by by react
        //fetch data before hand, it is something needed for searching database
        this.props.fetchPosts();    //get data from action
    }

    renderPosts() {
        if (this.props.posts) {
            return _.map(this.props.posts, post => {
                return (
                    <li className="list-group-item" key={post.id} >
                        {post.title}
                    </li>
                )
            })            
        }
        else {
            console.log("something wrong with this.props.posts")
        }        
    }

    render() {
        //console.log(this.props.posts)
        return (
            
            <div>
                <div className="text-xs-right" >
                    <Link className='btn btn-primary' to="/posts/new" >
                        Add new post
                    </Link>
                </div>
                <h3>Posts </h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {posts: state.posts}
}

//passing action creator to bind to the component
export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostsIndex)