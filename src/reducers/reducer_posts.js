import {FETCH_POSTS, CREATE_POST, FETCH_POST, DELETE_POST} from '../actions'
import _ from 'lodash';     //using for _mapKeys

export default function (state={}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            //console.log(action.payload.data);   //[post1, post2]
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            return  {...state, [action.payload.data.id]: action.payload.data}
            //the above coding line creating a key(id) with value = data
        case DELETE_POST:
            return _.omit(state, action.payload)
        default:
            return state;
    }
}