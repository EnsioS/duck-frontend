import React from 'react'
import { Pagination } from 'react-bootstrap'
import './Sightings.css'

const Pager = ({ active, lastIndex, changeActive, style}) => {
  if (lastIndex === 1) {
    return ''
  } else if  (lastIndex <= 5) {
    const indices = Array.from(Array(lastIndex),(val, index) => index + 1)
    return (
      <Pagination className={style}>
        {indices.map(index =>
          <Pagination.Item key={index} onClick={changeActive(index)} active={index === active}>
            {index}
          </Pagination.Item>
        )}
      </Pagination>  
    )
  }  
  return (
    <Pagination className={style}>  
      <Pagination.Item onClick={changeActive(1)} active={1 === active} >{1}</Pagination.Item> 
          
      {active <= 2 ? <Pagination.Item onClick={changeActive(2)} active={2 === active}>{2}</Pagination.Item> : ''} 
      {active <= 2 ? <Pagination.Item onClick={changeActive(3)}>{3}</Pagination.Item> : ''}        
  
      {active > 3 ? <Pagination.Ellipsis/> : ''}
  
      {active > 2 && active < (lastIndex - 1) ? <Pagination.Item onClick={changeActive(active - 1)}>{active - 1}</Pagination.Item> : '' }
      {active > 2 && active < (lastIndex - 1)  ? <Pagination.Item onClick={changeActive(active)} active>{active}</Pagination.Item> : ''}
      {active > 2 && active < (lastIndex - 1) ? <Pagination.Item onClick={changeActive(active + 1)}>{active + 1}</Pagination.Item> : '' }
  
      {active < (lastIndex - 2) ? <Pagination.Ellipsis /> : ''}
        
      {active >= (lastIndex - 1) ? <Pagination.Item onClick={changeActive((lastIndex - 2))}>{(lastIndex - 2)}</Pagination.Item> : ''} 
      {active >= (lastIndex - 1) ? <Pagination.Item onClick={changeActive(lastIndex - 1)} active={(lastIndex - 1) === active}>{lastIndex - 1}</Pagination.Item> : ''}    
      <Pagination.Item onClick={changeActive(lastIndex)} active={lastIndex === active}>{lastIndex}</Pagination.Item>
    </Pagination> 
  )  
}

export default Pager