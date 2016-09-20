import React, {PropTypes} from 'react';
import {FormGroup, FormControl, HelpBlock, ControlLabel, ButtonToolbar, Button} from 'react-bootstrap';

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


const NewBookingForm = ({onSave, onChange}) => (
  <form>
    <FieldGroup
      id="category"
      label="Category"
      type="text"
      placeholder="Enter category"
      onChange={onChange}
    />
    <FieldGroup
      id="customer"
      label="Customer"
      type="text"
      placeholder="Enter name"
      onChange={onChange}
    />
    <FieldGroup
      id="details"
      label="Details"
      type="text"
      placeholder="Enter details"
      onChange={onChange}
    />
    <FieldGroup
      id="status"
      label="Status"
      type="text"
      placeholder="Enter status"
      onChange={onChange}
    />
    <ButtonToolbar>
      <Button bsStyle="primary" onClick={onSave}>Save booking</Button>
      <Button>Reset</Button>
    </ButtonToolbar>
  </form>
);

NewBookingForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NewBookingForm;
