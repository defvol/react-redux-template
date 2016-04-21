export const SET_COLOR = 'SET_COLOR'
export const SET_TEXT = 'SET_TEXT'

export function setColor(color) {
  return {
    type: SET_COLOR,
    color
  }
}

export function setText(text) {
  return {
    type: SET_TEXT,
    text
  }
}
