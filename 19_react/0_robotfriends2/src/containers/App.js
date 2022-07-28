import React from 'react'
import './App.css'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'

// Smart component = has a state, not a pure component. They have class syntax
class App extends React.Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	// Because this is a react function, we're not using arrow functions https://reactjs.org/docs/react-component.html, see react_notes.txt or course vid 233
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }))
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

		if (this.state.robots.length === 0) {
			return <h1>Loading...</h1>
		}

		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		)
	}
}

export default App