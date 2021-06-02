
import pupils from './reducers/pupil'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {setDetails } from './middleWares/middleWare';
import classReducer from './reducers/class'
import login from '../../leasson 6/login';
import data from '../../leasson 6/reduces/data';
import swapi from '../../leasson 7/data';


const reducer= combineReducers({pupils, classReducer, data, swapi});

const store= createStore(reducer, (applyMiddleware( setDetails)));

window.store= store;
export default store;

