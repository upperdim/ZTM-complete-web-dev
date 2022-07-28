import React from 'react'
import './App.css'
import CardList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	// Random name we created
	// We use arrow functions so `this` becomes `App`. Otherwise this method will be passed to an HTML attribute and `this` will become `input` HTML element where it's used.
	onSearchChange = (event) => {
		//console.log(event.target.value)
		// You always do the following insetead of this.state.searchfield = ...
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})

		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList robots={filteredRobots} />
			</div>
		)
	}
}

export default App