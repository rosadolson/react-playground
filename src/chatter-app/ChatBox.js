import React from 'react'
import PropTypes from 'prop-types'

const chatStyle = {
  container: {
    padding: '20px',
    marginTop: '2%',
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid black',
    justifyContent: 'space-between'
  },
  mainText: {
    color: 'red'
  },
  backupText: {
    color: 'blue'
  }
}

const ChatBox = ({username, message, avatar}) => {
  return (
    <div style={chatStyle.container}>
      <div>
        <h3 style={username.length > 10
          ? chatStyle.mainText
          : chatStyle.backupText
        }
        > {username} </h3>
      </div>
      <p> {message} </p>
      <img src={avatar} />
    </div>
  )
}

ChatBox.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}

export default ChatBox
