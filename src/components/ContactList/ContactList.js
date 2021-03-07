import React from "react";
import PropTypes from "prop-types";

const ContactList = ({ contactList, onDeleteContact }) => {
  return (
    <ul>
      {contactList.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}: </p> <p>{number}</p>
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
