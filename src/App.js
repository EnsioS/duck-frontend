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
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Duck</h1>
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
