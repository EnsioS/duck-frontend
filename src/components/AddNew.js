import React from 'react'

const AddNew = ({ handleFormSubmit, newDateTime, newDescription, handleValueChange }) => {
  return (
    <div>      
      <h2>Lisää uusi</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          päivämäärä ja aika: 
          <input 
            id="newDateTime"
            value={newName}
            onChange={handleValueChange}
          />
        </div>
        <div>
          kuvaus:
          <input
            id="newDescription"
            value={newNumber}
            onChange={handleValueChange}
          />    
        </div>
    {/* myös input kentät laji(species) Valintakenttä
        ja lukumäärä count */}
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
    </div>
  )    
}

export default AddNew
  