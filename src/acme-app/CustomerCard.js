import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: '2%',
    paddingBottom: '2%',
    width: '30%'
  },
  image: {
    maxWidth: '100%'
  }
}

const CustomerCard = ({img, name, email}) => {
  return (
    <div style={styles.container}>
      <img style={styles.image} src={img} />
      <h4>{name}</h4>
      <p>{email}</p>
      <button type='button' className='email-button'> SEND AN EMAIL </button>
    </div>
  )
}

CustomerCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

export default CustomerCard
