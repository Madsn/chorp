import React, {PropTypes} from 'react';
import {FormGroup, FormControl, HelpBlock, ControlLabel} from 'react-bootstrap';

const FieldGroup = ({id, label, help, ...props}) => (
  <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props}/>
    {help && <HelpBlock>{help}</HelpBlock>}
  </FormGroup>
);

FieldGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  help: PropTypes.string,
};


const NewBookingForm = () => (
  <form>
    <FieldGroup
      id="category"
      type="text"
      label="Category"
      placeholder="Enter category"
    />
    <FieldGroup
      id="customer"
      type="text"
      label="customer"
      placeholder="Enter name"
    />
  </form>
);

export default NewBookingForm;
