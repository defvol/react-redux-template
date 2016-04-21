import { combineReducers } from 'redux'
import * as actions from '../actions'

const initialState = {
  color: '#3366aa',
  text: 'A stateful component'
}

export function color(state = initialState.color, action) {
  switch (action.type) {
    case actions.SET_COLOR:
      return action.color
    default:
      return state
  }
}

export function text(state = initialState.text, action) {
  switch (action.type) {
    case actions.SET_TEXT:
      return action.text
    default:
      return state
  }
}

export default combineReducers({
  color,
  text
})
