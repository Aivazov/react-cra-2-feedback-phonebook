import React from 'react';
import './Phonebook.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ButtonField = () => (
  <label htmlFor="" className="d-block mb-4">
    <input type="submit" className="d-block btn btn-dark" value="Add contact" />
  </label>
);

export default ButtonField;
