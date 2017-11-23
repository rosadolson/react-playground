import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

const Section = ({title, content, sectionStyle, children}) => {
  return (
    <div styles={styles.container}>
      <h2> {title} </h2>
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
