import css from "./SearchBox.module.css";


export default function SearchBox( {inputValue, handleChange} ) {
    
    return (
        <div className={css.input}>
            <label htmlFor="name">Search contact by name</label>
            <input id="name" type="text" value={inputValue} onChange={handleChange}/>
        </div>
  )
}