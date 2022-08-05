import {createStore, combineReducers} from 'redux';
import post from './modules/post'
import comment from './modules/comment'

const rootReducer = combineReducers({post, comment});
const store = createStore(rootReducer);

export default store;