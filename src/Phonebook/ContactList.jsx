import React from 'react';
import './Phonebook.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactList = ({contacts, onDelete}) => (
  <div>
  {Object.keys(contacts).map((el, index) => {
            const contactsIds = contacts[index].id;
            const contactsName = contacts[index].name;
            const contactsNumber = contacts[index].number;

          
          return (
            <li key={index} className="listStyle">
              <p className='listStylePar'>
                {contactsName}:{' '}
                {contactsNumber} 
                <button type='button' className="btn btn-dark" onClick={() => {onDelete(contactsIds)}}>Delete</button>
              </p>
            </li>
              );
            })
          }
          </div>
);

export default ContactList;
