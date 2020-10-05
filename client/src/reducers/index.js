import { combineReducers } from 'redux'
import alert from './alert'
import misc from './misc'
import table from './table'

export default combineReducers({
  alert,
  misc,
  table,
})
