import React from 'react'
import './App.css'
import Navigation from '../components/Navigation/Navigation'
import Logo from '../components/Logo/Logo'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm'
import Rank from '../components/Rank/Rank'
import FaceRecognition from '../components/FaceRecognition/FaceRecognition'
import Signin from '../components/Signin/Signin'
import Register from '../components/Register/Register'
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import Clarifai from 'clarifai'
import clarifaiApiKey from './clarifaiApiKey'

const app = new Clarifai.App({
  apiKey: clarifaiApiKey
})

const particlesInit = async (main) => {
  // console.log(main);
  await loadFull(main);
};

const particlesLoaded = (container) => {
  // console.log(container);
};

// Might do: You can store this giant thing somewhere else and import it
const particlesOptions = {
  fpsLimit: 120,
  interactivity: {
  events: {
    onClick: {
    enable: true,
    mode: "push",
    },
    onHover: {
    enable: true,
    mode: "repulse",
    },
    resize: true,
  },
  modes: {
    push: {
    quantity: 4,
    },
    repulse: {
    distance: 200,
    duration: 0.4,
    },
  },
  },
  particles: {
  color: {
    value: "#ffffff",
  },
  links: {
    color: "#ffffff",
    distance: 150,
    enable: true,
    opacity: 0.5,
    width: 1,
  },
  collisions: {
    enable: true,
  },
  move: {
    direction: "none",
    enable: true,
    outModes: {
    default: "bounce",
    },
    random: false,
    speed: 2,
    straight: false,
  },
  number: {
    density: {
    enable: true,
    area: 800,
    },
    value: 80,
  },
  opacity: {
    value: 0.5,
  },
  shape: {
    type: "circle",
  },
  size: {
    value: { min: 1, max: 5 },
  },
  },
  detectRetina: true,
}

const initialState = {
  input: '',       // Current input the URL input box
  imageUrl: '',    // URL of the image to be processed by the AI API
  box: {},         // Face boundary box in the image
  route: 'signin', // Keeps track of where we are in the page
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends React.Component {
  constructor() {
    super()
    this.state = initialState
  }

  // Will be used after registering. Server sends back the user info with JSON upon successful register.
  // This function will take that user info and load it into our client App
  loadUser = (userData) => {
    this.setState({user: {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      entries: userData.entries,
      joined: userData.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputImage')
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onPictureSubmit = () => {
    this.setState({imageUrl: this.state.input})
    // Using `this.state.imageUrl` would give an error because of the way setState() works. Hard to debug...
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        if (response) {
          // We send PUT request with user id to `/image` route, 
          // it increments the users' entry count by 1 and returns back incremented entry count
          fetch('http://localhost:3000/image', {
            method: 'put', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            // Data of the response is the entry count. `/images` route returns back the users' incremented entry count as said above
            .then(entryCount => {
              // Updates 1 field of `user` object while maintaining other fields
              this.setState(Object.assign(this.state.user, { entries: entryCount }))
            })
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err))
  }

  // This function will be attached to buttons onClick handler
  // So that user can be redirected to the home page upon signing in etc.
  onRouteChange = (newRoute) => {
    if (newRoute === 'signout')
      this.setState(initialState)
    else if (newRoute === 'home')
      this.setState({isSignedIn: true})

    this.setState({route: newRoute})
  }

  render() {

    return (
      <div className='App'>
        <Particles className='Particles' init={particlesInit} loaded={particlesLoaded} options={particlesOptions}	/>
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} />
        {
          this.state.route === 'home' 
          ? <div>
              <Logo />
              <Rank name={this.state.user.name} entries={this.state.user.entries} />
              <ImageLinkForm onInputChange={this.onInputChange} onPictureSubmit={this.onPictureSubmit} />
              <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
            </div>
          : this.state.route === 'signin' 
            ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        }
      </div>
    )
  }
}

export default App
