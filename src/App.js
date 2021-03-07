import React, { Component } from "react";
import { v4 as id } from "uuid";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter.js";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

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

  // перезаписывает массив контактов и
  // запрещает сохранить уже существующий контакт
  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: id(),
      name,
      number,
    };

    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} уже есть в списке ваших контактов`);
      return;
    }
    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  // удаляет контакты
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  // получает введенное значение из фильтра
  toChangeFilter = (ev) => {
    this.setState({ filter: ev.currentTarget.value });
  };

  // отрисовывает контакту по значению из фильтра
  renderFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const {
      formSubmitHandler,
      toChangeFilter,
      deleteContact,
      renderFilteredContacts,
    } = this;
    const filteredContacts = renderFilteredContacts();

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter filterValue={filter} onToFilter={toChangeFilter} />
        <ContactList
          contactList={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  }
}

export default App;
