import React, {Component} from 'react'
import faker from 'faker'
import Chats from './Chats'
import ChatForm from './ChatForm'
// import './styles.css'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '6em',
    color: '#2c3e50'
  }
}

class ChatterApp extends Component {
  state = {
    chats: undefined,
    message: undefined,
    username: undefined,
    avatar: undefined
  }
  componentDidMount () {
    // alert('COMPONENT DID MOUNT')
    setTimeout(() => {
      this.setChatData()
    }, 1000)
  }
  setMessage = (e) => {
    let message = e.target.value
    this.setState({ message: message })
    console.log(this.state.message)
  }
  setUsername = (e) => {
    let username = e.target.value
    this.setState({ username: username })
    console.log(this.state.username)
  }
  setAvatar = (e) => {
    let avatar = e.target.value
    this.setState({ avatar: avatar })
    console.log(this.state.avatar)
  }
  setChatData = () => {
    // alert('ABOUT TO SET CHAT DATA')
    let chatsArr = []
    for (let i = 0; i < 11; i++) {
      let chat = {
        avatar: faker.image.avatar(),
        username: faker.internet.userName(),
        message: faker.lorem.sentences()
      }
      chatsArr.push(chat)
    }
    this.setState({ chats: chatsArr })
  }
  submitInfo = (e) => {
    e.preventDefault()
    let newChat = {
      avatar: this.state.avatar,
      username: this.state.username,
      message: this.state.message
    }
    let allChats = this.state.chats
    allChats.unshift(newChat)
    this.setState({ Chats: allChats })
  }
  render () {
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>Chatter App</h1>
        {
          this.state.chats
            ? <Chats chats={this.state.chats} />
            : 'Loading...'
        }
        <ChatForm
          setUsername={this.setUsername}
          setAvatar={this.setAvatar}
          setMessage={this.setMessage}
          submitInfo={this.submitInfo}
        />
      </div>
    )
  }
}

export default ChatterApp
