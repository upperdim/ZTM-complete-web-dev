import React, { Component } from 'react'; // { Component } is like React.Component
import './Hello.css'

// class Hello extends Component {
// 	render() {
// 		return ( // f1 tc = font1 text center by techyons. ikr, terrible...
// 			<div className='f1 tc'>
// 				<h1>Hello World</h1>
// 				<p>Welcome to React</p>
// 				<p>{this.props.greeting}</p>
// 			</div>
// 		);
// 	}
// }

// This will work too.
// We are essentially just creating functions 
// that input props (attributes and values) and output HTML.
const Hello = (props) => {
	return ( // f1 tc = font1 text center by techyons. ikr, terrible...
		<div className='f1 tc'>
			<h1>Hello World</h1>
			<p>Welcome to React</p>
			<p>{props.greeting}</p>
		</div>
	);
}

export default Hello;