export const Filter =({handleImputFilter, filter}) => {
    return(
        <div>
             <h2>Find contacts by name</h2>
             <input type="text"
                  name="filter"
                  onChange={handleImputFilter}
                  value={filter}
                  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"/>

        </div>
    )
}