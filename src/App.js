import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter.js";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;
