import React from 'react';
import './Phonebook.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NumberField = ({ controledSubmit, name }) => (
  <label htmlFor="" className="d-block mb-3">
    Number
    <input
      value={name}
      onChange={controledSubmit}
      type="tel"
      name="number"
      className="d-block mt-1"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    />
  </label>
);

export default NumberField;
