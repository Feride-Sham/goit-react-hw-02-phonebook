import React from "react";
// import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contactList }) => {
  return (
    // <ul>
    //   const {(id, name)}=
    //   <ContactListItem />
    // </ul>
    <ul>
      {contactList.map(({ id, name }) => (
        // <ContactListItem item={name} key={id} />
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default ContactList;
