import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter.js";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import { v4 as id } from "uuid";
id();

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: id(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  toFilter = (ev) => {
    this.setState({ filter: ev.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const { formSubmitHandler, toFilter, deleteContact } = this;

    const normFilter = filter.toLowerCase();
    console.log(normFilter);
    // фильтрация
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normFilter)
    );
    console.log(filteredContacts);

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter filterValue={filter} onToFilter={toFilter} />
        <ContactList
          contactList={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  }
}

export default App;
