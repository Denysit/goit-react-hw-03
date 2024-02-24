import { useState } from 'react'
import './App.css'
import ContactList from './assets/components/ContactList/ContactList'

function App() {

  const [dataBase, setDataBase] = useState(() => {
   
  [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]
  })


  return (
   <div>
      <h1>Phonebook</h1>
      <ContactList dataBase={dataBase} />
      
  
</div>
  )
}

export default App
