import React from 'react'
import PropTypes from 'prop-types'

const Section = ({title, content, sectionStyle, children}) => {
  return (
    <div className={sectionStyle}>
      <h4> {title} </h4>
      <p> {content} </p>
      { children }
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  sectionStyle: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default Section
