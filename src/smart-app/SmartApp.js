import React, {Component} from 'react'
import PropTypes from 'prop-types'

const Counter = ({count, sayHello, increaseCount, decreaseCount}) => {
  return (
    <div>
      <p> Count: {count} </p>
      <button onClick={sayHello}>
          Say Hello
      </button>
      <button onClick={increaseCount}>
          Increase Count
      </button>
      <button onClick={decreaseCount}>
          Decrease Count
      </button>
    </div>
  )
}

class SmartApp extends Component {
  state = {
    count: 10
  }
  sayHello = () => {
    alert('Thanks for clicking me!')
  }
  increaseCount = () => {
    this.setState({ count: this.state.count += 1 })
  }
  decreaseCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count -= 1 })
    } else {
      alert('Cannot set count below 0')
    }
  }
  handleCountInputChange = (event) => {
    console.log('You Entered:', event.target.value)
    const updatedCount = Number(event.target.value)
    this.setState({ count: updatedCount })
  }
  render () {
    return (
      <div>
        <div>
          <h3>Hello from Smart App!</h3>
          <Counter
            count={this.state.count}
            sayHello={this.sayHello}
            increaseCount={this.increaseCount}
            decreaseCount={this.decreaseCount}
          />
          <input
            onChange={this.handleCountInputChange}
            type='Number'
            placeholder='please enter number to begin' />
        </div>
      </div>
    )
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  sayHello: PropTypes.func.isRequired,
  increaseCount: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired
}

export default SmartApp
