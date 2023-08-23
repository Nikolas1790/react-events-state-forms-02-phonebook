import { Component } from "react"
// import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList"

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''    
  }
  
  formSubmitHendle = data => {
    this.setState(prev => ({contacts: [...prev.contacts, data]}))
    console.log(this.state.contacts)

    console.log(data)
  }
  // handleImputChange = e => {
  //   const {name, value} = e.target;
    
  //   this.setState({[name]: value})
  // }

  // handleAddContact = e => {
  //   e.preventDefault();
  //   console.log(e)
  //   console.log(this.state)

  //   const id = nanoid();
  //   console.log(id)
  // }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHendle}/>
        
        {/* <form onSubmit={this.handleAddContact}>        
        <label htmlFor="">
        Name<br />
        <input
           type="text"
           name="name"
           value={this.state.name}
           onChange={this.handleImputChange}
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
          />
          </label>
         <br />         
         
         <label htmlFor="">Number<br />
         <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleImputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            </label>
            <br />

         <button type="submit" >Add contact</button>
        </form> */}

        <h2>Contacts</h2>

        <label htmlFor=""> Find contacts by name <br />
          <input type="text" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"/>
        </label>

        <ContactList options={this.state.contacts}/>
        {/* <ul>          
          {this.state.contacts.map((contact) =>
            <li key={contact.id}>{contact.name}: {contact.number}
            <button>Delete</button>
            </li>
          )}
        </ul> */}

      </div>
    )
  };
};
