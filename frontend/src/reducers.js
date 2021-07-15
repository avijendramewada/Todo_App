import { combineReducers } from 'redux'
import menuOptionsReducer from './containers/Navbar/reducer'
import todoReducers from './containers/_TodoList/reducers/todoReducers'
const reducers = combineReducers( {
  menuOptionsReducer,
  todoReducers
} )

export default reducers
