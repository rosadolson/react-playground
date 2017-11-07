import React from 'react'
import PropTypes from 'prop-types'

const SpiceIcon = ({ spice }) => {
  if (spice >= 7) {
    return (
      <div>
        <span className={`fa fa-thermometer-full spicy-icon`} />
      </div>
    )
  } else if (spice <= 3) {
    return (
      <div>
        <span className={`fa fa-thermometer-empty mild-icon`} />
      </div>
    )
  } else {
    return (
      <div>
        <span className={`fa fa-thermometer-half medium-icon`} />
      </div>
    )
  }
}

SpiceIcon.propTypes = {
  spice: PropTypes.any
}

export default SpiceIcon
