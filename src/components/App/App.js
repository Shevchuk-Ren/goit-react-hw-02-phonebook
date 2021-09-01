import React from 'react';
import { v4 as uuidv4 } from 'uuid';
console.log(`id`, uuidv4());
class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addNameFhoneBook = () => {
    console.log(`Push`, this.state.name);
  };

  handleSubmitForm = evt => {
    evt.preventDefault();
    console.log(this.state);
  };

  handleInputChange = evt => {
    this.setState({
      [evt.currentTarget.name]: evt.currentTarget.value,
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <section>
          <h2>Phonebook</h2>
          <form onSubmit={this.handleSubmitForm}>
            <label>
              Name
              <input
                type="text"
                value={name}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Number
              <input
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                itle="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                onChange={this.handleInputChange}
              />
            </label>
            <button type="submit" onClick={this.addNameFhoneBook}>
              Add contact
            </button>
          </form>
        </section>

        <section>
          <h2>Contacts</h2>
          <ul className="contactList">
            <li id={uuidv4()}>{this.addNamePhonebook}</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
