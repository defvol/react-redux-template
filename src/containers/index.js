import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Paragraph from '../components/Paragraph'

class App extends Component {
  constructor(props) {
    super(props)
    this.changeColor = this.changeColor.bind(this)
  }

  componentDidMount() {
    let { dispatch } = this.props
    dispatch(actions.setText('Redux enabled component'))
  }

  changeColor(event) {
    let { dispatch } = this.props
    let randomColor = ((1<<24) * Math.random() | 0).toString(16)
    dispatch(actions.setColor(`#${randomColor}`))
  }

  render() {
    let { text, color } = this.props
    return (
      <div>
        <Paragraph text={text} color={color} />
        <button onClick={this.changeColor}>Random color</button>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
