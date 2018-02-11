import React from 'react'
import sightingService from './services/sightings'
import Sightings from './components/Sightings'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sightings: [],
      newDescription: '',
      newDateTime: '',
      order: 'descending'
    }
  }

  componentDidMount() {
    sightingService
      .getAll()
      .then(response => {
        this.setState({ sightings: response })        
      })
  }  

  changeOrder = () => {
    this.setState({
      order: this.state.order === 'descending' ? 'ascending':'descending'
    })
  }


  render() {
    let orderedSightings = this.state.sightings

    if (this.state.order === 'descending') {
      orderedSightings = orderedSightings.sort((a, b) => a.dateTime >= b.dateTime ? -1:1)
    } else if (this.state.order === 'ascending') {
      orderedSightings = orderedSightings.sort((a, b) => a.dateTime <= b.dateTime ? -1:1)
    }

    return (
      <div className="container">
        <header className="App-header">          
          <h1 className="App-title">Duck <i className="em em-duck"></i> </h1>
        </header>
        <p className="App-intro">        
        </p>
        <Sightings 
          sightings={orderedSightings}
          order={this.state.order}
          changeOrder={this.changeOrder}
        />
      </div>
    )
  }
}

export default App
