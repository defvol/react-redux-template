import React, { Component, PropTypes } from 'react'

class Paragraph extends Component {

  render() {
    const { color, text } = this.props
    return (
      <p style={{color: color}}>{text}</p>
    )
  }

}

Paragraph.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default Paragraph
