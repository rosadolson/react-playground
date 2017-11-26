import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    width: '70%',
    backgroundColor: '#bdc3c7',
    borderRadius: '6px',
    color: '#2c3e50',
    padding: '3%',
    display: 'flex',
    margin: '2%',
    alignItems: 'center',
    fontFamily: 'Istok Web, sans-serif'
  },
  mainText: {
    color: '#2c3e50'
  },
  backupText: {
    color: 'white'
  },
  image: {
    width: '15vw',
    borderRadius: '100%'
  },
  leftSideBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: '4%',
    paddingTop: '3%',
    borderRight: '2px solid white'
  },
  messageBox: {
    paddingLeft: '4%'
  }
}

const ChatBox = ({username, message, avatar}) => {
  return (
    <div style={styles.container}>
      <div style={styles.leftSideBox}>
        <img style={styles.image} src={avatar} />
        <h3 style={username.length > 10
          ? styles.mainText
          : styles.backupText
        }> {username} </h3>
      </div>
      <p style={styles.messageBox}> {message} </p>
    </div>
  )
}

ChatBox.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}

export default ChatBox
