import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class PostsNew extends Component {
    render() {
        return (
            <div>
                <div className="text-xs-right" >
                    <Link className='btn btn-primary' to="/" >
                        Back to Posts
                    </Link>
                </div>
                <div>
                    Create New Post!
                </div>
            </div>
        )
    }
}

export default PostsNew