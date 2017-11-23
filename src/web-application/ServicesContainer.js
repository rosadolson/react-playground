import React from 'react'
import faker from 'faker'
import Section from './Section'
import ServicesCard from './ServicesCard'

const styles = {
  container: {
    backgroundColor: '#ecf0f1',
    color: '#3498db',
    border: 'solid 3px #3498db',
    borderRadius: '20px',
    padding: '20px',
    margin: '15px 20px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignContent: 'space-around'
  }
}

const ServicesContainer = () => {
  return (
    <div style={styles.container}>
      <Section
        title={'Services'}
        content={faker.lorem.sentences()}
      >
        <div>
          <ServicesCard
            title={'Video Webinars'}
            details={'Ichiban Video Webinars'}
          />
          <ServicesCard
            title={'Video Webinars'}
            details={'Ichiban Video Webinars'}
          />
          <ServicesCard
            title={'Video Webinars'}
            details={'Ichiban Video Webinars'}
          />
          <ServicesCard
            title={'Video Webinars'}
            details={'Ichiban Video Webinars'}
          />
        </div>
      </Section>
    </div>
  )
}

export default ServicesContainer
