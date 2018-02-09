import React from 'react'

const Sightings = ({ sightings }) => {
    return (
      <div>  
        <h2>Havainnot</h2>
        <table>
          <tbody>    
            {sightings.map(sighting => 
              < TableLine 
                key={sighting.id} 
                sighting={sighting} 
              /> 
            )}
          </tbody> 
        </table>
      </div>       
    )
  }
  
  const TableLine = ({ sighting }) => {
    return (
      <tr>
        <td>{sighting.dateTime}</td>
        <td>{sighting.description}</td>
        <td>{sighting.species}</td>
        <td>{sighting.count}</td>
      </tr>
    )
  }

export default Sightings  