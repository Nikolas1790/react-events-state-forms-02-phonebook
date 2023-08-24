export const ContactList =({options, onDeleteContact}) => {
    return(
    <div>
        <ul>          
          {options.map(({id, name, number}) =>(
            <li key={id}>{name}: {number}
            <button onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
         ) )}
        </ul>
    </div>
)}