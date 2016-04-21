import test from 'tape'
import { createStore } from 'redux'
import * as actions from '../src/actions'
import reducers from '../src/reducers'

const store = createStore(reducers)

test('setColor', (t) => {
  var want = '#e6e6e6'
  var got = store.dispatch(actions.setColor('#e6e6e6')).color
  t.equal(got, want, 'should set color to #e6e6e6')
  t.end()
})

test('setText', (t) => {
  var want = 'THIS IS A TEST'
  var got = store.dispatch(actions.setText('THIS IS A TEST')).text
  t.equal(got, want, 'should set text to THIS IS A TEST')
  t.end()
})
