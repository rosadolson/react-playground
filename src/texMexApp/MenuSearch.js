import React, {Component} from 'react'
import data from './data'

class MenuSearch extends Component {
  state = {
    foods: undefined,
    searchEntry: undefined
  }

  componenetDidMount () {
    this.setState({ foods: data.items })
  }

  handleChange = (e) => {
    let wordToSearch = e.target.value
    this.setState({ searchEntry: wordToSearch })
  }

  submitSearch = (e) => {
    e.preventDefault()
    const foods = this.state.foods
    const searchEntry = this.state.searchEntry
    if (!searchEntry) {
      alert('Please enter a search term.')
    } else {
      const matchedFoods = foods.filter(item => {
        return item.name.split(' ').includes(searchEntry)
      })
      if (matchedFoods.length === 0) {
        this.setState({ foods: ['Nothing matches your search.'] })
      } else {
        this.setState({ foods: matchedFoods })
      }
    } 
  }

  render () {
    return (
      <div>
        <h2>Search:</h2>
        <p>You entered: {this.state.searchEntry}</p>
        <form>
          <input type='text' placeholder='Search' onChange={this.handleChange} />
          <button type='button' onSubmit={this.submitSearch}>Search</button>
        </form>
      </div>
    )
  }
}

export default MenuSearch
