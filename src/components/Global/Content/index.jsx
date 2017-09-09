// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  body: PropTypes.object.isRequired
}

class Content extends Component {
  render() {
    const { body } = this.props
    return (
      <div className="Content">
        { body }
      </div>
    )
  }
}

Content.propTypes = propTypes

export default Content
