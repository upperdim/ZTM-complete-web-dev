import React from 'react'

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hasError: false
		}
	}

	// This is like a try-catch block. If anything errors, it will run this lifecycle
	componentDidCatch() {
		this.setState({ hasError: true })
	}

	render() {
		if (this.state.hasError) {
			return (
				<h1>Oops... That is not good.</h1>
			)
		}

		return this.props.children
	}
}

export default ErrorBoundary