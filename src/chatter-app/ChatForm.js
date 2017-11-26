import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    border: '3px solid #2c3e50',
    borderRadius: '6px',
    width: '55%',
    marginBottom: '4%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    padding: '3%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '3%'
  },
  header: {
    fontFamily: 'Playfair Display, serif',
    color: '#2c3e50',
    fontSize: '2em'
  },
  button: {
    marginBottom: '3%'
  }
}

const ChatForm = ({ setUsername, setMessage, setAvatar, submitInfo }) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.header}>Add A Chat</h3>
      <form style={styles.form}>
        <input placeholder='username' onChange={this.setUsername} />
        <input placeholder='message' onChange={this.setMessage} />
        <input placeholder='avatar' onChange={this.setAvatar} />
      </form>
      <button style={styles.button} type='button' onClick={this.submitInfo}>Submit</button>
    </div>
  )
}

ChatForm.propTypes = {
  setAvatar: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
  submitInfo: PropTypes.func.isRequired
}

export default ChatForm
