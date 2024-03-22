//redux can have only one root user, we can create many reducer we want but here we will have only single root user
import Logic from '../Logic'
import {combineReducers} from 'redux'

const rootReducer = new combineReducers({
    Logic : Logic 
})

export default rootReducer;