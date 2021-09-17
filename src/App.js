import logo from './logo.svg';
import React, {useState} from 'react';
import { Header } from './componnets/Header'
import AddContacts, {} from './componnets/AddContacts'
import { ContactList } from './componnets/ContactList';
import './App.css';

function App() {

 const [contacts,setContacts] = useState([0])

const AddContactsHandler = (contact) => {
  console.log(contact)
  setContacts([...contacts, contact])
}
  return (

    
    <div>
   < Header ></Header>
   <AddContacts AddContactsHandler ={ AddContactsHandler} />
   <ContactList contacts ={contacts}/>
   </div>
  );
}

export default App;
