import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    border: 'solid 3px orange',
    borderRadius: '8px',
    width: '25%',
    color: '#d35400',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1%'
  }
  // icon: {
  //   borderRadius: '50px',
  //   backgroundColor: '#d35400',
  //   width: '100px',
  //   height: '100px',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   fontSize: '70px',
  //   color: 'white'
  // },
  // serviceItems: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   flexDirection: 'row',
  //   alignContent: 'space-around'
  // }
}

const ServicesCard = ({title, details}) => {
  return (
    <div styles={styles.container}>
      <div styles={styles.serviceItems}>
        <div styles={styles.icon}>
          <span className='fa fa-video-camera' />
        </div>
        <h3> {title} </h3>
        <p> {details} </p>
        <a>Learn More!</a>
      </div>
    </div>
  )
}

ServicesCard.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired
}

export default ServicesCard
