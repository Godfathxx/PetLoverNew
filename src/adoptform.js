import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AdoptionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    petPreference: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log('Form submitted:', formData);
    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
      petPreference: '',
      additionalInfo: '',
    });
  };

  return (
    <div>
      <h2>Pet Adoption Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPetPreference">
          <Form.Label>Pet Preference:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your preferred pet"
            name="petPreference"
            value={formData.petPreference}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formAdditionalInfo">
          <Form.Label>Additional Information:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Any additional information"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AdoptionForm;
