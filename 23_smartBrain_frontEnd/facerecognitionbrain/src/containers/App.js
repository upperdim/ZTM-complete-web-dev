import React from 'react'
import './App.css'
import Navigation from '../components/Navigation/Navigation'
import Logo from '../components/Logo/Logo'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm'
import Rank from '../components/Rank/Rank'
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

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
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onSubmit = () => {
    console.log('click')
  }

  render() {
    return (
      <div className='App'>
        <Particles className='Particles' init={particlesInit} loaded={particlesLoaded} options={particlesOptions}	/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onSubmit} />
        {/*<FaceRecognition /> */}
      </div>
    )
  }
}

export default App
