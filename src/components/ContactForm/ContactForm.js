import React, { Component } from "react";

import { v4 as id } from "uuid";
id();

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  // записывает данные введенные в форме
  handleInputChange = (ev) => {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  };

  // отправляет данные введеные в форме
  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  // очищает форму после отправки
  resetForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={id()}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Phone
          <input
            type="text"
            name="number"
            value={number}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
