import React from 'react'
import faker from 'faker'
import Section from './Section'

const styles = {
  container: {
    backgroundColor: '#ecf0f1',
    color: '#c0392b',
    border: 'solid 3px #c0392b',
    borderRadius: '20px',
    padding: '20px',
    margin: '15px 20px',
    textAlign: 'center'
  }
}

const AboutContainer = () => {
  return (
    <div style={styles.container}>
      <Section
        sectionStyle='about'
        title={'About'}
        content={faker.lorem.sentences()}
      />
    </div>
  )
}

export default AboutContainer
