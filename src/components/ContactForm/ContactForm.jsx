import { Component } from "react";
import { nanoid } from 'nanoid'

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''        
    }
    handleImputChange = e => {
        const {name, value} = e.target;
        
        this.setState({[name]: value})
      }

      handleAddContact = e => {
        e.preventDefault();
        // console.log(e)
        // console.log(this.state)
    
        const id = nanoid();
        // this.setState({id: id})
        // console.log(id)
        this.props.onSubmit({...this.state, id});
        this.reset();

      }

      reset = () => {
        this.setState({name: '', number: ''})
      }

    render (){
        return(
            <div>
                <form onSubmit={this.handleAddContact}>        
        <label htmlFor="">
        Name<br />
        <input
           type="text"
           name="name"
           value={this.state.name}
           onChange={this.handleImputChange}
           pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            </label>
            <br />

         <button type="submit" >Add contact</button>
        </form>
            </div>
        )
    }
}