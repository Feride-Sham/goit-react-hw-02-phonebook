import React from "react";
// import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contactList, onDeleteContact }) => {
  return (
    // <ul>
    //   const {(id, name)}=
    //   <ContactListItem />
    // </ul>
    <ul>
      {contactList.map(({ id, name, number }) => (
        // <ContactListItem item={name} key={id} />
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

export default ContactList;
