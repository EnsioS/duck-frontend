import React from 'react'
import { Table, Button, Label } from 'react-bootstrap'
import './Sightings.css'

const Sightings = ({ sightings, order, changeOrder }) => {
  const anotherOrder = order === 'descending' ? 'ascending':'descending'

  return (
    <div>  
      <h1>Sightings</h1>
      <div>
        <Label bsStyle='default col-sm-5' className="orderInfo">
          Ordered {order} by date and time.
        </Label>
        <Button bsStyle='primary col-sm-2.5' bsSize='small' onClick={changeOrder}>
          Order {anotherOrder}
        </Button>  
      </div>  
      <Table striped bordered className='table'>
        <thead>
          <tr>
            <th>species</th>
            <th>description</th>
            <th>date and time</th>
            <th>count</th>
          </tr>  
        </thead>  
        <tbody>    
          {sightings.map(sighting => 
            <TableLine 
              key={sighting.id} 
              sighting={sighting} 
            /> 
          )}
        </tbody> 
      </Table>
    </div>       
  )
}
  
const TableLine = ({ sighting }) => {
  return (
    <tr>
      <td>{sighting.species}</td>
      <td>{sighting.description}</td>
      <td>{sighting.dateTime}</td>
      <td>{sighting.count}</td>
    </tr>
  )
}

export default Sightings  