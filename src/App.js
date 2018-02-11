import React from 'react'
import sightingService from './services/sightings'
import Sightings from './components/Sightings'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sightings: [],
      newDescription: '',
      newDateTime: ''
 
    }
  }

  componentDidMount() {
    sightingService
      .getAll()
      .then(response => {
        this.setState({ sightings: response })        
      })
  }  

  render() {
    return (
      <div className="container">
      <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://afeld.github.io/emoji-css/emoji.css"/>
      </head>
        <header className="App-header">          
          <h1 className="App-title">Duck <i class="em em-duck"></i> </h1>
        </header>
        <p className="App-intro">        
        </p>
        <Sightings 
          sightings={this.state.sightings}
        />
      </div>
    )
  }
}

export default App
