import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UpdateTodoInputItem({
  name, type, placeholder, value, inputChange,
}) {
  const handleOnChange = (e) => {
    inputChange(e);
  };

  return (
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm={2}>
        {name}
      </Form.Label>
      <Col sm={10}>
        <Form.Control type={type} placeholder={placeholder} value={value} onChange={handleOnChange} required={name==='Title'}/>
        <Form.Control.Feedback type="invalid">
          { name === 'Title' ? 'Title is required.' : 'Please Correct Email'}
        </Form.Control.Feedback>
      </Col>
    </Form.Group>
  );
}

export default UpdateTodoInputItem;
