import { useState } from 'react'
import './App.css'
import ContactList from './assets/components/ContactList/ContactList'
import ContactForm from './assets/components/ContactForm/ContactForm'
import SearchBox from './assets/components/SearchBox/SearchBox'

function App() {

  const [dataContacts, setDataContacts] = useState(() =>
    [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );

  const deleteContact = (contactId) => {
    setDataContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const filteredContact = dataContacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase());
  });

  

  return (
    <div>
      <h1 className='title'>Phonebook</h1>
      <ContactForm />
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList filteredContact={filteredContact} deleteContact={deleteContact} />
    </div>
  );
}

export default App
