import React from 'react'
import sightingService from './services/sightings'
import Header from './components/Header'
import Notification from './components/Notification'
import AddNew from './components/AddNew'
import Sightings from './components/Sightings'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sightings: [],
      newDateTime: '',
      newDescription: '',
      newSpecies: 'mallard',
      newCount: '',
      notification: null,
      showForm: true,
      activeTable: 1,
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

  formatDateTime = (dateTime) => {
    let formatted = dateTime
    if (!dateTime.includes('T')) formatted = formatted.replace(' ', 'T')
    if (dateTime.substring(dateTime.length - 1) !== 'Z') formatted = formatted + 'Z'
    return formatted
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    const sighting = {
      species: this.state.newSpecies,
      description: this.state.newDescription,
      dateTime: this.formatDateTime(this.state.newDateTime),
      count: this.state.newCount
    }

    this.addSighting(sighting)    
  }

  hideOrShowForm = () => {
    this.setState({ showForm: !this.state.showForm})
  }

  addSighting = (sighting) => {
    sightingService
      .create(sighting)
      .then(newSighting => {
        this.setState({
          notification: 'Added new sighting',
          sightings: this.state.sightings.concat(newSighting),
          newDateTime: '',
          newDescription: '',
          newSpecies: 'mallard',
          newCount: ''
        })
        setTimeout(() => {
          this.setState({ notification: null})
        }, 5000)
      })
  }

  handleValueChange = (event) => {
    this.setState({ [event.target.id]: event.target.value})
  }

  changeOrder = () => {
    this.setState({
      order: this.state.order === 'descending' ? 'ascending':'descending'
    })
  }

  changeActive = (active) => {
    return () => {
      this.setState({
        activeTable: active 
      })
    }  
  }

  orderSightings = () => {
    let orderedSightings = this.state.sightings

    if (this.state.order === 'descending') {
      return orderedSightings.sort((a, b) => a.dateTime >= b.dateTime ? -1:1)
    } 

    return orderedSightings.sort((a, b) => a.dateTime <= b.dateTime ? -1:1)
  }

  render() {
    let orderedSightings = this.orderSightings()

    return (
      <div>
        <Header />
        <div class='container'> 
          <Notification
            message={this.state.notification}
          />
          <AddNew
            visible={this.state.showForm}
            hideOrShowForm={this.hideOrShowForm}
            newDateTime={this.state.newDateTime}
            newDescription={this.state.newDescription}
            newCount={this.state.newCount}
            handleValueChange={this.handleValueChange}
            handleFormSubmit={this.handleFormSubmit}
          />
          <Sightings 
            sightings={orderedSightings}
            order={this.state.order}
            changeOrder={this.changeOrder}
            active={this.state.activeTable}
            changeActive={this.changeActive}
          />
        </div>
      </div>
    )
  }
}

export default App
