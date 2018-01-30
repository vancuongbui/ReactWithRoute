import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = "create_post"

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?vancuongbui12345'

export function fetchPosts() {    
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`); //using to send request by GET()
    //action with fetch_post will return an object request
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(values, callback) {  //adding callback argument to redirect page after success
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(() => callback())
    return {
        type: CREATE_POST,
        payload: request
    }
}