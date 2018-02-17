import React from 'react'
import { PageHeader, Collapse, Label, Alert, Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import validator from '../services/validator'

const FieldGroup = ({ id, getValidationState, message, label, ...props }) => {
  return (
    <FormGroup 
      controlId={id}
      validationState={getValidationState}
    >      
      <Col componentClass={ControlLabel} sm={2}>
        {label}
      </Col>
      <Col sm={10}>  
        <FormControl {...props} />
        <FormControl.Feedback />
        {getValidationState === 'error' ? 
        <Alert bsStyle='danger'>
          {message}
        </Alert> : ''}
      </Col>
    </FormGroup>
  )
}

const AddNew = ({ visible, hideOrShowForm, handleFormSubmit, newDateTime, newDescription, newSpecies, newCount, handleValueChange }) => {
  return (
    <div>      
      <PageHeader>
        Add new <small><Label onClick={hideOrShowForm} bsSize='xs'>{visible ? '-' : '+'}</Label></small> 
      </PageHeader>
      <Collapse in={visible}> 
        <Form horizontal onSubmit={handleFormSubmit}>
          <FieldGroup
            id='newDateTime'
            getValidationState={validator.validateDateTime(newDateTime)}
            message='write valid date in format yyyy-mm-dd hh-mm-ss'
            type='text'
            label='date and time'
            placeholder='yyyy-mm-dd hh-mm-ss'
            value={newDateTime}
            onChange={handleValueChange}
          />   
          <FieldGroup
            id='newDescription'
            getValidationState={validator.validateDescription(newDescription)}
            message='length of description must be less than 1001 characters'
            componentClass='textarea'
            label='description'
            placeholder='write description'
            value={newDescription}
            onChange={handleValueChange}
          />
          <FormGroup controlId='formControlsSelect'>
            <Col componentClass={ControlLabel} sm={2}>
              species
            </Col>
            <Col sm={10}>  
              <FormControl componentClass='select' placeholder='select'
                value={newSpecies} onChange={handleValueChange}
              >
                <option value='mallard'>mallard</option>
                <option value='redhead'>redhead</option>
                <option value='gadwall'>gadwall</option>
                <option value='canvasback'>canvasback</option>
                <option value="lesser scaup">lesser scaup</option>
              </FormControl>
            </Col>
          </FormGroup>

          <FieldGroup
            id='newCount'
            getValidationState={validator.validateCount(newCount)}
            message='count must be positive integer'
            type='text'
            label='count'
            placeholder='How many?'
            value={newCount}
            onChange={handleValueChange}
          />  

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit" bsStyle='primary' 
                disabled={!validator.validateInputs(newDateTime, newDescription, newCount)}
              >
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Collapse>
    </div>
  )    
}

export default AddNew
  