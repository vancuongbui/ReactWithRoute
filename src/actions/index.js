import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

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