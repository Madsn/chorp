import React, {PropTypes} from 'react';
import {Col, Form, FormGroup, FormControl, ControlLabel, ButtonToolbar, Button} from 'react-bootstrap';

const HorizontalFieldGroup = ({id, label, ...props}) => (
  <FormGroup controlId={id}>
    <Col componentClass={ControlLabel} sm={2}>
      {label}
    </Col>
    <Col sm={4}>
      <FormControl {...props}/>
    </Col>
  </FormGroup>
);

HorizontalFieldGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const EditCustomerDetails = ({customer}) => (
  <Form horizontal>
    <HorizontalFieldGroup
      id="firstName"
      label="First name"
      type="text"
      placeholder={customer.firstName}
      value={customer.firstName}
    />
    <HorizontalFieldGroup
      id="lastName"
      label="Last name"
      type="text"
      placeholder="Øhm.. hjælp"
      value={customer.lastName}
    />
    <HorizontalFieldGroup
      id="address"
      label="Address"
      type="text"
      placeholder="Øhm.. hjælp"
      componentClass="textarea"
      value={customer.address}
    />
    <HorizontalFieldGroup
      id="phoneNumber"
      label="Phone number"
      type="text"
      placeholder="Øhm.. hjælp"
      value={customer.phoneNumber}
    />
    <HorizontalFieldGroup
      id="email"
      label="Email"
      type="text"
      placeholder="Øhm.. hjælp"
      value={customer.email}
    />
    <ButtonToolbar>
      <Button bsStyle="primary">Save changes</Button>
      <Button>Reset</Button>
    </ButtonToolbar>
  </Form>
);

EditCustomerDetails.propTypes = {
  customer: PropTypes.object.isRequired,
};

export default EditCustomerDetails;

