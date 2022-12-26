import React from 'react';
import './Phonebook.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NameField = ({controledSubmit, name}) => (
  <label htmlFor="" className="d-block mb-3">
    Name
    <input
      value={name}
      onChange={controledSubmit}
      type="text"
      name="name"
      className="d-block mt-1"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
  </label>
);

export default NameField;
