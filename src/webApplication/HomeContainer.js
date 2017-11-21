import React from 'react'
import faker from 'faker'
import Jumbotron from './Home'

const styles = {
  container: {
    color: '#1E824C',
    border: '3px solid #27ae60',
    borderRadius: '20px',
    padding: '20px',
    backgroundColor: '#ecf0f1',
    textAlign: 'center',
    margin: '10px 20px'
  }
}

const HomeContainer = () => {
  return (
    <div style={styles.container}>
      <Jumbotron
        title={faker.name.title()}
        desc={faker.lorem.sentences()}
      />
    </div>
  )
}

export default HomeContainer
