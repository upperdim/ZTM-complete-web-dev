import React from 'react'
import './App.css'
import CardsList from '../components/CardsList/CardsList'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => this.setState({ characters: data.results }))
  }

  render() {
    if (this.state.characters.length === 0)
      return <h1>Loading...</h1>
    
    return (
      <div>
        <CardsList characters={this.state.characters}/>
      </div>
    )
  }
}

export default App;