import React from 'react'
import { Table } from 'react-bootstrap'

const Sightings = ({ sightings }) => {
    return (
      <div>  
        <h2>Havainnot</h2>
        <Table striped bordered>
          <thead>
            <tr>
              <th>species</th>
              <th>description</th>
              <th>dateTime</th>
              <th>count</th>
            </tr>  
          </thead>  
          <tbody>    
            {sightings.map(sighting => 
              < TableLine 
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