import {createStore, combineReducers } from 'redux';
import Items from './Reducer/reducer1';

const allReducers = combineReducers({
    Items
});

const storage =  createStore(allReducers);

export default storage;