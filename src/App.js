import React from 'react'
import sightingService from './services/sightings'
import Sightings from './components/Sightings'
import Header from './components/Header'

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
      <div>
        <Header />
        <div className='container'> 
          <Sightings 
            sightings={orderedSightings}
            order={this.state.order}
            changeOrder={this.changeOrder}
          />
        </div>
      </div>
    )
  }
}

export default App
