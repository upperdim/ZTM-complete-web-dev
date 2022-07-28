import React from 'react'
import './App.css'
import DataDisplay from '../components/DataDisplay'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      apiData: null
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/iss-now.json')
      .then(resp => resp.json())
      .then(data => this.setState({ apiData: data }));
    /*
    const getPosition = async function() {
      const response = await fetch('http://api.open-notify.org/iss-now.json')
      const data = await response.json()
      this.setState({ apiData: data }) // `this` is "this" of the function, not the class. CURSED LANGUAGE and bug
    }
    getPosition()
    */
  }

  render() {
    if (this.state.apiData === null)
      return <h1>Loading...</h1>
  
    else if (this.state.apiData.message !== 'success')
      return <h2>Error: API failed.</h2>
    
    return <DataDisplay latitude={this.state.apiData.iss_position.latitude} longitude={this.state.apiData.iss_position.longitude}/>
  }
}

export default App;