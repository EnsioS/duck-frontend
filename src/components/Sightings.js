import React from 'react'
import { PageHeader, Table, Button, Label } from 'react-bootstrap'
import Pager from './Pager'
import './Sightings.css'

const Sightings = ({ sightings, order, changeOrder, active, changeActive }) => {
  const anotherOrder = order === 'descending' ? 'ascending':'descending'
  const lineLimit = 20
  const lastIndex = Math.ceil(sightings.length/lineLimit)
  const firstLine = (active - 1) * lineLimit
  const lastLine = active * lineLimit

  return (
    <div>  
      <h1>Sightings</h1>   
      <div>
        <Label bsStyle='default col-sm-4' className="orderInfo">
          Ordered {order} by date and time.
        </Label>
        <Button bsStyle='primary col-sm-2' bsSize='small' onClick={changeOrder}>
          Order {anotherOrder}
        </Button>  
        <Pager
          active={active}
          lastIndex={lastIndex}
          changeActive={changeActive}
          style='pagination'
        />
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
          {sightings.slice(firstLine, lastLine).map(sighting => 
            <TableLine 
              key={sighting.id} 
              sighting={sighting} 
            /> 
          )}
        </tbody> 
      </Table>
      <Pager
        active={active}
        lastIndex={lastIndex}
        changeActive={changeActive}
        style='center'
      />
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