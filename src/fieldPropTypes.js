import React, { Component } from 'react'
import PropTypes from 'prop-types'

const itemShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
})

export default {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
	options: PropTypes.arrayOf(itemShape),
}
