import React from 'react'

class Signin extends React.Component {
	constructor(props) {
		super()
		// This is the state of `Signin` class, not to be confused with App.js.
		// We could also use App.js's state but why would we bother passing it
		// around and try to keep it in sync etc. We will be needing these info just here
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method: 'post', 
			headers: {'Content-Type': 'application/json'}, 
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
			.then(response => response.json())
			.then(data => {
				if (data === 'success') {
					this.props.onRouteChange('home')
				}
				// TODO: display an error message if it fails
			})
	}

	render() {
		return (
			<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 black-80">
					<div className="measure">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						<legend className="f1 fw6 ph0 mh0">Sign In</legend>
						<div className="mt3">
							<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
							<input 
								className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
								type="email" 
								name="email-address" 
								id="email-address" 
								onChange={this.onEmailChange}
							/>
						</div>
						<div className="mv3">
							<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
							<input 
								className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
								type="password" 
								name="password" 
								id="password" 
								onChange={this.onPasswordChange}
							/>
						</div>
						</fieldset>
						<div className="">
						<input 
							// We don't immidately calling onRouteChange('home')
							// because we want to call it after this has been rendered
							// that's why we use an arrow function such that
							// onROuteChange will only be called when the user clicks on it
							// ??
							onClick={this.onSubmitSignIn}
							className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
							type="submit" 
							value="Sign in" 
						/>
						</div>
						<div className="lh-copy mt3">
						<p onClick={() => this.props.onRouteChange('register')} href="#0" className="f6 link dim black db pointer">Register</p>
						</div>
					</div>
				</main>
			</article>
		)
	}
}


export default Signin
