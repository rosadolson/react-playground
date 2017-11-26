import React from 'react'
import ChatBox from './ChatBox'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '2%'
  }
}

const Chats = ({chats}) => {
  return (
    <div style={styles.container}>
      {
        chats.map((chat, index) =>
          <ChatBox
            key={index}
            username={chat.username}
            message={chat.message}
            avatar={chat.avatar}
          />
        )
      }
    </div>
  )
}

Chats.propTypes = {
  chats: PropTypes.array.isRequired
}

export default Chats
