import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    width: '88%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
    marginBottom: '10%'
  }
}

const ChatForm = ({ setUsername, setMessage, setAvatar, submitInfo }) => {
  return (
    <form style={styles.container}>
      <input placeholder='username' onChange={this.setUsername} />
      <input placeholder='message' onChange={this.setMessage} />
      <input placeholder='avatar' onChange={this.setAvatar} />
      <button type='button' onClick={this.submitInfo}>Submit</button>
    </form>
  )
}

ChatForm.propTypes = {
  setAvatar: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
  submitInfo: PropTypes.func.isRequired
}

export default ChatForm
