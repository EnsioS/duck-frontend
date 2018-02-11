import React from 'react'
import { Table, Button } from 'react-bootstrap'

const Sightings = ({ sightings, order, changeOrder }) => {
  const anotherOrder = order === 'descending' ? 'ascending':'descending'

  return (
    <div>  
      <h1>Sightings</h1>
      Ordered {order} by date and time.
      <Button bsStyle="primary" onClick={changeOrder}>
        Order {anotherOrder}
      </Button>  
      <Table striped bordered>
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