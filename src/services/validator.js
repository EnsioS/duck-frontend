import valiDate from 'vali-date'

const validateDateTime = (dateTime) => {
    if (dateTime === '') return null
  
    const hasRightLength = dateTime.length === 19 || dateTime.length === 20 
    /* vali-date return true for invalid date 2001-02-30 but new Date() 
      creates date 2001-03-02. Using this it is possible to find invalid dates */
    const sameDateTime = new Date(dateTime)
    const dd = sameDateTime.toDateString().substring(8,10) 
    if (hasRightLength && valiDate(dateTime) && dateTime.substring(8,10) === dd) return 'success'
    return 'error'
}
  
const validateDescription = (description) => {
  if (description === '') return null
  else if (description.length <= 1000) return 'success'
  return 'error'
} 
  
const validateCount = (count) => {
  if (count === '') return null
  else if (Number(count) && Number(count) > 0) return 'success'
  return 'error'
}

const validateInputs = (dateTime, description, count) => {
  const validDateTime = validateDateTime(dateTime) === 'success'
  const validDescription = validateDescription(description) !== 'error' 
  const validCount = validateCount(count) === 'success'

  return validDateTime && validDescription && validCount 
}

export default { validateDateTime, validateDescription, validateCount, validateInputs }