export const ContactList =({options}) => {
    return(
    <div>
        <ul>          
          {options.map((contact) =>(
            <li key={contact.id}>{contact.name}: {contact.number}
            <button>Delete</button>
            </li>
         ) )}
        </ul>
    </div>
)}