import React from 'react'
import { PageHeader, Table, Button, Label } from 'react-bootstrap'
import './Sightings.css'

const Sightings = ({ sightings, order, changeOrder }) => {
  const anotherOrder = order === 'descending' ? 'ascending':'descending'

  return (
    <div>  
      <PageHeader>
        Sightings 
      </PageHeader>
      <div>
        <Label bsStyle='default' className="orderInfo col-sm-5">
          Ordered {order} by date and time.
        </Label>
        <Button bsStyle='primary' className='col-sm-2.5' bsSize='small' onClick={changeOrder}>
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
  const date = sighting.dateTime.substring(0,10)
  const time = sighting.dateTime.substring(11,19)

  return (
    <tr>
      <td>{sighting.species}</td>
      <td>{sighting.description}</td>
      <td>{date} {time}</td>
      <td>{sighting.count}</td>
    </tr>
  )
}

export default Sightings  