import React from 'react'
import './App.css'
import Navigation from '../components/Navigation/Navigation'
import Logo from '../components/Logo/Logo'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm'
import Rank from '../components/Rank/Rank'
import FaceRecognition from '../components/FaceRecognition/FaceRecognition'
import Signin from '../components/Signin/Signin'
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

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',      // Current input the URL input box
      imageUrl: '',   // URL of the image to be processed by the AI API
      box: {},        // Face boundary box in the image
      route: 'signin' // Keeps track of where we are in the page
    }
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

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    // Using `this.state.imageUrl` would give an error because of the way setState() works. Hard to debug...
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err))
  }

  // This function will be attached to buttons onClick handler
  // So that user can be redirected to the home page upon signing in etc.
  onRouteChange = (newRoute) => {
    this.setState({route: newRoute})
  }

  render() {

    return (
      <div className='App'>
        <Particles className='Particles' init={particlesInit} loaded={particlesLoaded} options={particlesOptions}	/>
        <Navigation onRouteChange={this.onRouteChange} />
        {
          this.state.route === 'signin' ? <Signin onRouteChange={this.onRouteChange}/>
          : <div>
              <Logo />
              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
              <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
            </div>
        }
      </div>
    )
  }
}

export default App
